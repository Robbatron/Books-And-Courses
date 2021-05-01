class ConvenienceStore
  include Enumerable
  attr_reader :snacks

  def initialize
    @snacks = []
  end

  def add_snack(snack)
    snacks << snack
  end

  def each
    snacks.each { |snack| yield snack }
  end
end

bodega = ConvenienceStore.new
bodega.add_snack("Doritos")
bodega.add_snack("Jolly Ranchers")
bodega.add_snack("Takis")

p bodega.any? { |snack| snack.length > 3 }
p bodega.map { |snack| snack.upcase }
p bodega.select { |snack| snack.downcase.include?("j") }
p bodega.sort.reverse
