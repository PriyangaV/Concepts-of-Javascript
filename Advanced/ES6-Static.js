/*
    @ ES6 - static keyword

      $ With JavaScript Classes, we can add methods and properties that can be accessed per instance of the Class

      # Standard behavior when you make multiple instances of a Class

      * If we create a method that does not access an instance property, we can use the static keyword

      $ When using static properties, you can access them and set them any time, but they exist only on the Class itself and are not accessible to any instance of the Class

              class MathUtils {
                static add(num, num2) {
                  return num + num2;
                }

                static subtract(num, num2) {
                  return num - num2;
                }
              }

            - // Static Methods
            console.log(MathUtils.add(1, 2)); // 3

            - // Cannot access static values on instance
            const instance = new MathUtils();
            instance.add(); // error undefined

        $ When creating a static method, it can only be accessed on the Class definition itself

        $ Useful for utility methods that do not contain any state

        > One could argue that if you have static methods, you could refactor them to be plain functions instead

        * "static" keyword on properties and getters

          class MathUtils {
            static value = '';

            static get random() {
              return Math.random();
            }

            static add(num, num2) {
              return num + num2;
            }

            static substract(num, num2) {
              return num - num2;
            }
          }

          - // Static Methods
          console.log(MathUtils.add(1, 2));
          console.log(MathUtils.substract(3, 2));

          - // Static Properties
          MathUtils.value = 'Hello from static property';
          console.log(MathUtils.value);

          - // Static Getter
          console.log(MathUtils.random, MathUtils.random); // two different values

          - // Cannon access static values on instance
          const instance = new MathUtils();
          instance.value // error/undefined

          * Static getters allow you to compute values on the fly with a property

          $ For this example, we return a new value anytime we access the random property
*/
