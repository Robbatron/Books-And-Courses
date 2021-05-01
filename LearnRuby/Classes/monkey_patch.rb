class Array
  def sum
    self.filter { |n| n.is_a?(Numeric) }.reduce(:+)
  end
end

# p [1, true, 2, "Hello", 3].sum

class String
  def alphabet_sum
    alphabet = ("a".."z").to_a
    sum = 0
    self.downcase.each_char do |char|
      if alphabet.include?(char)
        numeric_value = alphabet.index(char) + 1
        sum += numeric_value
      end
    end
    sum
  end
end

# puts "abcd".alphabet_sum
# puts "zzz".alphabet_sum
# puts "hello world".alphabet_sum
# puts "HELLO WORLD".alphabet_sum

class Numeric
  def custom_times
    i = 0
    while i < self
      yield(i + 1)
      i += 1
    end
  end
end

5.custom_times { |i| puts i }
