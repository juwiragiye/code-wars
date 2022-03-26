def odd_count(n):
    return [i % 2 != 0 for i in range(n)].count(True)
