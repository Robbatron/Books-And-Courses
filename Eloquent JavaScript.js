function WrapValue(n) {
	var localVariable = n;
	return function() { return localVariable; };
}

var wrap1 = WrapValue(1);
var wrap2 = WrapValue(2);

console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
}

var twice = multiplier(2);
console.log(twice(5));

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}
console.log(power(2,3));

// 100x faster with 'for' than recursive function
function powerLoop(base, exponent) {
	if (exponent == 0)
		return 1;
	else if (exponent == undefined)
		exponent = 2;
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
}
console.log(powerLoop(2,3));

function findSolution(target) {
	function find(start, steps) {
		if (start == target)
			return steps;
		else if (start > target)
			return null;
		else
			return find(start + 5, "(" + steps + " + 5)")
			||     find(start * 3, "(" + steps + " * 3)");
	}
	return find(1, "1");
}
console.log(findSolution(13));

// Print farm inventory of 7 cows and 11 chickens

function zeroPadding(number, width){
	var string = String(number);
	while(string.length < width)
		string = "0" + string;
	return string;
}

function printFarmInventory(cows, chickens, pigs){
	console.log(zeroPadding(cows, 3) + " Cows");
	console.log(zeroPadding(chickens, 3) + " Chickens");
	console.log(zeroPadding(pigs, 3) + " Pigs");
}

printFarmInventory(7,11,2);

// Both of these functions will work with this call.
// The first function is variable notation, which has to come before the call
// The second function is declarative notation, which is conceptually moved to top of scope
var a = function greet(name){
	console.log("Hello " + name);
}

a("robbie");

function a(name){
	console.log("Hello " + name);
}

//Below will throw maximum call stack error, since there is too much recursion
function chicken() {
	return egg();
}
function egg() {
	return chicken();
}
console.log(chicken() + " came first.");

function min(a,b){
	if(a < b)
		return a;
	else
		return b;
}

console.log(min(0,10));
console.log(min(0,-10));

function isEven(a){
	if (a % 2 == 0)
		return "even!"
	else
		return "literally can't even :("
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function countBs(b){
	return countChar(b, "B");
}

function countChar(b,k){
	var count = 0;
	for (var i = 0; i < b.length; i++) {
		if(b.charAt(i) == k)
			count++;
	}
	return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

var day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running", "television"]
}
console.log(day1.squirrel)
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf)

//An object of arrays
var journal = [
	{
		events: ["work", "touched tree", "pizza", "running", "television"],
		squirrel: false
	},
	{
		events: ["work", "ice cream", "cauliflower", 
				"lasagna", "touched tree", "brushed teeth"],
		squirrel: false
	},
	{
		events: ["weekend", "cycling", "break", "peanuts", "beer"],
		squirrel: true
	}
]

 var journal = [];

 function addEntry(events, didITurnIntoASquirrel){
 	journal.push({
 		event: events,
 		squirrel: didITurnIntoASquirrel
 	});
 }

 addEntry(["work", "touched tree", "pizza", "running", "television"], false)
 addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", 
 		  "brushed teeth"], false)
 addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)

 function phi(table){
 	return (table[3] * table[0] - table[2] * table[1]) /
 		Math.sqrt((table[2] + table[3]) *
               (table[0] + table[1]) *
               (table[1] + table[3]) *
               (table[0] + table[2]));
 }

 console.log(phi([76,9,4,1]));

function hasEvent(event, entry){
	return entry.event.indexOf(event) != -1;
}

function tableFor(event, journal){
	var table = [0, 0, 0, 0]
	for (var i = 0; i < journal.length; i++) {
		var entry = journal[i], index = 0;
		if (hasEvent(event, entry)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}

console.log(tableFor("pizza", JOURNAL));

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);

console.log(map["touched tree"]);

for (var event in map)
  console.log("The correlation for '" + event +
              "' is " + map[event]);

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var event = journal[entry].events;
    for (var i = 0; i < event.length; i++) {
      var event = event[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for (var event in correlations)
  console.log(event + ": " + correlations[event]);

for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index){
	return array.slice(0, index)
		.concat(array.slice(index + 1))
}
	console.log(remove(["a", "b", "c", "d", "e"], 2))

//useful string propertes
console.log("cake".slice(1,3))
console.log("coconut".indexOf("u"))
console.log("one two three".indexOf("ee"));
console.log("  okay \n ".trim());

var string = "abc";
console.log(string.length);
console.log(string.charAt(0));
console.log(string[1]);

The arguments object
function noArguments(){}
This is okay
noArguments(1,2,3)
function threeArguments(a,b,c){}
And so is this
threeArguments()
//It is okay to pass more or fewer arguments in JS, since they are optional
//The arguments object is a lot like an array, but it does not have methods
//such as slice or indexof so it's harder to use than a real array. 

function argumentCounter() {
	console.log("You gave me", arguments.length, "arguments.")
}

argumentCounter("Straw man", "Tautology", "Ad hominem")

var range = function(start, end, step) {
 	var a = []
 	for (var i = start;
 		step > 1 || step === undefined 
 		? i <= end : i >= end;
 		step ? i = i + step : i++)
 			{a.push(i)}
 	return a
}
	
var sumRangeArray = function(a) {
	return a.reduce((x,y)=>x+y)
}

console.log(range(1,10,2))
console.log(range(2,-2,-1))
console.log(sumRangeArray(range(1,10)))


//Makes a completely new array
function reverseArray(arr) {
	var newArr = []
	for (i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i])
	return newArr
}

//Doesn't make a new array
function reverseArrayInPlace(arrValue) {
	for (i = 1; i < arrValue.length; i++) {
		var remove = arrValue.splice(i,1)
			arrValue.unshift(remove[0])
	}
	return arrValue
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}


var obj = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, {here: 1, object: 2}))
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}))
// → true


