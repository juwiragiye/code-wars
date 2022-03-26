def rgb(r, g, b):
    color = tuple(map(out_of_range, [r, g, b]))
    return ('{:02X}' * 3).format(*color)


def out_of_range(colorValue):
    if colorValue < 0:
        colorValue = 0
    if colorValue > 255:
        colorValue = 255
    return colorValue
