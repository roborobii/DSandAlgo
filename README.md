# This repository is for solidifying my understanding of data structures and algorithms
arrays: fast access for an element at an index, but slow lookups and insertions (if it was full, it should create a bigger array twice its size for amortized O(1) time complexity, not good for memory; it takes memory it does not use up). Major uses and concepts: iteration, resizing, partitioning, merging.

strings: understand how strings are represented in memory, undestand basic operators such as comparison, copying, matching, joining, splitting ... can be viewed as an array, namely one made of characters. we treat strings separately from arrays because certain operations which are commonly applied to strings, for example: comparison, joining, splitting, searching for substring, replacing one string by another, parsing, and etc do not make sense for general arrays

lists: understand tradeoffs with respect to arrays. be comfortable with iteration, insertion, and deletion within singly and doubly linked lists. know how to implement a list w dynamic allocation, and with arrays

stacks and queues: recognize where last in first out (stack) and first in first out (queue) semantics are applicable. know array and linked list implementations.

binary trees: use for representing hierarchichal data. know about depth, height, leaves, search path, traversal sequences, successor/predecessor operations

heaps: key benefit is O(1) lookup find-max, O(log n) insertion, and O(log n) deletion of max. node and array representations. min-heap variant.

hash tables: key benefit O(1) insertions, deletions, and lookups. key disadvantages: not suitable for order related queries

binary search trees: key benefit O(log N) insertions, deletions, lookups, find-min, find-max, successr, predecessor, when tree is height balanced. understand node fields, pointer implementations and be familiar with notion of balance<br />
