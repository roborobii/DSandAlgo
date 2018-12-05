public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Merge Sort Implementation");
        int[] arr = {20, 35, -15, 7, 55, 1,-22};
        quickSort(arr, 0, arr.length);
        mergeSort(arr, 0, arr.length);
        int[] arr2 = {2,5,9,8,2,8,7,10,4,3};
        countingSort(arr2);
        for (int i = 0; i < arr2.length; i++) {
            System.out.println(arr2[i]);
        }
    }

    public static void countingSort(int[] arr) {
        if (arr.length == 0) return;
        int max = arr[0], min = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (max < arr[i]) { // if the maximum is less than something inside of the array, change it
                max = arr[i];
            }
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        // initialize temp array, which counts the number of occurences
        int[] temp = new int[max-min+1]; // size of the temp array is the size of the range of values (inclusive)
        // for example, [3-2] will be able to store 1 element but we should be able to store both elements 2 and 3, that's why it's +1
        for (int i = 0; i < temp.length; i++) { // initialize everything to 0 at the start
            temp[i] = 0;
        }

        // now count the number of occurences
        for (int i = 0; i < arr.length; i++) {
            temp[arr[i]-min]++; // arr[i] = min then min must be incremented, which is at temp[0]
        }

        // now put it back in the array, replace current array with the number of occurences and it will be sorted
        for (int i = 0, j = 0; i < temp.length; i++) {
            while (temp[i] > 0) {
                arr[j++] = i+min;
                temp[i]--;
            }
        }

        // array will be sorted
    }

    // {20, 35, -15, 7, 55, 1,-22};
    public static void mergeSort(int[] input, int start, int end) {
        // when there is a one element array, break out of recursion
        // base case
        if (end - start < 2) { // end - start < 2 means one element array
            // end is always greater than the last valid index of the partition to sort
            // so if start is 0 and end is 1, (1-0) that means there's only 1 element at arr[0]
            // so if start is 6 and end is 7, that means there's only 1 element and it's at arr[6]
            return;
        }

        // first invocation: start will be 0 and end is going to be 7
        // end is always greater than the last valid index of the partition to sort
        int mid = (start + end) / 2;
        mergeSort(input, start, mid);
        mergeSort(input, mid, end);
        merge(input, start, mid, end);
    }

    // {20, 35, -15, 7, 55, 1,-22};
    public static void merge(int[] input, int start, int mid, int end) {
        if (input[mid-1] <= input[mid]) {
            // we are always merging sorted arrays so
            // we do not have to create a temporary array and copy
            // they are already sorted
            // the last elment in the left array is mid-1 and the first element in right array is mid,
            // and if the first element in the sorted right is greater than the last element in the sorted left array,
            // then we are done
            return;
        }

        int i = start;
        int j = mid;
        int tempIndex = 0;

        int[] temp = new int[end-start]; // will hold right amount of elements
        while (i < mid && j < end) { // drop out when one of them is done, handle left over after
            // compare what's at index i to what's at index j
            temp[tempIndex++] = input[i] <= input[j] ? input[i++]: input[j++];
            // this writes the smaller of the two to the temp array
        }
        // since we drop out of the loop after traversing one of the arrays,
        // the other will still have some elements left over

        // if it's the right array that still has some elements left over,
        // then do not have to do anything, it's already in the sorted array
        // {32,34} , {33,36,38,40}
        // temp = {32,34,33,36,38,40} ; 36,38,40 will be over-written -> needless work

        // if it's left we have to do something, all positions in the right side will need to change

        // first param: source array,
        // second: start the copy at position i (first index of the left array that we still have not handled (left over)
        // third: start + tempIndex
        // this will handle copying the input from one location in the input array to another location in the input array

        // it will jump over the elements we'll copy from the temp array
        // then write any remaining elements from the left array
        System.arraycopy(input, i, input, start + tempIndex, mid-i);

        // copy the temp array
        // we are copying up to tempIndex
        System.arraycopy(temp, 0, input, start, tempIndex);
    }

    public static void quickSort(int[] input, int start, int end) {
        if (end - start < 2) {
            return;
        }

        int pivotIndex = partition(input, start, end);
        quickSort(input, start, pivotIndex);
//        for (int i = 0; i < input.length; i++) {
//            System.out.println(input[i]);
//        }
        quickSort(input, pivotIndex + 1, end);
    }

    public static int partition(int[] input, int start, int end) {
        // This is using the first element as the pivot
        int pivot = input[start];
        int i = start;
        int j = end;

        while (i < j) {

            // NOTE: empty loop body
            while (i < j && input[--j] >= pivot);
            if (i < j) {
                input[i] = input[j];
            }

            // NOTE: empty loop body
            while (i < j && input[++i] <= pivot);
            if (i < j) {
                input[j] = input[i];
            }

        }

        input[i] = pivot;
        return i;

    }
}
