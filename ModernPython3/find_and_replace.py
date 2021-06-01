# Write a function called find_and_replace, which takes in a file name,
# a word to search for, and a replacement word. Replaces all instances
# of the word in the file with the replacement word.


def find_and_replace(source, old_word, new_word):
    with open(source, "r+") as file:
        replaced = file.read().replace(old_word, new_word)
        file.seek(0)
        file.write(replaced)
        file.truncate()


find_and_replace("a.txt", "This", "Matey, there be")
