/*
  @ Boolean
    * an object wrapper for a boolean value

    $ The value passed as the first parameter is converted to a boolean value, if necessary.

    $ If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string ("")

    $ The object has an initial value of false

    $ All other values, including any object, an empty array ([]), or the string "false", create an object with an initial value of true.

    * Any object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement

      var x = new Boolean(false);
      if (x) {
        - // this code is executed
      }

    * This behavior does not apply to Boolean primitives
      var x = false;
      if (x) {
        - // this code is not executed
      }

    $ Do not use a Boolean object to convert a non-boolean value to a boolean value.

    $ To perform this task, instead, use Boolean as a function, or a double NOT operator:

      var x = Boolean(expression);     // use this...
      var x = !!(expression);          // ...or this
      var x = new Boolean(expression); // don't use this!

    ! Do not use a Boolean object in place of a Boolean primitive

    > Constructor
        $ new Boolean()
          ? Creates a new Boolean object.

          * Creating Boolean objects with an initial value of false

              var bNoParam = new Boolean();
              var bZero = new Boolean(0);
              var bNull = new Boolean(null);
              var bEmptyString = new Boolean('');
              var bfalse = new Boolean(false);

          * Creating Boolean objects with an initial value of true

              var btrue = new Boolean(true);
              var btrueString = new Boolean('true');
              var bfalseString = new Boolean('false');
              var bSuLin = new Boolean('Su Lin');
              var bArrayProto = new Boolean([]);
              var bObjProto = new Boolean({});

    > Instance Methods

        * toString() - bool.toString()
            $ returns a string representing the specified Boolean object.

                  const flag1 = new Boolean(true);

                  console.log(flag1.toString()); //  "true"

                  const flag2 = new Boolean(1);

                  console.log(flag2.toString()); // "true"

            ! The Boolean object overrides the toString method of the Object object; it does not inherit Object.prototype.toString().

        * valueOf() - bool.valueOf()
            $ returns the primitive value of a Boolean object.

                  const x = new Boolean();

                  console.log(x.valueOf()); // false

                  const y = new Boolean('Mozilla');

                  console.log(y.valueOf()); // true

            ! This method is usually called internally by JavaScript and not explicitly in code.

                  x = new Boolean();
                  myVar = x.valueOf(); // assigns false to myVar



*/
