puts "This is the beginning!"
load "end.rb" # need file extension
puts "Alright, that worked."
load "./end.rb" # can include relative path
if false
  load "end.rb" # can be nested
end
