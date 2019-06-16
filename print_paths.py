def print_paths(board):
    result = []
    rows = len(board)
    cols = len(board[0])
    search(0,0,board,rows,cols,result,[])
    return result

def search(i,j,board,rows,cols,result,temp):
    if i > rows-1 or j > cols-1:
        return
    if i == rows - 1 and j == cols-1:
        result.append("".join(temp))
        temp.pop()
        return
    temp.append(board[i][j])
    search(i+1,j,board,rows,cols,result,temp)
    search(i,j+1,board,rows,cols,result,temp)
    if len(temp) != 0:
        temp.pop()

ip = [['A', 'X'],['D', 'E']]
print(print_paths(ip))