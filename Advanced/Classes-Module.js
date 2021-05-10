/*
  @ Classes (vs) Modules

    $ Classes
      * Unfortunately with the introduction of classes in JavaScript, I commonly see them being used when they are unnecessary, and some more flexible options are available

    $ Modules
      * Modules help us make our code more flexible and performant in certain use cases

      > Using Classes - A collection of two simple string utilities
          export class StringUtil {
            static reverse(value) {
              return value
                .split('')
                .reverse()
                .join('');
            }
            static greeting(value) {
              return `Hello ${value}!`;
            }
          }

          $ We make the methods static so we can easily import and call those methods without having to create an instance of this class

            import { StringUtil } from './string-util';

            console.log(StringUtil.reverse('Hello'));  // olleH

      > Using Modules

          $ The module system allows us to export pretty much any language symbol we chose, variables, class, functions, etc

          $ We can export individual functions from JavaScript modules

          $ We can refactor our String Utility Class to use pure functions

            export function reverse(value) {
              return value
                .split('')
                .reverse()
                .join('');
            }

            export function greeting(value) {
              return `Hello ${value}!`;
            }

            import { greeting } from './string-util';

            console.log(greeting('Cory Rylan')); // Hello Cory Rylan!

            $ Isn’t this more verbose since we have to import each function instead of just one class?

            * Some key benefits of this pattern
                > First is the performance
                  - We didn’t use the reverse function

                  - We don’t want to send that code to our client’s machines if we don’t use it

                    $ Many JavaScript bundling tools for Web environments like "Webpack and Parcel" can take advantage of plain functions

                    * When these tools go to package our code for production if they see a function that is not imported anywhere it can simply exclude it from the bundled production code

                    $ This optimization called “Tree Shaking”

                    * It can reduce the size of the JavaScript sent to the client’s browser further improving performance

                    $ When logic is attached to a Class, it can be more difficult to determine if its safe to remove the dead code without risking side effects

                > Second - Pure Funtions
                    $ Pure functions in certain situations it can make unit testing easier

                    $ Unit testing pure functions with no state tend to be significantly easier to test

                    $ In some situations it may make sense to use classes for rich models
                        - Ex: const user = new User('Cory', 'Rylan')

                    > I find using pure functions works great for utility code and library code

      * For complex stateful business logic behavior Model like Classes can work better

      $ Both have advantages and disadvantages, be pragmatic about when to use either one

*/
