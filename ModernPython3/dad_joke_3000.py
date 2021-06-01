import requests
from random import choice
from pyfiglet import figlet_format
from termcolor import colored

print(colored(figlet_format("DAD JOKE 3000!"), color="magenta"))

url = "https://icanhazdadjoke.com/search"
term = input("Let me tell you a joke! Give me a topic: ")

res = requests.get(
    url,
    headers={"Accept": "application/json"},
    params={"term": term}
).json()

try:
    choice = choice(res['results'])
    print(f"I have {res['total_jokes']} jokes about {term}. Here's one: {choice['joke']}")
except IndexError:
    print(f"Sorry, couldn't find a joke with your term: {term} ")
