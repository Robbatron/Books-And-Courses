//Subclassing Monsters

//Now that you have a monster created, create a subclass of the Monster called Snake.

//The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.

//The instance of Snake that is passed in should have their health deducted by 10

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    // No need to declare constructor (see answer that I provided in class Q&A)
    bite(sssnake) { return sssnake.health -= 10; }
}
