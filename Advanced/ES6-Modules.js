/*
  @ Modules (ES6)
    $ Each file is its own module

    ? To make objects, functions, classes or variables available to the outside world it’s as simple as exporting them and then importing them where needed in other files

    # Exporting

      $ We can export members one by one. What’s not exported won’t be available directly outside the module:

      export const myNumbers = [1, 2, 3, 4];
      const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

      export function myLogger() {
        console.log(myNumbers, animals);
      }

      export class javascript {
        constructor() {
          // ...
        }
      }

      ^ We can export desired members in a single statement at the end of the module
        - export { myNumbers, myLogger, javascript };

    # Exporting with alias

      ? We can also give an aliases to exported members with the as keyword:
        - export { myNumbers, myLogger as Logger, javascript }

    # Default export

        = We can define a default export with the default keyword:

          export const myNumbers = [1, 2, 3, 4];
          const animals = ['Panda', 'Bear', 'Eagle'];

          export default function myLogger() {
            console.log(myNumbers, pets);
          }

          export class javascript {
            constructor() {
              // ...
            }
          }

    # Importing
      * With the import keyword, members to be imported in curly brackets and then the location of the module relative to the current file:

        - import { myLogger, javascript } from 'app.js';

    # Importing with alias
      & We can also alias members at import time:
          - import myLogger as Logger from 'app.js';

    # Importing all exported members
      ^ We can import everything that’s imported by a module like this:
          - import * as Utils from 'app.js';
            ? This allows us access to members with the dot notation:
              & Utils.myLogger();

    # Importing a module with a default member
      = We import the default member by giving it a name of our choice

          - import Logger from 'app.js';
          - import Logger, { javascript, myNumbers } from 'app.js';

            & Logger - default member
            & { javascript, myNumbers } - non-default members

*/
