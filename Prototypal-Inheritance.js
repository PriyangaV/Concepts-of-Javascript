/*
  @ Prototypal Inheritance
      $ Prototype is a JavaScript object property that gives us inheritance and re-usability in our objects

      $ Every object in JavaScript contains a prototype object

      $ Think of the prototype object as our blueprint for our objects

      $ JavaScript does not have a formal "Class" keyword in ES5

      $ ES6 "Class" keyword comes with some syntactic sugar for creating and managing objects

      $ To create objects we use functions to create constructors for our objects

      $ Convention to capitalize functions that are object constructors

      $ Any other functions that are not constructors should start lower case

        function Person(name) {
          this.name = name;
        }

        * Person constructor with instance property called ‘name’

        * Create object from our constructor

          $ var bob = new Person('Bob');
          console.log(bob.name) // 'Bob'

          $ var john = new Person('John');
          console.log(john.name) // 'John'

          $ Two new instances of our Person object, (bob and john)

          $ Each have their own name property that logs out their respective values

        * Adding a method 'walk' to the prototype of our Person object

          Person.prototype.walk = function() {
            console.log(this.name + ' is walking');
          };

          $ var bob = new Person('Bob');
          bob.walk(); // 'Bob is walking'

          $ var john = new Person('John');
          john.walk(); // 'John is walking'

            $ Anything we attach to the object prototype, new instances of that object share the prototype

            $ This prevents the creation of a new walk method from being created with every person object

              ! It is usually bad practice to alter or extend native JavaScript object prototypes such as Object or Array

              * Manipulating these object prototypes could result in conflicts with future versions or methods added to these native objects

              *  Exceptions to this practice would be to pollyfill newer JavaScript features for browser support such as Array.Map, Array.ForEach, etc

      ? Object Inheritance
          > What if we want to create a Programmer object that inherits our Person object?

            $ Make a Programmer constructor and use prototype to inherit

              function Programmer(name) {
                Person.call(this, name);
                this.programmingLanguage = '';
              }

              * "call" statement allows us to set the name property in the context of the Person constructor
                $ Roughly equated to a super call in other OO languages

              Programmer.prototype = Object.create(Person.prototype);
              - // "Object.create" will create a new object from Person.prototype
              Programmer.prototype.constructor = Programmer;

              $ var mary = new Programmer('Mary');
              mayry.walk(); // 'Mary is walking'

          $ Programmer will inherit all the Person properties and methods from the Person constructor and prototype object

          $ Set the prototype constructor property

          $ Every object’s prototype contains a constructor property that defines what its original constructor was

          ! When we set a object property to inherit another object we must make sure to define our constructor property to reflect the new object we are creating

          * If this is not set, the prototype.constructor property will return the original parent object as this would be incorrect for the child object

          > writeCode method to Programmer

              Programmer.prototype.writeCode = function() {
                console.log(this.name + ' is coding in ' + this.programmingLanguage);
              };

              $ var mary = new Programmer('Mary');
              mary.programmingLanguage = "Javascript";

              mary.walk(); // 'Mary is walking'
              mary.writeCode(); // 'Mary is coding in JavaScript'

              * Programmer object that inherits a Person object

              $ Our Programmer object can now walk from inheriting the Person object but can also writeCode from its own method and programmingLanguage property

          > Private Members in Constructors

              function Programmer(name) {
                var skillLevel = 0;

                this.getSkillLevel = function() {
                  return skillLevel;
                };

                this.increaseSkillLevel = function() {
                  skillLevel += 1;
                };
              }

              console.log(mary.getSkillLevel()); // '0'
              mary.skillLevel = 1000;
              console.log(mary.getSkillLevel()); // '0'
              mary.increaseSkillLevel();
              console.log(mary.getSkillLevel()); // '1'

              $ We can edit or get the programmer’s skill level through the properties exposed by the constructor

              $ This allows private members on our objects

              > Downside to this method

                $ Every instance of Programmer will now create a getSkillLevel() and increaseSkillLevel() method

                $ These methods are defined in the constructor instead of being defined on our prototype

                $ They cannot be shared across all instances of Programmer

                * Only technique to allow private members on our objects that are not Singleton or Module based

*/
