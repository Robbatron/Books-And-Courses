# Write a function called repeat, which accepts a string and a number and returns a new string with the string passed
# to the function repeated the number amount of times. Do not use the built in repeat method!


def repeat(string, number):
    s = ''
    while number > 0:
        s += string
        number -= 1  # guess we don't need a new counter variable
    return s


repeat('*', 3)  # '***'
repeat('abc', 2)  # 'abcabc'
repeat('abc', 0)  # ''
