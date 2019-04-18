# Complete the sockMerchant function below.
def sockMerchant(n, ar): # O(n), linear to len of ar which is n
    pairs = 0
    socks = dict()
    for color in ar:
        if color in socks:
            socks[color] += 1
            if socks[color] % 2 == 0:
                pairs += 1
        else:
            socks[color] = 1
    return pairs
