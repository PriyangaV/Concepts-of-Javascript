/*
  @ Object
    $ The Object class represents one of JavaScript's data types.

    $ It is used to store various keyed collections and more complex entities.

    $ Objects can be created using the Object() constructor or the object initializer / literal syntax.

    > Constructor
      new Object() // {}
      new Object({a: '1'}) // {a: 1}

      let o = new Object()
      o.foo = 42
      console.log(o) // { foo: 42 }

    > Using Object given undefined and null types
        let o = new Object()
        let o = new Object(undefined)
        let o = new Object(null)

    > Static methods
        ? Object.assign()
            * copies all enumerable own properties from one or more source objects to a target object.

            * It returns the target object.

              const target = { a: 1, b: 2 };
              const source = { b: 4, c: 5 };

              const returnedTarget = Object.assign(target, source);

              console.log(target); { a: 1, b: 4, c: 5 }

              console.log(returnedTarget); { a: 1, b: 4, c: 5 }

            * Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

            ! Note: Object.assign() does not throw on null or undefined sources.

            * The Object.assign() method only copies enumerable and own properties from a source object to a target object.


        ? Object.create()
            * creates a new object, using an existing object as the prototype of the newly created object.

              const person = {
                isHuman: false,
                printIntroduction: function() {
                  console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
                }
              };

              const me = Object.create(person);

              me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
              me.isHuman = true; // inherited properties can be overwritten

              me.printIntroduction(); // "My name is Matthew. Am I human? true"

              > Custom and Null objects
                let oco = Object.create( {} );   // create a normal object
                let ocn = Object.create( null ); // create a "null" object

                $ can't access the built-in functions on "ocn"

              * Object.entries() will result in an empty array being returned, if it's created using Object.create()

                  var obj = Object.create({ a: 1, b: 2 });

                  console.log(Object.entries(obj)); // shows "[]"

        ? Object.defineProperty()
              * defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

                  const object1 = {};

                  Object.defineProperty(object1, 'property1', {
                    value: 42,
                    writable: false
                  });

                  object1.property1 = 77; // throws an error in strict mode

                  console.log(object1.property1); // expected output: 42

              * By default, values added using Object.defineProperty() are immutable and not enumerable.

              > Property descriptors
                  @ it presents in objects come in two main flavors:

                    $ data descriptors and accessor descriptors.

                    $ A data descriptor is a property that has a value, which may or may not be writable.

                    $ An accessor descriptor is a property described by a getter-setter pair of functions.

                    $ A descriptor must be one of these two flavors; it cannot be both.


                    * Creating a property

                      > defineProperty with a data property descriptor
                              var o = {}; // Creates a new object
                              Object.defineProperty(o, 'a', {
                                value: 16,
                                writable: true,
                                enumerable: true,
                                configurable: true
                              });

                      > defineProperty with an accessor property descriptor
                            var bValue = 38;
                            Object.defineProperty(o, 'b', {
                              get() { return bValue; },
                              set(newValue) { bValue = newValue; },
                              enumerable: true,
                              configurable: true
                            });
                            o.b; // 38

                        > You cannot try to mix both:
                            Object.defineProperty(o, 'conflict', {
                              value: val,
                              get() { return val; }
                            });

                            - // throws a TypeError: value appears
                            - // only in data descriptors,
                            - // get appears only in accessor descriptors

                    * Modifying a property
                        > Writable attribute
                            $ When a writable property attribute is set to false, the property is said to be “non-writable”.
                            $ It cannot be reassigned.

                                var o = {}; // Creates a new object

                                Object.defineProperty(o, 'a', {
                                  value: 37,
                                  writable: false
                                });

                                console.log(o.a); // logs 37
                                o.a = 25; // No error thrown
                                - // (it would throw in strict mode,
                                - // even if the value had been the same)
                                console.log(o.a); // 37 -  The assignment didn't work.

                        > Enumerable attribute
                            $ The enumerable property attribute defines whether the property is picked by Object.assign() or spread operator.

                            $ For non-Symbols properties it also defines whether it shows up in a for...in loop and Object.keys() or not.

                                var o = {};
                                Object.defineProperty(o, 'a', {
                                  value: 1,
                                  enumerable: true
                                });
                                Object.defineProperty(o, 'b', {
                                  value: 2,
                                  enumerable: false
                                });
                                o.d = 4; // enumerable defaults to true
                                Object.defineProperty(o, Symbol.for('e'), {
                                  value: 5,
                                  enumerable: true
                                });
                                Object.defineProperty(o, Symbol.for('f'), {
                                  value: 6,
                                  enumerable: false
                                });

                                for (var i in o) {
                                  console.log(i); // 'a' and 'd' (in undefined order)
                                }

                                Object.keys(o); // ['a', 'd']

                                o.propertyIsEnumerable('a'); // true
                                o.propertyIsEnumerable('b'); // false
                                o.propertyIsEnumerable('c'); // false
                                o.propertyIsEnumerable('d'); // true
                                o.propertyIsEnumerable(Symbol.for('e')); // true
                                o.propertyIsEnumerable(Symbol.for('f')); // false

                                var p = { ...o }
                                p.a // 1
                                p.b // undefined
                                p.c // undefined
                                p.d // 4
                                p[Symbol.for('e')] // 5
                                p[Symbol.for('f')] // undefined

                        > Configurable attribute
                            $ The configurable attribute controls at the same time whether the property can be deleted from the object and whether its attributes (other than value and writable) can be changed.

                                var o = {};
                                Object.defineProperty(o, 'a', {
                                  get() { return 1; },
                                  configurable: false
                                });

                                Object.defineProperty(o, 'a', {
                                  configurable: true // throws a TypeError
                                });
                                Object.defineProperty(o, 'a', {
                                  enumerable: true // throws a TypeError
                                });
                                Object.defineProperty(o, 'a', {
                                  set() {} // throws a TypeError (set was undefined previously)
                                });
                                Object.defineProperty(o, 'a', {
                                  get() { return 1; } // throws a TypeError
                                });
                                - // (even though the new get does exactly the same thing)
                                Object.defineProperty(o, 'a', {
                                  value: 12
                                }); // throws a TypeError // ('value' can be changed when 'configurable' is false but not in this case due to 'get' accessor)

                                console.log(o.a); // logs 1
                                delete o.a; // Nothing happens
                                console.log(o.a); // logs 1

                              * If the configurable attribute of o.a had been true, none of the errors would be thrown and the property would be deleted at the end.

                        > Adding properties and default values
                            $ It is important to consider the way default values of attributes are applied.

                            $ There is often a difference between simply using dot notation to assign a value and using Object.defineProperty()

                                  var o = {};

                                  o.a = 1;
                                  - // is equivalent to:
                                  Object.defineProperty(o, 'a', {
                                    value: 1,
                                    writable: true,
                                    configurable: true,
                                    enumerable: true
                                  });

                                  - // On the other hand,
                                  Object.defineProperty(o, 'a', { value: 1 });

                                  - // is equivalent to:
                                  Object.defineProperty(o, 'a', {
                                    value: 1,
                                    writable: false,
                                    configurable: false,
                                    enumerable: false
                                  });

                        > Custom Setters and Getters

                            var pattern = {
                              get() {
                                return 'I always return this string, whatever you have assigned';
                              },
                              set() {
                                this.myname = 'this is my name string';
                              }
                            };

                            function TestDefineSetAndGet() {
                              Object.defineProperty(this, 'myproperty', pattern);
                            }

                            var instance = new TestDefineSetAndGet();
                            instance.myproperty = 'test';

                            console.log(instance.myproperty); // I always return this string, whatever you have assigned
                            console.log(instance.myname); // this is my name string

                      > Inheritance of properties
                            $ If an accessor property is inherited, its get and set methods will be called when the property is accessed and modified on descendant objects.

                            $ If these methods use a variable to store the value, this value will be shared by all objects.

                                function myclass() {}

                                var value;
                                Object.defineProperty(myclass.prototype, "x", {
                                  get() {
                                    return value;
                                  },
                                  set(x) {
                                    value = x;
                                  }
                                });

                                var a = new myclass();
                                var b = new myclass();
                                a.x = 1;
                                console.log(b.x); // 1

                            $ This can be fixed by storing the value in another property

                            $ In get and set methods, this points to the object which is used to access or modify the property

                                function myclass() {}

                                Object.defineProperty(myclass.prototype, "x", {
                                  get() {
                                    return this.temp_x;
                                  },
                                  set(x) {
                                    this.temp_x = x;
                                  }
                                });

                                var a = new myclass();
                                var b = new myclass();
                                a.x = 1;
                                console.log(b.x); // undefined

                            $ Unlike accessor properties, value properties are always set on the object itself, not on a prototype.

                            $ However, if a non-writable value property is inherited, it still prevents from modifying the property on the object.

                                  function myclass() {}

                                  myclass.prototype.x = 1;

                                  Object.defineProperty(myclass.prototype, "y", {
                                    writable: false,
                                    value: 1
                                  });

                                  var a = new myclass();
                                  a.x = 2;
                                  console.log(a.x); // 2

                                  console.log(myclass.prototype.x); // 1

                                  a.y = 2; // Ignored, throws error in strict mode
                                  console.log(a.y); // 1
                                  console.log(myclass.prototype.y); // 1


        ? Object.defineProperties
            * defines new or modifies existing properties directly on an object, returning the object.

              const object = {};

              Object.defineProperties(object, {
                property1: {
                  value: 42,
                  writable: true
                },
                property2: {
                  value: 43,
                  writable: false
                }
              });

              console.log(object.property1); // 42
              console.log(object.property2); // 43

        ? Object.entries()
            * returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

            * a for...in loop enumerates properties in the prototype chain as well

                const object = {
                  a: 'somestring',
                  b: 42
                };

                for (const [key, value] of Object.entries(object)) {
                  console.log(`${key}: ${value}`);
                }


                - // "a: somestring"
                - // "b: 42"
                - // order is not guaranteed

        ? Object.freeze()
            * freezes an object

            * A frozen object can no longer be changed

            * freezing an object prevents new properties from being
              $ added to it,
              $ existing properties from being removed,
              $ prevents changing the enumerability,
              $ configurability, or writability of existing properties,
              $ and prevents the values of existing properties from being changed.

            * freezing an object also prevents its prototype from being changed

            * freeze() returns the same object that was passed in.

                const obj = {
                  prop: 42
                };

                Object.freeze(obj);

                obj.prop = 33; // Throws an error in strict mode

                console.log(obj.prop); // expected output: 42

              > Comparison to Object.seal()

                $ Objects sealed with Object.seal() can have their existing properties changed.

                $ Existing properties in objects frozen with Object.freeze() are made immutable.

              > Freezing arrays

                  let a = [0];
                  Object.freeze(a); // The array cannot be modified now.

                  a[0] = 1; // fails silently

                  a.push(2); // throws a TypeError

            * The object being frozen is immutable

            * it is not necessarily constant - freeze is shallow

                    const obj = {
                      internal: {}
                    };

                    Object.freeze(obj);

                    obj.internal.a = 'aValue';
                    obj.internal.a // 'aValue'

                ? What is "shallow freeze"?
                    $ The result of calling Object.freeze(object) only applies to the immediate properties of object itself and will prevent future property addition, removal or value re-assignment operations only on object.

                    * To make an object immutable, recursively freeze each property which is of type object (deep freeze).

                        function deepFreeze(object) {
                          - // Retrieve the property names defined on object
                          const propNames = Object.getOwnPropertyNames(object);

                          - // Freeze properties before freezing self
                          for (const name of propNames) {
                            const value = object[name];

                            if (value && typeof value == "object") {
                              deepFreeze(value);
                            }
                          }

                          return Object.freeze(object);
                        }

                        const obj2 = {
                          internal: {
                            a: null
                          }
                        };

                        deepFreeze(obj2);

                        obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
                        obj2.internal.a; // null

        ? Object.fromEntries(iterable)
            ! iterable - An iterable such as Array or Map or other objects implementing the iterable protocol.

            * transforms a list of key-value pairs into an object.

            * an iterator object, that produces a two element array-like object, whose first element is a value that will be used as a property key, and whose second element is the value to associate with that property key.

            $ Object.fromEntries() performs the reverse of Object.entries().

            > With Object.fromEntries, we can convert from Map to Object:

                  const entries = new Map([[
                    ['foo', 'bar'],
                    ['baz', 42]
                  ]]);

                  const obj = Object.fromEntries(entries);

                  console.log(obj); // { foo: "bar", baz: 42 }

            > With Object.fromEntries, we can convert from Array to Object:

                  const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
                  const obj = Object.fromEntries(arr);
                  console.log(obj); // { 0: "a", 1: "b", 2: "c" }

            > Object transformations
                  $ With Object.fromEntries, its reverse method Object.entries(), and array manipulation methods, we are able to transform objects like this:

                  const object1 = { a: 1, b: 2, c: 3 };

                  const object2 = Object.fromEntries(
                    Object.entries(object1)
                    .map(([ key, val ]) => [ key, val * 2 ])
                  );

                  console.log(object2); // { a: 2, b: 4, c: 6 }

        ? Object.getOwnPropertyDescriptor()
              * returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).

              * The object returned is mutable but mutating it has no effect on the original property's configuration.

                    const object1 = {
                      property1: 42
                    };

                    const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

                    console.log(descriptor1.configurable); // true

                    console.log(descriptor1.value); // 42

        ? Object.getOwnPropertyDescriptors()
              * returns all own property descriptors of a given object.

                      const object1 = {
                        property1: 42
                      };

                      const descriptors1 = Object.getOwnPropertyDescriptors(object1);

                      console.log(descriptors1.property1.writable); // true

                      console.log(descriptors1.property1.value); // 42

        ? Object.getOwnPropertyNames()
              * returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object

                      const object1 = {
                        a: 1,
                        b: 2,
                        c: 3
                      };

                      console.log(Object.getOwnPropertyNames(object1)); // ["a", "b", "c"]

                      var arr = ['a', 'b', 'c'];
                      console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.
                      - // ["0", "1", "2", "length"]


                      - // Array-like object
                      var obj = { 0: 'a', 1: 'b', 2: 'c' };
                      console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() is an array method.
                      - // logs ["0", "1", "2"]


        ? Object.getOwnPropertySymbols()
              * returns an array of all symbol properties found directly upon a given object.

                        const object1 = {};
                        const a = Symbol('a');
                        const b = Symbol.for('b');

                        object1[a] = 'localSymbol';
                        object1[b] = 'globalSymbol';

                        const objectSymbols = Object.getOwnPropertySymbols(object1);

                        console.log(objectSymbols.length); // 2

                        console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
                        console.log(objectSymbols[0]);     // Symbol(a)

        ? Object.getPrototypeOf()
              * returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

                    const prototype1 = {};
                    const prototype2 = {};
                    const object1 = Object.create(prototype1);

                    console.log(Object.getPrototypeOf(object1) === prototype1); // true
                    console.log(Object.getPrototypeOf(object1) === prototype2); // false

                    var proto = {};
                    var obj = Object.create(proto);
                    Object.getPrototypeOf(obj) === proto; // true

              *  If there are no inherited properties, null is returned.

        ? Object.is()
              * determines whether two values are the same value.

              $ Two values are the same if one of the following holds:

                        both undefined
                        both null
                        both true or both false
                        both strings of the same length with the same characters in the same order
                        both the same object (means both object have same reference)
                        both numbers and
                            both +0
                            both -0
                            both NaN
                            or both non-zero and both not NaN and both have the same value

                  ! Object.is doesn't coerce either value.

                        Object.is('foo', 'foo');     // true
                        Object.is(window, window);   // true

                        Object.is('foo', 'bar');     // false
                        Object.is([], []);           // false

                        var foo = { a: 1 };
                        var bar = { a: 1 };
                        Object.is(foo, foo);         // true
                        Object.is(foo, bar);         // false

                        Object.is(null, null);       // true

                        - // Special Cases
                        Object.is(0, -0);            // false
                        Object.is(-0, -0);           // true
                        Object.is(NaN, 0/0);         // true

        ? Object.isExtensible()
              * determines if an object is extensible (whether it can have new properties added to it).

                    const object1 = {};

                    console.log(Object.isExtensible(object1)); // true

                    Object.preventExtensions(object1);

                    console.log(Object.isExtensible(object1)); // false

        ? Object.isFrozen()
              * determines if an object is frozen.

                    const object1 = {
                      property1: 42
                    };

                    console.log(Object.isFrozen(object1)); // false

                    Object.freeze(object1);

                    console.log(Object.isFrozen(object1)); // true

        ? Object.isSealed()
              * determines if an object is sealed.

                    const object1 = {
                      property1: 42
                    };

                    console.log(Object.isSealed(object1)); // false

                    Object.seal(object1);

                    console.log(Object.isSealed(object1)); // true

        ? Object.keys()
              * returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

                      const object1 = {
                        a: 'somestring',
                        b: 42,
                        c: false
                      };

                      console.log(Object.keys(object1)); // ["a", "b", "c"]

        ? Object.preventExtensions()
              * prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

                  const object1 = {};

                  Object.preventExtensions(object1);

                  try {
                    Object.defineProperty(object1, 'property1', {
                      value: 42
                    });
                  } catch (e) {
                    console.log(e); // TypeError: Cannot define property property1, object is not extensible
                  }

        ? Object.seal()
              * seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.

              * Values of present properties can still be changed as long as they are writable.

                const object1 = {
                  property1: 42
                };

                Object.seal(object1);
                object1.property1 = 33;
                console.log(object1.property1); 33

                delete object1.property1; // cannot delete when sealed
                console.log(object1.property1); 33

        ? Object.setPrototypeOf()
              * sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

        ? Object.values()
              * returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

              * The only difference is that a for...in loop enumerates properties in the prototype chain as well.

                  const object1 = {
                    a: 'somestring',
                    b: 42,
                    c: false
                  };

                  console.log(Object.values(object1)); // ["somestring", 42, false]


    > Instance properties
        ? Object.prototype.constructor
            * Specifies the function that creates an object's prototype.

            * returns a reference to the Object constructor function that created the instance object.

            ! Note that the value of this property is a reference to the function itself, not a string containing the function's name.

                  let o = {}
                  o.constructor === Object // true

                  let o = new Object
                  o.constructor === Object // true

                  let a = []
                  a.constructor === Array // true

                  let a = new Array
                  a.constructor === Array // true

                  let n = new Number(3)
                  n.constructor === Number // true

    > Instance methods
        ? hasOwnProperty()
            * returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

                  const object1 = {};
                  object1.property1 = 42;

                  console.log(object1.hasOwnProperty('property1')); // true

                  console.log(object1.hasOwnProperty('toString')); // false

                  console.log(object1.hasOwnProperty('hasOwnProperty')); // false

            * If an Object is an Array, hasOwnProperty method can check whether an index exists.

      ? isPrototypeOf()
          * checks if an object exists in another object's prototype chain.

          * allows us to check whether or not an object exists within another object's prototype chain.

                function object1() {}
                function object2() {}

                object1.prototype = Object.create(object2.prototype);

                const object3 = new object1();

                console.log(object1.prototype.isPrototypeOf(object3)); // true

                console.log(object2.prototype.isPrototypeOf(object3)); // true

            ! isPrototypeOf() differs from the instanceof operator.

            $ In the expression "object instanceof AFunction", the object prototype chain is checked against AFunction,prototype, not against AFunction itself.

      ? propertyIsEnumerable()
          * returns a Boolean indicating whether the specified property is enumerable and is the object's own property.

                  const object1 = {};
                  const array1 = [];

                  object1.property1 = 42;
                  array1[0] = 42;

                  console.log(object1.propertyIsEnumerable('property1')); // true

                  console.log(array1.propertyIsEnumerable(0)); // true

                  console.log(array1.propertyIsEnumerable('length')); // false

      ? toString()
          * returns a string representing the object.

      ? valueOf()
          * returns the primitive value of the specified object.

                  function MyNumberType(n) {
                    this.number = n;
                  }

                  MyNumberType.prototype.valueOf = function() {
                    return this.number;
                  };

                  const object1 = new MyNumberType(4);

                  console.log(object1 + 3); // 7


*/
