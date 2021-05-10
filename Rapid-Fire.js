/*
  * IndexOf - String/Array

    $ returns position if found

    ? returns -1 if not found

    ^ return type is 'number'

    ! case-sensitive

*/

/*
  * includes - String/Array
    $ returns true if found

    ? returns false if not found

    ^ return type is 'boolean'

    ! case-sensitive

*/

/*
  not-defined(undeclared) (vs) undefind (vs) uninitialized

  ? undefined:
    & We can have a variable that's been initialized that is undefined

  ? not-defined:
    & We can have a variable that was never even created, and then it's undeclared

  ? uninitialized:
    & We can have a variable that's never been initialized


  ^ When the javascript engine (Execution Context) is not able to "reference" a variable in memory, it will throw a ReferenceError

  ^ This is not exactly the same as a Declaration Error, at least in javascript

  ? There is a deference between a not defined error and the value undefined

  var a = undefined; var a; // undefined

  = var a; the javascript engine allocates memory for the variable and automatically sets it's value to undefined

  = which is different from saying that a doesn't exist at all - in which case it will throw a ReferenceError

  console.log(a);    // undefined
  var a = 'something';

  var a; // this variable is declared and is "defined"
  console.log(a);
  a = 'something'

  & declaration and definition happen together in javascript (automatically - if we don't do it ourself) and the default defined value is undefined

  const a;
    = Will throw a SyntaxError where a initializer (definition) is necessary
    = const is the only time when we need to declare and define manually

*/

/*
  @ drawback of declaring methods directly in js objects?
    $ They are very memory inefficient

    $ When we do that, a new copy of the method is created for each instance of an object

    $ Its own copy of the method will be available in each instance

    $ If we use prototype method, it will only be added once to Object.prototype
*/

/*
  @ Closure
    $ Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope

    $ Closure give us access to outer function scope parameters from an inner function, even after the outer function has returned

    ? The closure has access to the variables in three scopes:

      - Variable declared in his own scope
      - Variable declared in its parent function's scope
      - Variable declared in the global namespace

*/

/*
  @ mul function - curring

  function mul(x) {
    return function(y) { // anonymous function
      return function (z) { // anonymous function
        return x * y * z
      }
    }
  }

  = The variables belonging to the scopes that incapsulate it

  ^ A function is an instance of the Object type
  ^ A function can have properties and has a link to its constructor method
  ^ A function can be stored as a variable
  ^ A function can be passed as a parameter to another function
  ^ A function can be returned by another function
*/

/*
  @ Empty array
    arr.lenth = 0;
    arr = [];
    arr.splice(0, arr.length - 1);
    while(arrayList.length) {
      arrayList.pop();
    }
*/

/*
  @ Check an object is an array or not

    var arr = [1, 2, 3]
    Array.isArray(arr);

    Object.prototype.toString.call(arrayList) === '[object Array]'

    arr.constructor == Array

    "value instanceof Array" expressions evaluates to true if value is an array

      - value is an array created in a different iframe than the Array constructor function - // returns false

    ^ ({}).toString.call(arr) => '[object Array]'
*/

/*
  @ ({}).toString.call(value)

    ^ toString() method of a plain JavaScript object returns '[object <type>]'

    ? <type> is the object type it was called upon

    = ({}).toString.call([1, 2, 3]) => '[object Array]'
*/

/*
    for (var i = 0; i < 3; i++) {
      (function(i) {
        setTimeout(() => console.log(i), 500);
      })(i);
    }
*/

/*
    @ typeof vs instanceof

      ^ typeof is an operator that returns a string with the type of whatever we pass

      - The typeof operator checks if a value belongs to one of the seven basic types: number, string, boolean, object, function, undefined or Symbol

      $ typeof(null) will return object

      ^ instanceof is much more intelligent: it works on the level of prototypes

        * checks the value is anywhere in the prototype chain of the left
*/

/*
  @ Associative arrays
    * They are basically objects in JavaScript where indexes are replaced by user defined keys

    ^ They do not have a length property like normal array and cannot be traversed using normal for loop
*/

