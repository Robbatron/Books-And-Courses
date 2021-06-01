# Write a function called statistics, which takes in a file name and returns a
# dictionary with the number of lines, word, and characters in the file.

def statistics(source):
    with open(source) as s:
        lines = s.readlines()

    return {
        "lines": len(lines),
        "words": sum(len(line.split(" ")) for line in lines),
        "characters": sum(len(line) for line in lines)
    }


statistics("a.txt")
