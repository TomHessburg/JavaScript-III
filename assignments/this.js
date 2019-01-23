/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding: If were to just call (this) in console log, or directly in a function without context. the "this"
        keyword is going to automatically try and link to "window" object(the main housing object of everything on your page essentially).
        If we view this, wel be returned like.... ALL of everything that is JavaScript, because everything in JS is based on objects, and this will return the windows object which includes everything.

* 2. explicit binding: were assiging "this" based explicitly on objects passed into a function for a specific use.
                        youre essentially "calling" on an object inside of a function to give it context on how to use the "this" keyword within that function.

* 3. implicit binding: Directly onto an object method. For instance, implicit binding lives inside of a prebuilt object and deals souly with that object. uses methods like bind and all.

* 4. "new" binding: New binding is to essentially create new objects using the constructor function with the new keyword. "this" in this case refers to the next object being created.
*
* write out a code example of each explanation above
*/

// Principle 1
console.log("           window binding example=======");


    console.log(this); //pretty straight forward

// Principle 2
console.log("           explicit binding example=======");

    const me = {            //explicit binding
        name: "tom",
        age: 23
    }

    const hobbies = ["puzzles", "music", "coding"];
        
    function iLike(hobby1,hobby2,hobby3){   
        console.log(`Im ${this.name}, I'm ${this.age}, and I enjoy ${hobby1}, ${hobby2}, and ${hobby3}`)
    }

    console.log(iLike.call(me, ...hobbies));    //biinding the "this" in the iLike function by using call and passing in the "me" object to reference as "this".





// Principle 3
console.log("           implicit binding example=======");

const tomHessburg = {       //implicit binding.
    name: "tom",
    age: 23,
    solvePuzzle: function(){
        console.log(`${this.name} solves a puzzle`)
    }
}

console.log(tomHessburg.solvePuzzle());     //solvePuzzle is a method implicitly bound to the tomHessburg object





// Principle 4      //new binding
                //new uses a constructor function...
console.log("           new binding example=======");                

    function human(name, thingTheyDo){  //this is the constructor function. "this" refers to whatever object we construct with this function and its attributes.
        this.person = name;     
        this.thing = thingTheyDo;
        this.doesThing = function(){
            console.log(`my name is ${this.person} and im doing ${this.thing}`)
        };
    }

    const tom = new human("Tom", "STUFF OKAY STOP ASKING.....!");

    console.log(tom);
    console.log(tom.person);
    console.log(tom.thing);
    console.log(tom.doesThing());