/*
  @ Difference between Function, Method and Constructor calls

    ? Function Declaration:

      function helloWorld(name) {
        return "hello world, " + name;
      }

      helloWorld("JS Geeks"); // "hello world JS Geeks"

    ? Method:
        var obj = {
          helloWorld : function() {
            return "hello world, " + this.name;
          },
          name: 'John Carter'
        }
        obj.helloWorld(); - // "hello world John Carter"

        var obj2 = {
          helloWorld : obj.helloWorld,
          name: 'John Doe'
        }
        obj2.helloWorld(); // "hello world John Doe"

    ? Constructor:
        function Employee(name, age) {
          this.name = name;
          this.age = age;
        }

        var emp1 = new Employee('John Doe', 28);
        emp1.name; // "John Doe"
        emp1.age; // 28

*/

/*
    function User(name) {
      this.name = name || "JsGeeks";
    }

    var person = new User("xyz")["location"] = "USA";
    = person['location'] = 'USA';
    console.log(person); // {name: 'xyz', location: 'USA'};
*/

/*
  @ Service Workers

    $ it’s a technology that allows your web application to use cached resources first, and provide default experience offline, before getting more data from the network later. This principle is commonly known as Offline First.

    ? Service Workers actively use promises. A Service Worker has to be installed,activated and then it can react on fetch, push and sync events.

    ^ As of 2017, Service Workers are not supported in IE and Safari.
*/

/*
  @ Method (vs) Function
    * A function is a piece of code that is called by name

    * Function itself not associated with any object and not defined inside any object

      ? Function statement
        function myFunc() {
          - // Do some stuff;
        }

        - // Calling the function
        myFunc();

      ? A function can take a form of immediately invoked function expression (IIFE):
        - // Anonymous Self-invoking Function
        (function() {
          - // Do some stuff;
        })();

      ? Arrow functions
        const myFunc = arg => {
          console.log("hello", arg)
        }

    * A method is a piece of code that is called by its name and that is associated with the object

        var obj = {
          myMethod: function () {  // Method
            - // ...
          }
        };

        - // Call the method
        obj.myMethod();

        ? ES6 we have classes

          class MyAwesomeClass {
            myMethod() {
              console.log("hi there");
            }
          }

          const obj = new MyAwesomeClass();
          obj.myMethod();

        # The method is not some kind of special type of a function, and it's not about how you declare a function. It's the way we call a function

*/

/*
  @ IIFE (Immediately Invoked Function Expression)

    * IIFE a function that runs as soon as it's defined

    * Usually it's anonymous (doesn't have a function name), but it also can be named

          (function() {
            console.log("Hi, I'm IIFE!");
          })();
          - // outputs "Hi, I'm IIFE!"

          ? The function inside IIFE doesn't have to be anonymous, It helps to detect our function in a stacktrace during debugging

            (function myIIFEFunc() {
              console.log("Hi, I'm IIFE!");
            })();
            - // outputs "Hi, I'm IIFE!"

            ^ With params
              (function myIIFEFunc(param1) {
                console.log("Hi, I'm IIFE, " + param1);
              })("Yuri");
              - // outputs "Hi, I'm IIFE, Yuri!"

            ^ Can return a value

              var result = (function myIIFEFunc(param1) {
                console.log("Hi, I'm IIFE, " + param1);
                return 1;
              })("Yuri");
              - // outputs "Hi, I'm IIFE, Yuri!"
              - // result variable will contain 1



        ~function(){console.log("hi I'm IIFE")}()
        !function(){console.log("hi I'm IIFE")}()
        +function(){console.log("hi I'm IIFE")}()
        -function(){console.log("hi I'm IIFE")}()
        (function(){console.log("hi I'm IIFE")}());
        var i = function(){console.log("hi I'm IIFE")}();
        true && function(){ console.log("hi I'm IIFE") }();
        0, function(){ console.log("hi I'm IIFE") }();
        new function(){ console.log("hi I'm IIFE") }
        new function(){ console.log("hi I'm IIFE") }()

        $ Variables and functions that you declare inside an IIFE are not visible to the outside world

        ? Use the IIFE for isolating parts of the code to hide details of implementation.

        * Specify the input interface of your code by passing commonly used global objects (window, document, jQuery, etc.) IIFE’s parameters, and then reference these global objects within the IIFE via a local scope.

        = Use it in closures, when you use closures in loops.

        ^ IIFE is the basis of in the module pattern in ES5 code, it helps to prevent polluting the global scope and provide the module interface to the outside.

*/