function arrayToList(arrValues) {
	var listObj = null
	for (var i = arrValues.length - 1; i >= 0; i--) {
		listObj = { value: arrValues[i], rest: listObj }
	}
	return listObj
}

function listToArray(listObj) {
	var arr = []
	for (var j = listObj; j; j = j.rest) {
		arr.push(j.value)
	}
	return arr
}

function prepend(element, list) {
	return newArr = { value: element, rest: list }

}

function nth(list, number) {
	if (!list)
		return undefined
	else if (number == 0)
		return list.value
	else
		return nth(list.rest, number - 1)
}

console.log(arrayToList([10, 20, 30, 40]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));

function deepEqual(val1, val2) {
	if (typeof val1 == "object" || typeof val2 == "object")
		return true
	if (val1 == null || val2 == null)
		return false
	if (val1 === val2)
		return true

	var propsInA = 0, propsInB = 0

  	for (var prop in val1)
    	propsInA += 1;

  	for (var prop in val2) {
    	propsInB += 1;
    	if (!(prop in val1) || !deepEqual(val1[prop], val2[prop]))
      	return false;
  	}
  	return propsInA == propsInB
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
//→ true
console.log(deepEqual(obj, {here: 1, object: 2}));
//→ false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//→ true

var arrays = [[1,2,3], [4,5], [6]]

console.log(arrays.reduce(function(a,b){ return a.concat(b)}))



//Chapter 5 - Flattening

var arrays = [[1,2,3], [4,5], [6]]
arrays = arrays.reduce(function(call, back) {
	return call.concat(back)
}, [])

console.log(arrays)

Chapter 5 - Mother/Child Age Difference
Use sample data set
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var filterMap = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(filterMap));



//Chapter 5 - Historical Life Expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(arr, group) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}



//Chapter 5 - Every and then some
function every(arr, pred){
	for (var i = 0; i < arr.length; i++) {
		if (!pred(arr[i]))
			return false
	}
	return true
}

function some(arr, pred){
	for (var i = 0; i < arr.length; i++) {
		if (pred(arr[i]))
			return true
	}
	return false
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));





//Chapter 6 - The Secret Life of Objects

var rabbit = {}

function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'")
}

var whiteRabbit = {type: "white", speak: speak}
var fatRabbit = {type: "fat", speak: speak}

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!")
fatRabbit.speak("I could sure use a carrot right now.")
//this - this is when 'this' finally clicked for me

//apply and call can simulate method calls
speak.apply(fatRabbit, ["Burp!"])
speak.call({type: "old"}, "Oh my.")

function Rabbit(type) {
	this.type = type
}

var killerRabbit = new Rabbit("killer")
var blackRabbit = new Rabbit("black")
console.log(killerRabbit.type)

Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'")
}

blackRabbit.speak("Doom...")

function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight())
		}, 0)
	})
}

function colWidths(rows) {
	rows[0].map(function(_,i) {
		return Math.max(max, row[i].minWidth())
	}, 0)
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}



//Chapter 6 - A Vector Type

//In JS, function can also be used as object constructors
function Vector(x,y) {
	this.x = x
	this.y = y
}

Vector.prototype.plus = function(pVec) {
	return new Vector(this.x + pVec.x, this.y + pVec.y)
}

Vector.prototype.minus = function(mVec) {
	return new Vector(this.x - mVec.x, this.y - mVec.y)
}

Object.defineProperty(Vector.prototype, "length", {
	get: function() { return Math.sqrt(this.x * this.x + this.y * this.y) }
	//yay math!
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5



//Chapter 6 - Another Cell

function TextCell(text) {
  this.text = text.split("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function StretchCell(inner, width, height) {
	this.inner = inner
	this.width = width
	this.height = height
}

StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight()) 
}

StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth())	
}

StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height)
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]



//Chapter 6 - Sequence Interface

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype = {
    plus: function(vect) {
        return new Vector(this.x + vect.x, this.y + vect.y);
    },
    minus: function(vect) {
        return new Vector(this.x - vect.x, this.y - vect.y);
    },
    get length() {
        var x = this.x,
            y = this.y;
        return Math.sqrt(x * x + y * y);
    }
};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5



// Chapter 8 - Error Retry

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch(e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    }
    throw e;
  }
}

console.log(reliableMultiply(8, 8));
// → 64



// Chapter 8 - Locked Box

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  box.unlock();
  try {
    body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true



// Chapter 9 - Quoting style

var text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/'(.+?[\.,]+)'/g, "\"$1\""));
console.log(text.replace(/(^|\W)'|'($|\W)/g, '$1"$2'));



// Chapter 9 - RegEx Golf

function verify(regexp, yes, no) {
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
    console.log(regexp.exec(s));
  });
}



// Chapter 9 - RegEx JS Numbers

var number = /^[+\-]?(\d+\.?\d*|\.\d+)(e[+\-]?\d+)?$/i;

["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});



























