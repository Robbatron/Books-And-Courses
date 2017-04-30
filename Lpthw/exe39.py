states = {
    'Oregon': 'OR',
    'Florida': 'FL',
    'California': 'CA',
    'New York': 'NY',
    'Michigan': 'MI'
}

cities = {
    'CA': 'San Francisco',
    'MI': 'Detroit',
    'FL': 'Jacksonville'
}

# add some more cities
cities['NY'] = 'New York'
cities['OR'] = 'Portland'

#print some states
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
