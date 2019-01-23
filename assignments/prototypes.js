/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  












/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes){          // creates parent prototype.
        this.createdAt = attributes.createdAt;     
        this.dimensions = attributes.dimensions;
    }

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game...`
};    //adds destroy method to GameObject prototype... this will be coppied onto the child and grandchild using Object.create(). Object got create is coppies the prototype of one object and applies it to a child. the parent DOES NOT inherit from a child, but the child can inherit from the parent.






















/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes){      //creates characterstats prototype.
  GameObject.call(this, attributes);      // derives GameObject as parent and binds this keyword to parent

  this.healthPoints = attributes.healthPoints;     
  this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);   //adds GameObjects prototype to CharStats Prototype

CharacterStats.prototype.takeDamage = function(){                 //adds charstats takeDamage method as described...
  return `${this.name} took damage.`
};


















/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(attributes){      //creates Humanoid prototype.
  CharacterStats.call(this, attributes);      // derives Charstats as parent and binds this keyword to parent(which derives its prototype from GameObject, working all the way down the line)

  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}


Humanoid.prototype = Object.create(CharacterStats.prototype);   //adds GameObjects prototype to CharStats Prototype

Humanoid.prototype.greet = function(){                 //adds charstats takeDamage method as described...
  return `${this.name} offers a greeting in ${this.language}.`
};




Humanoid.prototype.rollDice = function() { 
  let rollDice = Math.round(Math.random()*this.healthPoints);
  return rollDice;
}














 // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.


    //villain constructor
function Villain (attributes) { //create villain
  Humanoid.call(this, attributes); //villain takes context of Humanoid for this keyword

  this.evilLevel = attributes.evilLevel;//add evil specific attributes
  this.evilSidekick = attributes.evilSidekick;
}

Villain.prototype = Object.create(Humanoid.prototype);//take prototype from humanoid so we can do the same methods with Villain


// Villain.prototype.rollDice = function() { //add a method for "roll dice", this will be compare to hero class, with a winner causing something to happen... we multiply by hero level to make possible roll higher or lower depending on levels.
//   let evilDiceRoll = Math.round(Math.random()*this.evilLevel);
//   return evilDiceRoll;
// }      

      //originally had these set specifically to ehro and villain contructors, but moved to humanoid constructor so anyone could play..





    //hero constructor
function Hero (attributes) { //create hero
  Humanoid.call(this, attributes); //hero takes context of Humanoid for this keyword, NOT Villain, because we dont want the vilains context, we want the humanoids context... theyre seprate

  this.heroLevel = attributes.heroLevel;//add evil specific attributes
  this.heroSidekick = attributes.heroSidekick;
}

Hero.prototype = Object.create(Humanoid.prototype);//take prototype from humanoid so we can do the same methods with Villain


// Hero.prototype.rollDice = function() { 
//   let heroDiceRoll = Math.round(Math.random()*this.heroLevel);
//   return heroDiceRoll;
// }
      //originally had these set specifically to ehro and villain contructors, but moved to humanoid constructor so anyone could play..










/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),

    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },

    healthPoints: 5,

    name: 'Bruce',

    team: 'Mage Guild',

    weapons: [
      'Staff of Shamalama',
    ],

    language: 'Common Tongue',
  });



  const swordsman = new Humanoid({
    createdAt: new Date(),

    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },

    healthPoints: 15,

    name: 'Sir Mustachio',

    team: 'The Round Table',

    weapons: [
      'Giant Sword',
      'Shield',
    ],

    language: 'Common Tongue',
  });



  const archer = new Humanoid({
    createdAt: new Date(),

    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },

    healthPoints: 10,

    name: 'Lilith',

    team: 'Forest Kingdom',

    weapons: [
      'Bow',
      'Dagger',
    ],

    language: 'Elvish',
  });










  //create a character using the evil constructor, and its inherited prototypes...
  
  const evilSteve = new Villain({
    createdAt: new Date(),
  
    dimensions: {
      length: 20,
      width: 5,
      height: 6,
    },
  
    healthPoints: 20,
  
    name: 'steve',
  
    team: 'Steves guild for evil doods',
  
    weapons: [
      'evilness',
    ],
  
    language: 'insults',
    evilLevel: 24,
    evilSidekick: false
  });
  

    //create a character using the hero constructor, and its inherited prototypes...
  const heroHarry = new Hero({
    createdAt: new Date(),
  
    dimensions: {
      length: 23,
      width: 9,
      height: 3,
    },
  
    healthPoints: 28,
  
    name: 'harry',
  
    team: 'Harrys magical team for heros who like eating sticks of butter.',
  
    weapons: [
      'a dazeling stare from his pretty blue eyes.... and a mean right hook.',
    ],
  
    language: 'english... hes pretty vanila',
    heroLevel: 19,
    heroSidekick: false
  });  












    //who they are, and both of their new abilities to roll dice...
  console.log(evilSteve);
  console.log(evilSteve.rollDice());

  console.log(heroHarry);
  console.log(heroHarry.rollDice());



    function encounter (player1, player2){    //choose your players by inserting their names into the function call, in this case were using evil steve and hero harry
          //initial dialogue...
      alert(`${player1.greet()}`);
      alert(`${player2.greet()}`);
      alert(`${player1.name} pulls out ${player1.weapons}`);
      alert(`${player2.name} responds by unsheashing his ${player2.weapons}`);
      alert(`${player2.name} vs.... ${player1.name}...... FIGHT!@#!@#!@#!@`);


        //the fight...

      function fight(){
        let p1Roll = player1.rollDice();
        let p2Roll = player2.rollDice();
        alert(`${player1.name} rolls a ${p1Roll}... ${player2.name} rolls a ${p2Roll}...`);

            //damage dealing section...
        if(p1Roll > p2Roll){
          let damage = p1Roll - p2Roll;
          player2.healthPoints -= p1Roll;
          alert(`${player1.name} hits and does ${damage} points of damage, leaving ${player2.name} with ${player2.healthPoints} health!`);
        }else {
          let damage = p2Roll - p1Roll;
          player1.healthPoints -= p1Roll;
          alert(`${player2.name} hits and does ${damage} points of damage, leaving ${player1.name} with ${player1.healthPoints} health!`);
        }

        if(player1.healthPoints > 0 && player2.healthPoints > 0){
          fight();      //recursive call instead of a loop here... just seemed a bit more intuitive than a do while or something, tho maybe not the best way to do this.
        }else if (player1.healthPoints > 0 && player2.healthPoints < 0){
          alert(`${player1.name} WINS!`);
        }else {
          alert(`${player2.name} WINS!`);
        }

      }
      fight();  
    }


    //some potential encounters jsut to show that any combination of them will work!
            //encounter(evilSteve, heroHarry);
            //encounter(swordsman, archer);
            //encounter(mage, swordsman);







  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.



  
  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!






  document.querySelector("button").addEventListener("click", encounter(evilSteve, heroHarry));
 