/*
  @ Singleton Pattern in Javascript
      $ The singleton pattern is an often used JavaScript design pattern

      ? It provides a way to wrap the code into a logical unit that can be accessed through a single variable

      * The Singleton design pattern is used when only one instance of an object is needed throughout the lifetime of an application

      ^ It is an object that is used to create namespace and group together a related set of methods and attributes (encapsulation) and if we allow to initiate then it can be initiated only once.

      # They can be used for NameSpacing
        * which reduce the number of global variables in your page (prevent from polluting global space)
      # Organizing the code in a consistent manner
        * which increase the readability and maintainability of your pages

      ! Important points:
          $ There should be only one instance allowed for a class and
          $ We should allow global point of access to that single instance


          function findUserName(id) {}

          - //Later in the page another programmer added code
          var findUserName = $('#user_list');

          - // You are trying to call :(
          console.log(findUserName())

          ? Using Namespace

            var MyNameSpace = {
              findUserName : function(id) {},
              - // Other methods and attribute go here as well
            }

          ? Lazy Instantiation skeleton for a singleton pattern

*/

/*
  @ Object deep clone copy
    function deepClone(object){
      var newObject = {};
      for(var key in object){
        if(typeof object[key] === 'object'  && object[key] !== null ){
        newObject[key] = deepClone(object[key]);
        }else{
        newObject[key] = object[key];
        }
      }
      return newObject;
    }
*/

/*
  @ Shallow copy of object

    function Clone(object){
      var newObject = {};
      for(var key in object){
        newObject[key] = object[key];
      }
      return newObject;
    }
*/

/*
  @ Why promises?
    * We use promises for handling asynchronous interactions in a sequential manner

    $ They are especially useful when we need to do an async operation and THEN do another async operation based on the results of the first one

    ? if you want to request the list of all flights and then for each flight you want to request some details about it

    ^ The promise represents the future value

    # Internal states "pending, fulfilled and rejected"

    * You can chain then() blocks, thus avoiding the callback hell.

    ? You can handle errors in the catch() block.

    & After a promise is set to fulfilled or rejected state, it becomes immutable

    ! async/await which makes the code appear even more linear

    # RxJS observables can be viewed as the recyclable promises
*/

/*
  @ Object key check

    # 'name' in object // true
    # 'salary' in object // false

    $ 'toString' in person // true - inherited object property

    ? hasOwnProperty - not inherited

      object.hasOwnProperty('toString'); // false
*/

/*
  @ NaN - Not a Number
    $ it can break your table of numbers when it has an arithmetic operation that is not allowed

    Math.sqrt(-5);
    Math.log(-1);
    parseFloat("foo");

    # this is common: you get JSON from the server, convert some strings from JSON to a number and end up with NaN in your UI

    ? NaN is not equal to any number, it’s not less or more than any number, also it's not equal to itself

      NaN !== NaN
      NaN < 2 // false
      NaN > 2 // false
      NaN === 2 // false

      isNaN(2)
*/

/*
  @ ES5 bug fix - setTimeout loop

  var arr = [10, 32, 65, 2];
  arr.forEach(function(ele, i) {
    setTimeout(function() {
      console.log('The index of this number is: ' + i);
    }, 3000);
  })

  var arr = [10, 32, 65, 2];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function(j) {
      return function () {
        console.log('The index of this number is: ' + j)
      };
    }(i), 3000);
  }
*/

/*
  @ check value in an array

    function isArray(value){
		return Object.prototype.toString.call(value) === '[object Array]';
    }

    function(value){
      - // ECMAScript 5 feature
      if(typeof Array.isArray === 'function'){
        return Array.isArray(value);
      }else{
        return Object.prototype.toString.call(value) === '[object Array]';
      }
    }

    value.constructor.name === "Array";

    value instanceof Array

*/

/*
  @ Object.create
    $ easiest way for one object to inherit from another, without invoking a constructor function

      var employee = {
      displayName: function () {}
    };

    var emp1 = Object.create(employee);
    console.log(emp1.displayName());
*/

