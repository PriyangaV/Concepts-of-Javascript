/*
  @ Functions
    * Every JavaScript function is behave like a Function object.

    $ (function(){}).constructor === Function // returns true

    > Instance Properties
      * arguments
        $ available within the function

      * length
        ? indicates the number of parameters expected by the function

          function func1() {}

          function func2(a, b) {}

          console.log(func1.length); // 0

          console.log(func2.length); // 2

          > Property attributes of Function.length
            Writable - 	no
            Enumerable - 	no
            Configurable - yes


          function restParam(...args) {}

          restParam.length // 0 - rest parameter is not counted

          function defaultParam(a, b = 1, c) {}

          defaultParam.length // 1 - only parameters before the default value is counted

      * name
        ? Function statement name
          function doSomething() {}
          doSomething.name; // "doSomething"

        ? Function constructor name
          (new Function).name; // "anonymous"

        ? Anonymous function expression
          (function() {}).name; // ""
          (() => {}).name; // ""

        ? Inferred function names
          * Variables and methods can infer the name of an anonymous function from its syntactic position (ES6)

          let object = {
            someMethod: function object_someMethod() {}
          };
          console.log(object.someMethod.name); // "object_someMethod"

      ! The name property is read-only and cannot be changed by the assigment operator:

        ? Shorthand method names
            var o = {
              foo(){}
            };
            o.foo.name; // "foo";

        ? Bound function names
            * Function.bind() - "bound " + the function name

              function foo() {};
              foo.bind({}).name; // "bound foo"

        ? Function names for getters and setters
            * get and set accessor properties

            let o = {
              get foo(){},
              set foo(x){}
            };

            var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
            descriptor.get.name; // "get foo"
            descriptor.set.name; // "set foo";

        ? Object.defineProperty
            function Foo() {}
            Object.defineProperty(Foo, 'name', { writable: true });
            Foo.name = function() {};

    > Instance Methods
          * apply()
              $ calls a function with a given this value, and arguments provided as an array (or an array-like object).

          * bind()
              $ returns a copy of the given function with the specified this value, and initial arguments (if provided).

              const module = {
                x: 42,
                getX: function() {
                  return this.x;
                }
              };

              const unboundGetX = module.getX;
              console.log(unboundGetX()); // undefined - The function gets invoked at the global scope

              const boundGetX = unboundGetX.bind(module);
              console.log(boundGetX()); // 42


              this.x = 9;    // 'this' refers to global 'window' object here in a browser
              const module = {
                x: 81,
                getX: function() { return this.x; }
              };

              module.getX(); //  81

              const retrieveX = module.getX;
              retrieveX(); // 9 - the function gets invoked at the global scope

              const boundGetX = retrieveX.bind(module);
              boundGetX(); // 81

              > with setTimeout
                  $ By default within window.setTimeout(), the this keyword will be set to the window (or global) object.

                  var workshop = {
                    question: 'Will it work?',
                    ask() {
                      console.log(this.question);
                    }
                  }

                  setTimeout(workshop.ask, 100); // undefined

                  setTimeout(workshop.ask.bind(workshop), 100); // Will it work?

          * call()
                  * calls a function with a given this value and arguments provided individually.

                  > Using call to invoke a function and specifying the context for 'this'

                    function ask(question) {
                      console.log(this.teacher, question);
                    }
                    var workshop = {
                      teacher: 'Kyle'
                    }
                    var workshop1 = {
                      teacher: 'John'
                    }

                    ask.call(workshop, "What's up?") // 'Kyle' "What's up?"
                    ask.call(workshop1, "What's up?") // 'John' "What's up?"

                  > Using call to invoke an anonymous function

                    const animals = [
                      { species: 'Lion', name: 'King' },
                      { species: 'Whale', name: 'Fail' }
                    ];

                    for (let i = 0; i < animals.length; i++) {
                      (function(i) {
                        this.print = () => {
                          console.log(`#${i} - ${this.species}:${this.name}`);
                        }
                        this.print();
                      }).call(animals[i], i);
                    }

                  > Using call to chain constructors for an object

                    function Product(name, price) {
                      this.name = name;
                      this.price = price;
                    }

                    function Food(name, price) {
                      Product.call(this, name, price);
                      this.category = 'food';
                    }

                    function Toy(name, price) {
                      Product.call(this, name, price);
                      this.category = 'toy';
                    }

                    const cheese = new Food('feta', 5);
                    const fun = new Toy('robot', 40);

                  > Using call to invoke a function and without specifying the first argument

                    var sData = 'Wisen';

                    function display() {
                      console.log('sData value is %s ', this.sData);
                    }

                    display.call();  // sData value is Wisen

                    ! Caution: In strict mode, the value of this will be undefined

        * toString()
                ? returns a string representing the source code of the function

                function sum(a, b) {
                  return a + b;
                }

                sum.toString(); // "function sum(a, b) { return a + b; }"

                Math.abs.toString(); // "function abs() { [native code] }"

              > (+ operator)

                function foo() { return 'bar' }
                console.log(foo + ''); // "function foo() { return 'bar' }"



    > Difference between Function constructor and function declaration
          $ Function Constructor
                * Functions created with the Function constructor do not create closures to their creation contexts

                * They always are created in the global scope

                * They will only be able to access their own local variables and global ones, not the ones from the scope in which the Function constructor was created

                  var x = 10;

                  function createFunction() {
                      var x = 20;
                      return new Function('return x;'); // this |x| refers global |x|
                  }

                  createFunction()(); // 10

                  function createFunction() {
                    var x = 20;
                    function f() {
                      console.log(this.x) // 20 - 'this' refers local
                        return x; // this |x| refers local |x| above
                    }
                    console.log(this.x) // 10 - 'this' refers global
                    return f;
                  }

                  createFunction()(); // 20
                  var func = createFunction(); --> func() --> 20














*/
