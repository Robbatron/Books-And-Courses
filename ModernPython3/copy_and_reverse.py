# Take text from a source file, reverse it, then write it to a destination file

def copy_and_reverse(source, destination):
    with open(source) as s:
        file = s.read()
    with open(destination, "w") as d:
        d.write(file[::-1])

copy_and_reverse("a.txt", "b.txt")
