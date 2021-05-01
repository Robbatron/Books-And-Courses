phrase = "The Ruby Programming Language is amazing!"

puts phrase =~ /Ru/ # index position of character
puts phrase =~ /!/ # some special characters work
puts phrase =~ /./ # special regex character, won't work
puts phrase =~ /ing/ # will only return first occurrence

voicemail = "I can be reached at 5-12-456 or regexman@gmail.com"

p voicemail.scan(/re/) # give all matches
p voicemail.scan(/re/).length

p voicemail.scan(/[re]/) # all r's and e's

voicemail.scan(/\d+/) { |digit_match| puts digit_match.length }
