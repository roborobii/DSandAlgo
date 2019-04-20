# Complete the hourglassSum function below.
def hourglassSum(arr):
    maximum_hourglass = -math.inf
    current_hourglass = 0
    rows = len(arr)
    cols = len(arr[0])
    for i in range(1,rows-1):
        for j in range(1,cols-1):
            current_hourglass = arr[i][j] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]                     + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]
            if current_hourglass > maximum_hourglass:
                maximum_hourglass = current_hourglass
    return maximum_hourglass
