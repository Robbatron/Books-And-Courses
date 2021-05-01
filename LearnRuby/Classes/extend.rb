module Announcer
  def who_am_i(name = @name)
    "The name is this class is #{name}"
  end
end

class Dog
  include Announcer
  def initialize(name)
    @name = name
  end
end

class Cat
  include Announcer

  def initialize(name)
    @name = name
  end
end

sarge = Dog.new("sarge")
daedra = Cat.new("daedra")

p sarge.who_am_i
p Dog.who_am_i("Sarge")
p daedra.who_am_i
