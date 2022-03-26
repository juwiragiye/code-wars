import string


def is_pangram(s):
    return len({char: 1 for char in list(s.lower()) if char in string.ascii_lowercase}) == len(string.ascii_lowercase)