/*
  @ constructor for inheritance
    function Person(a, b) {
      this.a = a;
      this.b = b;
    }

    function Employee(c){
      this.c = c;
    }

    = //Prototypal Inheritance
    Employee.prototype = new Person("a", "b");
    var emp1 = new Employee("c");

    console.log(emp1 instanceof Person); // true
    console.log(emp1 instanceof Employee); // true

    function Person(a){
      this.a = a || "a";
    }

    var obj = {};
    - // obj inherit Person class properties and method
    Person.call(obj); // constructor inheritance

    console.log(obj); // Object {a: "a"}
    console.log(a in obj); // true

    ? Type-based inheritance is best used with developer defined constructor function rather than natively in JavaScrip


*/

/*
  @ Object modification prevent
    Object.preventExtensions(obj);
      existing prop work, new prop don't

    Object.seal(obj) - Object.isSealed(obj)
      Object.isExtensible(obj)); // false
      console.log(Object.isSealed(obj)
        delete and new property don't
        non-extensible

    Object.freeze(obj) - Object.isFrozen(obj)
      console.log(Object.isExtensible(obj)); // false
      console.log(Object.isSealed(obj));     // true
      console.log(Object.isFrozen(obj));     // true

      delete, new prop, exiting prop don't
      non-extensible and sealed

*/

/*
  @ log method

    function appLog() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift('your app name');
      console.log.apply(console, args);
    }

    appLog("Some error message");
*/

/*
  @ string literal and object

    function isString(str) {
      return typeof(str) == 'string' || str instanceof String;
    }
*/

/*
  @ anonymous function use cases

    $ No name is needed if function is only used in one place

    $ Anonymous functions are declared inline and inline functions have advantages in the case that they can access variable in the parent scopes

    $ Passing anonymous function as a parameter to calling function
      typeof callback == 'function' callback()

      ? It can reduce a bit of code, particularly in recursive function and in callback function

      ? Avoid needless global namespace pollutions.
*/

/*
    @ set default value
        value = typeof value !== 'undefined' ? value : 'hi'

        value = value || 'hi'

        function(value = 'hi') // ES6

*/

/*
  @ Object merge

    merge(a, b);

    function merge(a, b) {
      return Object.assign(a, b);
    }

    ? No built-in

      function merge(toObj, fromObj) {
        - // Make sure both of the parameter is an object
        if (typeof toObj === 'object' && typeof fromObj === 'object') {
          for (var pro in fromObj) {
            - // Assign only own properties not inherited properties
            if (fromObj.hasOwnProperty(pro)) {
              - // Assign property and value
              toObj[pro] = fromObj[pro];
            }
          }
        }else{
          throw "Merge function can apply only on object";
        }
      }
*/

/*
  @ object non-enumerable

      ? Object can have properties that don't show up when you iterate through object using for...in loop

      ? Object.keys() to get an array of property names

      ? This properties is know as non-enumerable properties

        var person = {
          name: 'John'
        };
        person.salary = '10000$';
        person['country'] = 'USA';

        console.log(Object.keys(person)); // ['name', 'salary', 'country']

        ? non-enumerable property we have to use Object.defineProperty()

        - // Create non-enumerable property
        Object.defineProperty(person, 'phoneNo',{
          value : '8888888888',
          enumerable: false
        })

        Object.keys(person); // ['name', 'salary', 'country']
        - // enumerable:false
*/

/*
  @ Function Binding
        ? Function binding falls in advance JavaScript category and this is very popular technique to use in conjunction with event handler and callback function to preserve code execution context while passing function as a parameter

        var clickHandler = {
          message: 'click event handler',
          handleClick: function(event) {
            console.log(this.message);
          }
        };

        var btn = document.getElementById('myBtn');
        - // Add click event to btn
        btn.addEventListener('click', clickHandler.handleClick); //
        undefined

        - // clickHandler.handleClick method is not being saved hence this pointing to button btn object

        btn.addEventListener('click', clickHandler.handleClick.bind(clickHandler)); // prints message

*/

/*
    @ Passing values by reference vs by value
          ? objects, including arrays are passed by reference while strings, booleans and numbers are passed by value

            $ Strings are passed by value, that is, copied

            $ Objects are passed by reference, that is, objA and objB point to the same object in memory
*/

