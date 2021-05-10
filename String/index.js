/*
  @ String
    $ The textual data is stored as strings

    $ Strings can be enclosed within either single quotes, double quotes or backticks

        let single = 'single-quoted';
        let double = "double-quoted";
        let backticks = `backticks`;

        * Single and double quotes are essentially the same
          $ \n - to create multiline strings

        * Backticks, allow us to embed any expression into the string, by wrapping it in ${…}

          $ It allows a string to span multiple lines

      $ Strings are immutable
        * It is impossible to change a character
          let str = 'Hi';
          str[0] = 'h'; // error in strict mode
          console.log(str[0]); // doesn't work // returns H

          let str = 'Hi';
          str = 'h' + str[1]; // replace the string

          console.log/(str); // returns hi

  @ String Properties and Methods
    ? Property
      * length
          $ Returns the number of characters in a string

          const str = "hello universe";
          str.length;

    ? Methods
      > Accessing characters
        @ str.charAt(pos)
          $ To get a character at position(starts with 0)
            str[position]
            str.charAt(position)

            let str = "hello";

            $ first character
              str[0] // h
              str.charAt(0) // h
            $ last character
              str[str.length - 1] // o

            $ if no character is found,
              [] - returns undefined
              charAt() -  returns ""

            $ iterate over characters - for..of
              for (let char of "Hello") {
                console.log(char); // 'H', 'e', 'l', 'l', 'o'
              }

      > Changing the case
        @ str.toLowerCase() and str.toUpperCase()

        'Interface'.toLowerCase(); // interface
        'Interface'.toUpperCase(); // INTERFACE
        'Interface'[0].toLowerCase() // i

      > Searching for a substring
        @ str.indexOf(searchValue [, fromIndex])
            $ returns the position "number"

            $ returns -1 if nothing can be found

            $ The search is case-sensitive

            $ Optional second parameter(pos) allows us to start searching from a given position


          let str = 'Widget with id';
          str.indexOf('widget') // -1
          str.indexOf('Widget') // 0
          str.indexOf('id') // 1 [wid] - [id]
          str.indexOf('with') // 7

          str.indexOf('id', 2) // 12 [with id] - [id]

          $ indexOf in a loop
              let str = 'As sly as a fox, as strong as an ox;';

              let target = 'as'; // let's look for it

              let pos = 0;
              while (true) {
                let foundPos = str.indexOf(target, pos);
                if (foundPos == -1) break;

                alert( `Found at ${foundPos}` );
                pos = foundPos + 1; // continue the search from the next position
              }

              console.log(str.indexOf('as', 0)) // 7, 7 + 1
              console.log(str.indexOf('as', 8)) // 17, 17 + 1
              console.log(str.indexOf('as', 18)) // 27, 27 + 1

              let pos = -1;
              while ((pos = str.indexOf(target, pos + 1)) != -1) {
                console.log( pos );
              }

        @ str.lastIndexOf(searchValue[, fromIndex])
            $ It searches from the end of a string to its beginning.

            $ It would list the occurrences in the reverse order.

        @ Bitwise NOT trick
            $ ~n equals -(n+1)

            $ ~2 === -3

            $ ~4 === -5

            $ ~-1 === 0 ======>   [ -(-1+1) ] = 0

            if (~str.indexOf('i')) { 0 - false
              ...
            }

        @ includes, startsWith, endsWith
          $ returns true/false "boolean"

          $ Depending on whether str contains substr within.

          console.log("Widget with id".includes("Widget")) // true
          console.log("Widget with id".includes("good")) // false

          console.log("Widget".startsWith("Wid")); // true
          console.log("Widget".endsWith("get")); // false

      > Getting a substring (substring, substr and slice)
        @ str.slice(beginIndex[, endIndex])
            $ Returns the part of the "string" from start to (but not including) end

              let str = "stringify";
              str.slice(0, 5) // "strin" - [0 - 4]
              str.slice(0, 1) // "s" - [0]

            $ slice goes till the end of the string if no second argument

              str.slice(2) // ringify [2-end]

            $ start/end values can be negative
              * starts from -1 index

              str.slice(-4, -1) // 'gif'
              str.slice(-4, -6) // ''

        @ str.substring(start [, end])
            $ Returns the part of the string between start and end

            $ This is almost the same as slice, but it allows start to be greater than end.

            $ extracts the characters in a string between "start" and "end", not including "end" itself

            $ If "start" is greater than "end", this method will swap the two arguments
                str.substring(1, 4) == str.substring(4, 1)

                let str = "stringify";

                console.log( str.substring(2, 6) ); // "ring"
                console.log( str.substring(6, 2) ); // "ring"

                - ...but not for slice:
                  console.log( str.slice(2, 6) ); // "ring" (the same)
                  console.log( str.slice(6, 2) ); // "" (an empty string)

            $ If either "start" or "end" is less than 0, it is treated as if it were 0
              > Negative arguments are (unlike slice) not supported, they are treated as 0

                str.substring(-1, 2) // "st"

            ! It does not change the original string.

          ! @ str.substr(start [, length]) - deprecated
            $ Returns the part of the string from start, with the given length

              str.substr(3, 4); // "ingi"


    @ method	          |        selects…	                        |       negatives
// ___________________________________________________________________________________________

$ slice(start, end)	    |  from start to end (not including end)	|   allows negatives
$ substring(start, end)	|  between start and end	                |   negative values mean 0
$ substr(start, length)	|  from start get length characters	      |   allows negative start


        @ Comparing strings
            $ Strings are compared character-by-character in alphabetical order.

            $ A lowercase letter is always greater than the uppercase
              >  'a' > 'Z' // true

            $ Letters with diacritical marks are “out of order”:
              > 'Österreich' > 'Zealand' // true

        @ str.codePointAt(pos)
            $ Returns the code for the character at position pos:

              "Z".codePointAt(0) // 90
              "z".codePointAt(0) // 122

        @ str.localeCompare(str2)
            $ returns an integer

            $ Returns a negative number if str is less than str2.

            $ Returns a positive number if str is greater than str2.

            $ Returns 0 if they are equivalent.

              console.log( 'Österreich'.localeCompare('Zealand') ); // -1


      @ Summary

        * There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.

        * Strings in JavaScript are encoded using UTF-16.

        * We can use special characters like \n and insert letters by their Unicode using \u....

        * To get a character, use: [].

        * To get a substring, use: slice or substring.

        * To lowercase/uppercase a string, use: toLowerCase/toUpperCase.

        * To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.

        * To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.

      @ There are several other helpful methods in strings:

          * str.trim() – removes (“trims”) spaces from the beginning and end of the string.

          * str.trimEnd()

          * str.trimStart()

          * str.repeat(n) – repeats the string n times.

          * str.concat(str2 [, ...strN])
              $ A new string containing the combined text of the strings provided.

          * str.match(regexp)
              $ A regular expression object.

              $ If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).

              $ The RegExp object must have the /g flag, otherwise a TypeError will be thrown.

          * str.matchAll(regexp)

          * str.padEnd(targetLength [, padString])
              $ A String of the specified targetLength with the padString applied at the end of the current str.

          * str.repeat(count)

          * str.replace(str|regexp, str|func) - searching and replacing

              $ replace a substring/pattern in the string

              > syntax
                string.replace(searchvalue, newvalue)
              > return
                A new String, where the specified value(s) has been replaced by the new value

              '12-34-56'.replace("-", ":") // 12:34-56

              '12-34-56'.replace( /-/g, ":" )  // 12:34:56

                  > Symbols
                    $ /g - global
                    $ /gi - global and case-insensitive
                    $ 2nd param as a function - return the replacement text

                    $& - inserts the whole match
                    $` - inserts a part of the string before the match
                    $' - inserts a part of the string after the match
                    $n, $<name>, $$

                    * swap first and last name
                      $ str.replace(/(hello) (universe)/i, '$2, $1') // 'universe, hello'

                    > second argument can be a function
                        * func(match, p1, p2, ..., pn, offset, input, groups)

                        match – the match
                        p1, p2, ..., pn – contents of capturing groups (if there are any)
                        offset – position of the match
                        input – the source string
                        groups – an object with named groups

                      $ str.replace(/hello|uni/gi, str => str.toUpperCase()) // 'HELLO UNIverse'

                      $ "Ho-Ho-ho".replace(/ho/gi, (match, offset) => offset) // 0-3-6

          * str.replaceAll(str|regexp, str|func) - searching and replacing

          * str.search(regexp)

          * str.split([separator[, limit]])
              $ If limit is 0, [] is returned.

          * str.toString()

          * str.valueOf()
              $ This method is usually called internally by JavaScript and not explicitly in code.

              let str = "value";
              str.valueOf() // value



*/

"use strict";

// let str = "hi";
// str[0] = "H";
// console.log(str[0], str);
let str = "Hi";

str = "h" + str[1];
console.log(str);
if (str.indexOf("i") != -1) {
  console.log("ss");
}
