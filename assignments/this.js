/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding- When the value of 'this' is used in global scope.
 * 2. Implicit Binding- Is when the object is before a dot.
 * 3. New Binding- An object creator.
 * 4. Explicit Binding- It used when 'call' or 'apply' method is used.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function dogs(breed) {
  console.log(this);
  return breed;
}
dogs("Pit Bull");
// Principle 2

// code example for Implicit Binding
const me = {
  name: "Jacqueline",
  age: 40,
  state: "North Carolina",
  myIntro: function() {
    console.log(
      `Hello my name is ${this.name} I am ${this.age} and I live in ${
        this.state
      }.`
    );
    console.log(this);
  }
};
me.myIntro();

// Principle 3

// code example for New Binding
function Something(talk) {
  this.firstPerson = "What's up? ";
  this.talk = talk;
  this.talker = function() {
    console.log(this.firstPerson + this.talk);
    console.log(this);
  };
}

const terri = new Something("Jackie");
const jackie = new Something("Terri");

jackie.talker();
terri.talker();

// Principle 4

// code example for Explicit Binding
function workouts(parm) {
  console.log(parm, this);
}

const myworkouts = {
  pushMovements: "Chest Press",
  pullMovements: "Dead Lift",
  movements: function() {
    console.log(this);
  }
};
