ARGV.each do |argument|
  number = argument.to_i
  puts "The square of #{number} is #{number ** 2}"
end

# ruby argv.rb 4 6 8 10