/*
  @ Array slice
    ? slice function copies all the elements of the array returning the new array

    ? it doesn't do deep copying. Instead it does shallow copying

        function slice(arr) {
          var result = [];
          for (i = 0; i< arr.length; i++) {
              result.push(arr[i]);
          }
          return result;
        }
*/

/*
    @ object.delete
        function deleteProp( object , prop ){
          delete( object[ prop ] );
          - // Check to see if property still detected.
          if (prop in object){
            - // Move up the prototype chain and try again.
            deleteProp( object.getPrototype(), prop );
          }
        }

        function steroidsDelete(obj, prop) {
          if (prop in obj)
            if (obj.hasOwnProperty(prop))
              {
                delete obj[prop];
                - // delete even shadowed props:
                if (prop in obj)
                  steroidsDelete(obj, prop);
              }
          else
            steroidsDelete(obj, prop);
        }
*/

/*
    @ Array.filter
        ? callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true
*/

/*
  @ callback functions

        function getDataFromServer(apiUrl){
          var name = "John";
          return {
            then : function(fn){
              fn(name);
            }
          }
      }

      getDataFromServer('www.google.com').then(function(name){
        console.log(name);
      });
*/

/*
  @ Array sort
      (function(){
        var arrayNumb = [2, 8, 15, 16, 23, 42];
        Array.prototype.sort = function(a,b){
          return a - b;
        };
        arrayNumb.sort();
        console.log(arrayNumb);
      })();

      (function(){
        var numberArray = [2, 8, 15, 16, 23, 42];
        numberArray.sort(function(a,b){
          if(a == b){
            return 0;
          }else{
            return a < b ? -1 : 1;
          }
        });
        console.log(numberArray);
      })();

      (function(){
        var numberArray = [2, 8, 15, 16, 23, 42];
        numberArray.sort(function(a,b){
          return a-b;
        });
        console.log(numberArray);
      })();
*/

/*
  @ mul function

  function mul(x){
    return function(y){
      return [x*y, function(z){
        return x*y + z;
      }];
    }
  }

  console.log(mul(2)(3)[0]);
  console.log(mul(2)(3)[1](4));

  function mul(x) {
	return function(y) {
		return {
			result: x * y,
			sum: function(z) {
				return x * y + z;
			}
		};
	};
}
*/

/*
  @ Object.prototype

  function getName1(){
    console.log(this.name);
  }

  Object.prototype.getName2 = () =>{
    console.log(Object.getPrototypeOf(this).name);
  }

  let personObj = {
    name:"Tony",
    print:getName1
  }

  personObj.print();
  Object.prototype.name="Steve";
  personObj.getName2();

??????????
  function getName1(){
    console.log(this.name);
  }

  Object.prototype.getName2 = () =>{
    console.log(this.name)
  }

  let personObj = {
    name:"Tony",
    print:getName1
  }

  personObj.print();
  personObj.getName2();
*/

/*
  @ What's a promise?
      ? promises clean up code full of callback chains

        foo(function success1() {
          bar(function success2() {
              ...
          });
        });


        foo()
          .then(function success1() {})
          .then(function success2() {});

          ! flat is better than nested

*/

/*
  @ Object.is() method and “==” operator
        ? The “==” and “===” operator treats the number values “+0” and “-0” as equal whereas Object.is() method treats them as not equal

        ? Apart from that the “==” and “===” operator does not treat Number.Nan equal to Nan

        Object.is() is used for comparison of two strings
        Object.is() is used for comparison of two numbers
        Object.is() is used for comparing the polarity of two numbers
        Object.is() is used for comparison of two objects

        - returns boolean
*/

/*
  @ Objects Summary

        Objects are associative arrays with several special features.

        They store properties (key-value pairs), where:

        Property keys must be strings or symbols (usually strings).
        Values can be of any type.
        To access a property, we can use:

        The dot notation: obj.property.
        Square brackets notation obj["property"]. Square brackets allow to take the key from a variable, like obj[varWithKey].
        Additional operators:

        To delete a property: delete obj.prop.
        To check if a property with the given key exists: "key" in obj.
        To iterate over an object: for (let key in obj) loop.
        What we’ve studied in this chapter is called a “plain object”, or just Object.

        There are many other kinds of objects in JavaScript:

        Array to store ordered data collections,
        Date to store the information about the date and time,
        Error to store the information about an error.


        @ Objects copy summary

        Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

        All operations via copied references (like adding/removing properties) are performed on the same single object.

        To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function, such as _.cloneDeep(obj).
*/

