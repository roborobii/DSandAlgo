def minimumBribes(q): # O(N^2)
    length = len(q)
    swaps = dict()
    counter = 0
    # bubblesort, and everytime we swap we increment
    for i in range(length):
        for j in range(length-i-1):
            if q[j] > q[j+1]:
                if q[j] in swaps:
                    swaps[q[j]] += 1
                    if swaps[q[j]] == 3:
                        print("Too chaotic")
                        return
                else:
                    swaps[q[j]] = 1
                temp = q[j]
                q[j] = q[j+1]
                q[j+1] = temp
                counter += 1
    print(counter)
    return counter