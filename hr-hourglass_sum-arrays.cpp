// Complete the hourglassSum function below.
int hourglassSum(vector<vector<int>> arr) { // O(N^2)
    int rows = arr.size();
    int cols = arr[0].size();
    int maximum_hourglass = -INFINITY;
    int current_hourglass = 0;
    int i, j;
    for (i = 1; i < rows-1; ++i) {
        for (j = 1; j < cols-1; ++j) {
            current_hourglass = arr[i][j]
                + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]
                + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
            if (current_hourglass > maximum_hourglass) {
                maximum_hourglass = current_hourglass;
            }
        }
    }
    return maximum_hourglass;
}