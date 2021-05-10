/*

  @ With ES6 class keyword

      $ JavaScript has been a prototypal based language using object prototypes to create object inheritance and code reuse

      $ The new ES6 Class adds a new syntax on top of traditional prototypes

      $ Under the hood, ES6 Classes are still using prototypal inheritance

      class Person {
        - // Constructors are helpful for any object initialization logic
        constructor(name) {
          this.name = name;
        }

        - // Methods
        walk() {
          console.log(this.name + ' is walking');
        }
      }

      var bob = new Person('Bob');
      var john = new Person('John');

      console.log(bob.name) // Bob
      console.log(john.name) // John

      console.log(bob.walk()) // Bob is walking
      console.log(john.walk()) // John is walking

      - // Get and Set

      class Person {
        constructor(name) {
          - // "_" convention to create a backing field to store our name property

          - // Without this every time get or set is called it would cause a stack overflow

          - // The get would be called and which would cause the get to be called again over and over creating an infinite loop

          this._name = name;

          - // backing field this._name is not private

          - // Someone could still access bob._name and retrieve the property

          - // Achieve private state on objects, we would use ES6 symbol and module to create true encapsulation and private state

          - // Private methods can be created using module or traditional closures using an IIFE
        }

        get name() {
          return this._name.toUpperCase();
        }

        set name(newName) {
          this._name = newName; // validation could be checked here such as only allowing non numerical values
        }

        walk() {
          console.log(this._name + ' is walking');
        }
      }

      $ let bob = new Person('Bob');
      console.log(bob.name); // 'BOB'

      $ var john = new Person('John');
      console.log(john.name) // 'JOHN'

      console.log(bob.walk()) // BOB is walking
      console.log(john.walk()) // JOHN is walking

      > Inheritance
      class Programmer extends Person {
        constructor(name, language) {
          - // "super" keyword lets us call the parent object that is being inherited

          - // It is good advice to avoid this as this can cause an even tighter coupling between your objects, but there are occasions where it is appropriate to use

          - // If the Person constructor contained any logic, custom getters or setters for the name property we would want to use the super and not duplicate the logic in the Programmer class

          - // If a constructor is not defined on a child class the super class constructor will be invoked by default

          super(name);
          this.programmingLanguage = language;
        }

        > Private Property and Method

        #skillLevel = 0

        getSkillLevel() {
          return this.#skillLevel;
        }

        increaseSkillLevel() {
          this.#skillLevel += 1;
        }

        writeCode() {
          console.log(this.name + ' is coding in ' + this.programmingLanguage);
        }
      }

      - // The class syntax offers a clean syntax for prototypal inheritance

      var mary = new Programmer('Mary', 'Javascript');
      mary.walk(); // Mary is walking
      mary.writeCode(); // Mary is coding in JavaScript
      mary.programmingLanguage = "React";
      mary.writeCode(); // Mary is coding in React

      console.log(mary.getSkillLevel()) // 0
      mary.increaseSkillLevel()
      console.log(mary.getSkillLevel()) // 1
      mary.increaseSkillLevel()
      console.log(mary.getSkillLevel()) // 2

      > Overview
        $ ES6 classes are, syntactic sugar to prototypes

*/
