import unittest
from activities import eat, nap


class ActivityTests(unittest.TestCase):
    def test_eat_healthy(self):
        """eat should have a positive message for healthy eating"""
        self.assertEqual(
            eat('broccoli', is_healthy=True),
            "I'm eating broccoli, because my body is a temple"
        )

    def test_eat_unhealthy(self):
        """eat should indicate you've given up on healthy eating"""
        self.assertEqual(
            eat('pizza', is_healthy=False),
            "I'm eating pizza, because YOLO!"
        )

    def test_short_nap(self):
        """short naps should be refreshing"""
        self.assertEqual(
            nap(1),
            "I'm feeling refreshed after my 1 hour nap"
        )

    def test_long_nap(self):
        """long naps should be discouraging"""
        self.assertEqual(
            nap(1),
            "I'm feeling refreshed after my 1 hour nap"
        )


if __name__ == "__main":
    unittest.main()

# from functools import wraps
# from time import sleep
#
#
# def delay(time):
#     def inner(fn):
#         @wraps(fn)
#         def inner_inner():
#             print("Waiting {}s before running {}".format(time, fn.__name__))
#             sleep(time)
#             return fn()
#         return inner_inner
#     return inner
#
#
# @delay(3)
# def say_hi():
#     return "hi"
#
#
# print(say_hi())
#
#
# def enforce(*types):
#     def decorator(fn):
#         @wraps(fn)
#         def new_func(*args, **kwargs):
#             new_args = []
#             for (a, t) in zip(args, types):
#                 new_args.append(t(a))
#             return fn(*new_args, **kwargs)
#         return new_func
#     return decorator
#
#
# @enforce(str, int)
# def repeat_msg(msg, times):
#     for time in range(times):
#         print(msg)
#
#
# repeat_msg('hello', '3')
