import random

print('-----------------------------')
print('   GUESS THAT NUMBER GAME')
print('-----------------------------')

the_number = random.randint(0, 100)
name = raw_input('What is your name? ')


def guessing_game(number):
    guess_text = input('Guess a number between 0 and 100: ')
    guess = int(guess_text)

    if guess < number:
        print('Sorry {0}, your guess of {1} was too LOW.'.format(name, guess))
        guessing_game(number)
    elif guess > number:
        print('Sorry {}, your guess of {} was too HIGH.'.format(name, guess))
        guessing_game(number)
    else:
        print('You got it!')


guessing_game(the_number)
