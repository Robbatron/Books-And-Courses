# Write a function called truncate that will shorten a string to a specified length, and add "..." to the end.
# Given a string and a number n, truncate the string to a shorter string containing at most n characters. For example,
# truncate("long string", 5) should return a 5 character truncated version of "long string". If the string gets
# truncated, the truncated return string should have a "..." at the end. Because of this, the smallest number passed
# in as a second argument should be 3.


def truncate(string, number):
    if number < 3:
        return 'Truncation must be at least 3 characters.'
    if len(string) >= number:
        return string[:number - 3] + '...'
    return string



truncate("Super cool", 2) # "Truncation must be at least 3 characters."
truncate("Super cool", 1) # "Truncation must be at least 3 characters."
truncate("Super cool", 0) # "Truncation must be at least 3 characters."
truncate("Hello World", 6) # "Hel..."
truncate("Problem solving is the best!", 10) # "Problem..."
truncate("Another test", 12) # "Another t..."
truncate("Woah", 4) # "W..."
truncate("Woah", 3) # "..."
truncate("Yo",100) # "Yo"
truncate("Holy guacamole!", 152) # "Holy guacamole!"
