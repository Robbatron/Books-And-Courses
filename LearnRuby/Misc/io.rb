File.open('novel.txt').each do |line|
  puts line
end

File.open("myFirstFile.txt", "w") do |file|
  file.puts "I'm creating this from Ruby!"
  file.write "No line break here!"
  file.puts "Pretty cool!"
end

File.open("myFirstFile.txt", "a") do |file|
  file.puts "This will be appended to the end"
  file.print "And one more line with file.print"
  file.write "And another line with file.write"
end

File.rename("myFirstFile.txt", "somethingBetter.txt")

File.open("fileToDelete.txt", "w") do |file|
  file.puts "So long!"
end

File.delete("fileToDelete.txt")

if File.exist?("myFirstFile.txt")
  File.delete("myFirstFile.txt")
end
