# # reading #
# file = open("story.txt")
# print(file.read())
# print(file.read())  # this doesn't print anything bc the cursor is still at end of file
#
# file.seek(0)  # set cursor to beginning of file
# print(file.read())  # now it will show
#
# print(file.readline())  # gives all lines with line breaks preserved regardless of cursor
#
# file.seek(0)
# print(file.readlines())  # gives all lines as a list
#
# # closing files
# file.closed  # False
# file.close()
# file.closed  # True


# # With Blocks #
# with open("story.txt") as f:
#     print(f.read())
#
# print(f.closed)  # True, unlike with open
# # this is because f.__enter__() is called at the start
# # of a with block and f.__exit__() is called at the end


# Writing Files #
# with open("haiku.txt", "w") as file:
#     file.write("Writing files is great\n")
#     file.write("Here's another line of text\n")
#     file.write("Closing now, goodbye!\n")
#
# # "w" will write over, "a" will append
# with open("haiku.txt", "a") as file:
#     file.write("Here's one more haiku\n")
#     file.write("What about the older one?\n")
#     file.write("Let's go check it out\n")
#
# # "r+" reads and writes to a file (writing based on cursor)
# # kinda like an "update" mode, don't know why it isn't "u"
# # will not make a new file if non exists, like "w" and "a"
# with open("haiku.txt", "r+") as file:
#     file.write(":)")
#     file.seek(10)
#     file.write(":(")

