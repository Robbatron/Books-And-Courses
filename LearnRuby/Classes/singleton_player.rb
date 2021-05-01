class Player
  def play_game
    rand(1..100) < 50 ? "Winner!" : "Loser!"
  end
end

player_one = Player.new
player_two = Player.new

def player_two.play_game # only available on player_two instance
  "Winner!"
end

p player_two.play_game # overwrites method in class
p player_one.play_game # "this game is rigged!"

p player_two.class.ancestors # anonymous singleton won't show
p player_two.singleton_methods # :play_game
p player_one.singleton_methods # empty array

p player_two.singleton_class

# I've found that Singletons are especially useful for unit testing.
