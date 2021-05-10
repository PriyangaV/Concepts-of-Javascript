/*
  @ Module Pattern - Final
      $ One of the most common design pattern in javascript

      $ It creates encapsulation of our code

      $ Used as singleton style objects (only one instance)

      $ Great for services and testing/TDD

      > There are many different variations of the module pattern so far

          # Revealing Module Pattern in ES5

          # ES6 module loading - Asynchronous

          # Good practice to run our modules in ES5 strict mode

          # Strict mode will protect us from some of the more dangerous parts in JavaScript

      > Creating a module

          $ Anonymous closure (IIFE)
              * The function is evaluated then immediately invoked

              * Anonymous closures are just functions that wrap our code and create an enclosed scope around it

              * Closures help keep any state or privacy within that function

                (function() {
                  'use strict';
                  - // code goes here
                  - // All function and variables are scoped to this function
                })();

        > Exporting our module

          $ Assign the module to a variable that we can use to call our modules methods

                var myModule = (function() {
                  'use strict';
                })();

          $ Create a public method for our module to call

          $ To expose this method to code outside our module we return an "Object" with the methods defined

                var myModule = (function() {
                  'use strict';

                  return {
                    publicMethod: function() {
                      console.log('Hello Universe!!');
                    }
                  };
                })();

                myModule.publicMethod(); // outputs 'Hello Universe!'

        > Private methods & properties

          $ JavaScript does not have a private keyword by default

          $ Using closures we can create private methods and private state

                var myModule = (function() {
                  'use strict';

                  - // "_" before our private methods
                  var _privateProperty = 'Hello World';


                  function _privateMethod() {
                    console.log(_privateProperty);
                  }

                  return {
                    publicMethod: function() {
                      _privateMethod();
                    }
                  };
                })();

                $ myModule.publicMethod(); - // 'Hello World'

                console.log(myModule._privateProperty);
                - // is undefined protected by the module closure

                myModule._privateMethod();
                - // is TypeError protected by the module closure

          $ Private properties are not returned, they are not available outside of our module

          $ Public method has given us access to our private methods

          $ It gives us ability to create private state and encapsulation within our code

      > Revealing Module Pattern
          $ Most popular ways of creating modules

          $ Using the return statement we can return a object literal that ‘reveals’ only the methods or properties we want to be publicly available

                var myModule = (function() {
                  'use strict';

                  var _privateProperty = 'Hello World';
                  var publicProperty = 'I am a public property';

                  function _privateMethod() {
                    console.log(_privateProperty);
                  }

                  function publicMethod() {
                    _privateMethod();
                  }

                  return {
                    publicMethod: publicMethod,
                    publicProperty: publicProperty
                  };
                })();

                $ myModule.publicMethod(); // 'Hello World'

                console.log(myModule.publicProperty);
                - // 'I am a public property'

                console.log(myModule._privateProperty);
                - // is undefined protected by the module closure

                myModule._privateMethod();
                - // is TypeError protected by the module closure

          $ The benefit to the Revealing Module Pattern is that we can look at the bottom of our modules and quickly see what is publicly available for use

          $ The Module Pattern is not a silver bullet for adding code re-usability to our JavaScript

          $ Using the Module Pattern with "Prototypal Inheritance" or "ES6 Classes" can give us a wide range of design patterns with varying pros and cons

*/