/*
  @ Promises Summary
        ? Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.

        ? Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:

        ? status: "fulfilled" or "rejected"

          $ value (if fulfilled) or reason (if rejected).

        ? Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.

        ? Promise.any(promises) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.

        ? Promise.resolve(value) – makes a resolved promise with the given value.
        ? Promise.reject(error) – makes a rejected promise with the given error.

        $ Of these five, Promise.all is probably the most common in practice
*/

/*
    @ Recursion summary
        $ When a function makes a nested call, the following happens:

        ? The current function is paused.
        ? The execution context associated with it is remembered in a special data structure called execution context stack.
        ? The nested call executes.
        ? After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped
*/

/*
  @ Promise Error summary
      ? .catch handles errors in promises of all kinds: be it a reject() call, or an error thrown in a handler.

      ? We should place .catch exactly in places where we want to handle errors and know how to handle them. The handler should analyze errors (custom error classes help) and rethrow unknown ones (maybe they are programming mistakes).

      ? It’s ok not to use .catch at all, if there’s no way to recover from an error.

      ? In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the user (and probably our server) about them, so that our app never “just dies”.

*/

/*
  @ Await summary

    ? await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

    ? It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write

    ? await accepts “thenables”
*/

/*
  @ Async/await ... promise.then/catch summary
    $ async/await and promise.then/catch

    ? When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

    ? But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.
*/

/*
    # Async/Await Summary
      ? The async keyword before a function has two effects:

      ? Makes it always return a promise.

      ? Allows await to be used in it.

      ? The await keyword before a promise makes JavaScript wait until that promise settles, and then:

      ? If it’s an error, the exception is generated — same as if throw error were called at that very place.

      ? Otherwise, it returns the result.

      ? Together they provide a great framework to write asynchronous code that is easy to both read and write.

      ? With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also Promise.all is nice when we are waiting for many tasks simultaneously.
*/

/*
  @ Reachablity - memory management - garbage collection

    ? The main concept of memory management in JavaScript is reachability.


        Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

        There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

        For instance:

        Local variables and parameters of the current function.
        Variables and parameters for other functions on the current chain of nested calls.
        Global variables.
        (there are some other, internal ones as well)
        These values are called roots.

          Garbage collection is performed automatically. We cannot force or prevent it.
          Objects are retained in memory while they are reachable.
          Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.
*/

/*
  @ Object this summary
          Functions that are stored in object properties are called “methods”.
          Methods allow objects to “act” like object.doSomething().
          Methods can reference the object as this.
          The value of this is defined at run-time.

          When a function is declared, it may use this, but that this has no value until the function is called.
          A function can be copied between objects.
          When a function is called in the “method” syntax: object.method(), the value of this during the call is object.

*/

/*
  @ Map (vs) WeakMap summary

      - // Map is an obj
      - // Accepts unique key - should be unique
      - // Value overwritten
      - // map.delete(key) - // returns true
      - // map.size(); - // returns length number
      - // map.has(key); - // true
      - // map.get(key); - // returns value | undefined
      - // map.forEach(value, key); - // iterable objects
      - // map.keys();
      - // map.values();
      - // map.entries();
      - // keys can be primitive as well as array
      - // counter(obj); - // ref will be there
      - // obj = null - // no garbage collected - // memory will be there


      - // Weakmap key should be only object, no primitive

      - // not iterable, no forEach
      - // no size
      - // no keys(), values(), entries()
      - // key should be unique
      - // order reverse
*/

/*
  @ Set (vs) WeakSet summary
        - // Set is an iterable object
        - // it accepts only array arguments - array can contains anything primitive/non-primitive

        - // Set holds unique elements

        - // spread... memory location will be different - new copy

        - // WeakSet accepts only objects
*/

/*
    @ const garbage collected summary
       ? WARNING Assigning an object or array as a constant means that value will not be able to be garbage collected until that constant’s lexical scope goes away, as the reference to the value can never be unset. That may be desirable, but be careful if it’s not your intent!
*/

