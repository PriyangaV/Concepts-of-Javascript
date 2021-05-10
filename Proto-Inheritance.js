/*
  @ Prototypal Inheritance - Final
      ^ We can use built-in methods such as .length, .split(), .join() on our strings, arrays, or objects

      ? Because of "prototypal inheritance"! They're on the prototype chain!

      * We have a webiste where people can browse dogs!

        $ Every dog has a name, a breed, a color and a function to bark!

          ! For every dog, we need object that represents that dog!

            = Instead of writing a new object each time, we'll use a "constructor" function from which we can create Dog "instances" using the "new" keyword

            function Dog(name, breed, color) {
              this.name = name;
              this.breed = breed;
              this.color = color;
              this.bark = function bark() {
                return "Woof!";
              }
            }

            * When we create a constuctor function, a "prototype" object gets created as well!

              > function Dog() {...} - Constructor Function

            ^ The constuctor's prototype has a reference to the original constructor function

            Dog -> function Dog(name, breed, color) {...}

            Dog.prototype --> constructor: function Dog() {...}

            Dog.prototype.constructor --> function Dog(name, breed, color) {...}

            ! 'prototype' property on the Dog constructor function is non-enumerable, meaning,
              ^ It doesn't show up when we try to access the object properties, but it's still there!

              * Dogs Creation:

                const dog1 = new Dog("1", "Labrador", "black");
                const dog2 = new Dog("2", "Jack Russell", "white");

                - console.log(dog1)
                  $ name, breed, color, bark and '__proto__'
                    ? Non-enumerable, usually doesn't show up when we try to get the properties on the object

                ^ __proto__ is a reference to the "Dog.prototype" object

                ! This is what "Prototypal Inheritance" is all about

                # Each instance of the constructor has access to the prototype of the constructor!

                * Instances like "dog1 and dog2" also contain a property called "__proto__"

                  $ This is a reference to the prototype of their constructor, Dog.prototype in this case

              = When we wanna share properies to all instances, we can add it to the "prototype" object

                > Creating new function each time we create a new copy, consuming memory each time!

                ^ We can save memory by adding properties to the prototype that all instances can share, instead of creating new copies of that property each time!

                  * When we try to access a property on an object,

                  & Engine first searches locally to see if the property is defined on the object itself

                  ? If it can't find, engine "walks donw the prototype chain" through "__proto__" property!

              # Dog.prototype itself is an object, meaning that it's actually an instance of the "Object" constructor!

                $ Dog.prototype also contains a "__proto__" property, which is a reference to "Object.prototype!"

                  - dog1
                    - Dog(name, breed, color, bark())
                      - __proto__:
                        - constructor: function Dog() {...}
                          - __proto__:
                            - constructor: function Object() {...}

                ^ The prototype chain can have several steps. Dog.prototype itself is an object, thus inherits properties from the built-in "Object.prototype"

  @ ES6 introduced classes

    # Classes are only "syntactical sugar" for constructor function

    $ Everything still works the same way!

    * "class" keyword
          ^ class has a "constructor" function
              ? "prototype properties" added to the classes body itself

    * Before ES6
        function Dog(name, breed, color) {
          this.name = name;
          this.breed = breed;
          this.color = color;
        }

        Dog.prototype.bark = function() {
          return "Woof!";
        }

    ! ES6 with "class" keyword
        class Dog {
          constructor(name, breed, color) {
            this.name = name;
            this.breed = breed;
            this.color = color;
          }

          bark() {
            return "Woof!";
          }
        }

        & We can easily "extend" other "classes"

     * Same breed, namely another (Chihuahuas)

        ^ We'll only pass the 'name' prop to the Dog class, not all prop(breed, color)

        ? It can also do something special, like "small bark"
          $ "Small Woof!"

        @ class extend - we can access the parent class` constructor
          # "super" keyword
            ^ (super(name)) - in this case

            class Dog {
              constructor(name) {
                this.name = name;
              }

              bark() {
                return "Woof!";
              }
            }

            class Chihuaha extends Dog {
              constructor(name) {
                super(name)
              }

              smallBark() {
                return "Small Woof!";
              }
            }

            const myPet = new Chihuaha("Max");

            * "myPet" has access to both
              > Chihuaha.prototype
                ^ Dog.prototype (it's an Object)
                  # (Object.prototype)

                  $ Dog.prototype
                    = constructor: Dog{...}
                    = bark: function() {...}
                        ^
                        ^
                  $ Chihuaha.prototype
                    = constructor: Chihuaha{...}
                    = smallBark: function() {...}
                        ^
                        ^
                  $ myPet
                    = name: 'Max'
                    -__proto__

            ! Prototypal inheritance works the same way with classes as with ES5 constructors
              ^ With the "super" keyword, we can call the class that the sub-class extends

                $ Chihuaha.proptype - smallBark()
                $ Dog.proptype - bark()

                  # Access both "smallBark()" and "bark()" on "myPet"!

            * Prototype chain doesn't go on forever!
                ^ There's an object which prototype is equal to "null": "Object.prototype"

                ? Property - nowhere to be found locally or prototype chain
                  $ "undefined" gets returned!


              ! We can call inherited methods from the extended class(es)
                $ The prototype chain ends when the value of
                  = __proto__ is "null"

                    - myPet:__proto__ == Chihuaha.prototype
                      - Chihuaha.prototype:__proto__ == Dog.prototype
                        - Dog.prototype:__proto__ == Object.prototype
                          - Object.prototype:__proto__ == null


    @ Object.create()
        * Create a new object!

        $ Can specify the exact prototype of that object should be...

            const Person = {
              name: "Bob",
              age: 24
            }

            const bob = Object.create(person)

            ? "bob" object simply only contains the "non-enumerable __proto__"

              $ __protot__ property holds a reference to the object we defined as the prototype (Person object)

                - bob:__proto__ == Person.prototype
                  - Person.prototype:__proto__ == Object.prototype
                    - Object.prototype:__proto__ == null
*/
