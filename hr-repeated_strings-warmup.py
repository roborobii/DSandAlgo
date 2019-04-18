# Complete the repeatedString function below.
def repeatedString(s, n): # O(s), linear to length of s
    length = len(s)
    a_indices = set()
    total_a = 0
    for i in range(len(s)):
        if s[i] == 'a':
            a_indices.add(i)
            total_a += 1
    s_times = math.floor(n / length)
    total_a *= s_times
    s_mod = n % length
    for i in range(s_mod):
        if i in a_indices:
            total_a += 1
    return total_a