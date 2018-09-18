collection = {"name": "Mandy", "age": 24}


def say_hello(info: object) -> str:
    return "Hello, {name}. My age is {age}.".format(**info)


print(say_hello(collection))
