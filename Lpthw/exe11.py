print "How old are you?",
age = raw_input()
print "How tall are you?",
height = raw_input()
print "How much do you weigh?",
weight = int(raw_input())

print "So, you're %r old, %r tall and %r heavy." % (age, height, weight+10) #adding 10 to bug the user
