public class Heap {

    private int[] heap;
    private int size;

    public Heap(int capacity) {
        heap = new int[capacity];
    }

    public void insert(int value) {
        if (isFull()) {
            System.out.println("No room in the heap!");
        } else {
            // add to the end of the array
            heap[size] = value;
            // then heapify
            fixHeapAbove(size);
            size++;
        }
    }

    public void heapSort() { // O(nlogn)
        int lastHeapIndex = size - 1;
        for (int i = 0; i < lastHeapIndex; i++) {
            int temp = heap[0];
            heap[0] = heap[lastHeapIndex - i];
            heap[lastHeapIndex - i] = temp;

            // o(logn) inside o(n)
            fixHeapBelow(0, lastHeapIndex - 1 - i);
        }
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Empty heap");
            return -1;
        } else {
            return heap[0];
        }
    }

    public int delete(int index) {
        if (isEmpty()) {
            System.out.println("Heap's empty!");
            return -1;
        } else {
            // get parent of the deleted item
            int parent = getParent(index);

            // save the deleted item to return later
            int deletedValue = heap[index];

            // replace where the deleted value is with the bottom right most node
            // index for it is in the size-1
            heap[index] = heap[size-1];

            if (index == 0 || heap[index] < heap[parent]) {
                fixHeapBelow(index,size -1);
            } else {
                fixHeapAbove(index);
            }

            size--;

            return deletedValue;
        }
    }

    private void fixHeapAbove(int index) {
        int newVal = heap[index];
        while (index > 0 && newVal > heap[getParent(index)]) {
            heap[index] = heap[getParent(index)];
            index = getParent(index);
        }
        heap[index] = newVal;
    }

    private void fixHeapBelow(int index, int lastHeapIndex) {
        int childToSwap;

        while (index <= lastHeapIndex) {
            int leftChild = getChild(index, true);
            int rightChild = getChild(index, false);
            if (leftChild <= lastHeapIndex) {
                if (rightChild > lastHeapIndex) {
                    childToSwap = leftChild;
                } else {
                    childToSwap = (heap[leftChild] > heap[rightChild] ? leftChild: rightChild);
                }

                if (heap[index] < heap[childToSwap]) {
                    int tmp = heap[index];
                    heap[index] = heap[childToSwap];
                    heap[childToSwap] = tmp;
                } else {
                    break;
                }
                index = childToSwap;
            }
        }
    }

    public boolean isFull() {
        return size == heap.length;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int getChild(int index, boolean left) {
        if (left) {
            return index*2 + 1;
        } else {
            return index*2 + 2;
        }
    }

    public int getParent(int index) {
        return (int) Math.floor((index - 1) / 2);
    }

}
