states = {
    'Oregon': 'OR',
    'Florida': 'FL',
    'California': 'CA',
    'New York': 'NY',
}

# create a basic set of states and some cities in them
cities = {
    'CA': 'San Francisco',
    'AZ': 'Phoenix',
    'FL': 'Jacksonville'
}

# add some more cities
cities['NY'] = 'New York'
cities['OR'] = 'Portland'

# print out some cities
>>>>>>> 3364e6bb0d9889d8f5d224f00878b50c758e1d09
print '-' * 10
print 'NY State has: ', cities['NY']
print 'OR State has: ', cities['OR']

# do it by using the state then cities dict
print '-' * 10
print 'Michigan has: ', cities[states['Michigan']]
print 'Florida has: ', cities[states['Florida']]

# print every city in state
print '-' * 10
for state, abbrev in states.items():
    print '%s has the city %s' % (state, abbrev)

# now do both at the same time
print '-' * 10
print 'Arizona\'s abbreviation is: ', states['Arizona']
print 'Florid\'s abbreviation is: ', states['Florida']

# do it by using the state then cities dict
print '-' * 10
print 'Arizona has: ', cities[states['Arizona']]
print 'Florida has: ', cities[states['Florida']]

# print every state abbreviation
print '-' * 10
for state, abbrev in states.items():
    print '%s is abbreviated %s' % (state, abbrev)

# print every city in state
print '-' * 10
for abbrev, city in cities.items():
    print '%s has the city %s' % (abbrev, city)

# now do both at the same time
print '-' * 10
for state, abbrev in states.items():
    print '%s state is abbreviated %s and has city %s' % (state, abbrev, cities[abbrev])

print '-' * 10
# safely get a abbreviation by state that might not be there
state = states.get('Texas')

if not state:
    print 'Sorry, no Texas.'

# get a city with a default value
city = cities.get('TX', 'Does Not Exist')
print 'The city for the state TX is: %s' % city
if not state: # if state is false
    print 'Sorry. No Texas.'

# get a city with a default value
city = cities.get('TX', 'Does Not Exist')
print 'The city for the state \'TX\' is: %s' % city
