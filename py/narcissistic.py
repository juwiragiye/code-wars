def narcissistic(value):
    return sum(map(lambda x: int(x) ** len(str(value)), [x for x in str(value)])) == value
