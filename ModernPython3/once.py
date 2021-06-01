# Write a function called once. This function accepts a function and returns a new function
# that can only be invoked once. If the function is invoked more than once, it should return None.

# Version 1
# def once(fn):
#     once.count = 0
#     def inner(*args):
#         if once.count != 0:
#             return None
#         once.count += 1
#         return fn(*args)
#     return inner

# Version 2
def once(fn):
    fn.is_called = False
    def inner(*args):
        if not fn.is_called:
            fn.is_called = True
            return fn(*args)
    return inner


def add(a, b):
    return a + b


oneAddition = once(add)
oneAddition(2, 2)  # 4
oneAddition(2, 2)  # None
oneAddition(12, 200)  # None