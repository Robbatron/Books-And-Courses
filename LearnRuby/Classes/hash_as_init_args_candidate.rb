class Candidate
  attr_accessor :name, :age, :occupation, :hobby, :birthplace
  def initialize(name, age, occupation, hobby, birthplace)
    @name = name
    @age = age
    @occupation = occupation
    @hobby = hobby
    @birthplace = birthplace
  end
end

# perfectly valid
senator = Candidate.new("Mr. Smith", 53, "Banker", "Fishing", "Kentucky")
# attr_accessor has created readers and writers
p senator.occupation
p senator.hobby
p senator.name

# what if the args are accidentally put in the wrong order?
senator = Candidate.new("Mr. Smith", 53, "Fishing", "Banker", "Kentucky")
p senator.occupation # Fishing

# Instead we can pass a details hash to Candidate.new
class Candidate
  attr_accessor :name, :age, :occupation, :hobby, :birthplace
  def initialize(name, details = {})
    @name = name
    @age = details[:age]
    @occupation = details[:occupation]
    @hobby = details[:hobby]
    @birthplace = details[:birthplace]
  end
end

puts

info = { occupation: "Banker", hobby: "Fishing", birthplace: "Kentucky" }
senator = Candidate.new("Mr. Smith", info)

# That way args aren't positional. This is done a lot in JS.
p senator.occupation
p senator.hobby
p senator.name
p senator.age # will show as nil since we removed it. object is still created.

puts

# if we forget second argument, we still defaulted it...
senator = Candidate.new("Mr. Smith", { hobby: "Horror Movies", occupation: "Popcorn Vendor"})
# ideal over a program crash over missed arguments...?
p senator.occupation
p senator.hobby
p senator.name
p senator.age
