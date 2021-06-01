# Create a function running_average that returns a function. When the function
# returned is passed a value, the function returns the current average of all
# previous function calls. You will have to use a closure to solve this. You
# should round all answers to the 2nd decimal place.


def running_average():
    count = 0
    total = 0

    def wrapper(value):
        if value:
            nonlocal total
            total += value
            nonlocal count
            count += 1
            average = total / count
            return round(average, 2)

    return wrapper


rAvg = running_average()
rAvg(10)  # 10.0
rAvg(11)  # 10.5
rAvg(12)  # 11

rAvg2 = running_average()
rAvg2(1)  # 1
rAvg2(3)  # 2
