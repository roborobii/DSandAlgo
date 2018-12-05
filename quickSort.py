def quicksort(arr):
    if (len(arr) <= 1):
        return arr
    pivot = len(arr) - 1
    i = 0
    while (i < pivot):
        
        if (arr[pivot] < arr[i]):
            temp = arr[pivot]
            if (i == pivot-1):
                arr[pivot] = arr[i]
                arr[i] = temp
                i += 1
                pivot -= 1
            else:
                arr[pivot] = arr[i]
                arr[i] = arr[pivot-1]
                arr[pivot-1] = temp
                pivot -= 1

        else:
            i += 1
        # print(arr)
        # print(i, pivot)
        # print(arr)
        # if arr[pivot] < arr[i]:
        #     if (pivot - 1 == i):
        #         temp = arr[pivot]
        #         arr[pivot] = arr[i]
        #         arr[i] =  temp
        #         i += 1
        #     else:
        #         temp = arr[pivot-1]
        #         arr[pivot-1] = arr[pivot] # pivot will shift one down
        #         arr[pivot] = arr[i] # old pivot will be replaced with a higher
        #         arr[i] = temp 
        #     pivot -= 1
        # else:
        #     i += 1
        
        # print(pivot)
    return quicksort(arr[:pivot]) + [arr[pivot]] + quicksort(arr[pivot+1:])

test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
print quicksort(test)