/*
  @ sync/async summary
        ? synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn't have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.


        $ Promise creation starts the execution of asynchronous functionality. await only blocks the code execution within the async function. It only makes sure that the next line is executed when the promise resolves. So, if an asynchronous activity has already started, await will not have any effect on it.
*/

/*
  @ callback hell summary
    $ known as Pyramid of Doom, is an anti-pattern seen in code of asynchronous programming. It is a slang term used to describe and unwieldy number of nested “if” statements or functions. If you are not expecting your application logic to get too complex, a few callbacks seem harmless.
*/

/*
  @ callback summary
    ? A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
*/

/*
  @ function declare/expression summary

        # Functions are values. They can be assigned, copied or declared in any place of the code. If the function is declared as a separate statement in the main code flow, that's called a “Function Declaration”. If the function is created as a part of an expression, it's called a “Function Expression”.

        ? Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code. ...
        $ Function expressions aren't hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

        ? Function expressions are invoked to avoid polluting the global scope. Instead of your program being aware of many different functions, when you keep them anonymous, they are used and forgotten immediately.

        # Names are useful. Names can be seen in stack traces, call stacks, lists of breakpoints, etc. Names are a Good Thing

        ^ for recursive calls - Named function expression
          ? we are passing a literal function expression as an argument directly to another function, that function expression cannot directly reference itself in ES5 strict mode unless it is named.
*/

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). ... In JavaScript, closures are created every time a function is created, at function creation time.

// @ Protype Inheritance summary

// In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
// We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
// The object referenced by [[Prototype]] is called a “prototype”.
// If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
// Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
// If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
// The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

// # property descriptor summary
// * Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.

// @ Object.defineProperty creates immutable properties. That's why you can't change them by other descriptors.
// # A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.

// ^ why data descriptors and accessor descriptors can not be used in js an the same time?
// ? it makes no sense. You either create a simple property with provided value (and possibly prevent its modification through writable: false), or encapsulate some logic in this property through setters/getters.

// @ delegation pattern summary
// ? In JavaScript when we create the object it does not copy the properties or behavior, it creates a link. Similar kind of linkage gets created in case of extend of class as well. ... This pattern is called Behavior Delegation Pattern which commonly known as prototypal inheritance in JavaScript.

// @ delegation summary
// Delegation is a technique that promotes code reuse by allowing runtime function invocation in the context of a specific instance – regardless of the hierarchical lineage of instance and function. JavaScript has excellent support for Delegation in the form of call and apply which lets us inject an object into the this value of any function. This permits unfeterred code sharing, free from the constraints of unwieldy, unnatural and overly complex hierarchies.

// $ Function delegation using call and apply allows JavaScript utilities to cherry-pick necessary functionality without the baggage of an unintuitive, bloated and overly complex hierarchy.

// @bind, call, apply summary

// ^ You can use call()/apply() to invoke the function immediately. bind() returns a bound function that, when executed later, will have the correct context ("this") for calling the original function. So bind() can be used when the function needs to be called later in certain events when it's useful.

// @ When he says myself, he really means ‘this’

// @ error-async-await summary
// We can use try...catch for synchronous code.
// We can use try...catch (in combination with async functions) and the .catch() approaches to handle errors for asynchronous code.
// When returning a promise within a try block, make sure to await it if you want the try...catch block to catch the error.
// Be aware when wrapping errors and rethrowing, that you lose the stack trace with the origin of the error.

// @ generators summary
// ? A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.

// @ Advantages of Generators summary

// a) Lazy Evaluation: Lazy Evaluation is an evaluation model which delays the evaluation of an expression until its value is needed.
// b) Memory Efficient: We generate only the values that are needed. With normal functions, we needed to pre-generate all the values and keep them around in case we use them later. However, with generators, we can defer the computation till we need it.

// @ == and === summary
//  == is comparison which allows coercion, === is comparison without coercion

// @ currying
// ? Curring is partial invocation of a function. Currying means first few arguments of a function is pre-processed and a function is returned. The returning function can add more arguments to the curried function. It's like if you have given one or two spice to the curry and cooked little bit, still you can add further spice to it.
