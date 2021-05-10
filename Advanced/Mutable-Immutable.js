/*
  @ Mutable Immutable JavaScript

    $ When I first dived into JavaScript and programming; I never really thought about immutable data

    ? I would say animal is panda, then animal is lion

    var animal = 'panda';
    animal = 'lion';

    ^ I was free to do whatever I wanted with my data!

    * People started telling me: “you should always use const if you can", but I didn’t really understand why

    # Why Use Immutable Data?
      = Because sometimes code changes things we don’t want to be changed!

      - Let’s say we have an e-commerce site

      ? checkout.js
        - // First we import a function called validate address to check if our users entered a valid address
        import validateAddress from 'address-validator'

        const checkout = (user, cart) => {
          - //... checkout code

          var userAddress = user.address
          - // Checking if the address is valid
          const validAddress = validateAddress(userAddress);

          - // If the address is valid then
          if (validAddress) {
            - //... proceed to checkout
          }
        }

        = Let’s say we got our address-validator by installing an npm package

        - npm install address-validator

        $ Everything works as expected but one day a new version is released a new line of code was introduced to the package which looks like this:

          ? validateAddress.js
            const validateAddress = (address) => {
              address = '123 My Street, Bring Me Free Goods, USA';
              return true;
            }

        * Now the variable userAddress will always be equal to the value of address! We can see how this is a problem

        & This specific issue can be solved by using immutability, but it can also be solved with proper scoping

        ? accidental-change.js

            const userJack = {name: 'Jack Misteli'};
            - // I want to make a copy of user to do stuff with it
            const user2 = userJack
            user2.name = 'Bob'

            - // Because we didn't do a copy:
            - // userJack.name === 'bob'

            $ This type of mistake can occur very often

    # Immutability Tools
        ^ The most intuitive immutability tool is to use "const"

        const animal = 'panda';

        - // This will throw a TypeError!
        panda = 'lion';

        * "const" is great! But it sometimes only gives the illusion of immutability!

        ? example-checkout.js
            const user = {
              name: 'Jack Misteli',
              address: '233 Paradise Road',
              bankingInfo: 'You wish!'
            };

            const maliciousAddressValidator = (user) => {
              user.address = 'Malicious Road';
              return true;
            };

            const validAddress = maliciousAddressValidator(user);
            - // Now user.address === 'Malicious Road' !!

    # Object.freeze
        const user = {
          address: '233 Paradise Road'
        };

        Object.freeze(user)
        - // Uing the same dodgy validateUserAddress

        const validAddress = maliciousAddressValidator(user);
        - // Now user.address === '233 Paradise Road' !!

        * One issue with Object.freeze is that we don’t affect sub-properties
          ! To that we need to do the deepFreeze()

          const superFreeze = (obj) => {
          Object.values(obj).forEach(val =>{
            if (typeof val === 'object')
              superFreeze(val)
            })
            Object.freeze(obj)
          }

    # Using Property Descriptors
      $ We can modify property descriptors to create immutable properties

      ? We have to make sure that configurable and writeable are set to false

          - // Setting up a normal getter
          const user = {
            get address(){ return '233 Paradise Road' },
          };
          console.log(Object.getOwnPropertyDescriptor(user, 'address'))

          const validAddress = maliciousAddressValidator(user);

          - // It looks like our data is immutable!
          - // user.address ===  '233 Paradise Road'


          const maliciousAddressValidator = (user) => {
            - // We don't reassign the value of address directly
            - // We reconfigure the address property
              Object.defineProperty(user, "address", {
                get: function() {
                return 'Malicious Road';
              },
            });
          };
          const validAddress = maliciousAddressValidator(user);
          - // user.address === 'Malicious Road'

          const user = {};
          Object.defineProperty(user, "address", {value: 'Paradise Road', writeable: false, configurable: false});

          const isValid = maliciousAddressValidator(user)
          - // This will throw:
          - // TypeError: Cannot redefine property: address

    # Immutable Arrays
          $ Arrays have the same problem as Objects

          const arr = ['a','b', 'c']
          arr[0] = 10
          - // arr === [ 10, 'b', 'c' ]

          Object.freeze(arr)
          arr[0] = 10
          - // arr[0] === 'a'

          const zoo = []
          Object.defineProperty(zoo, 0, {value: 'panda', writeable: false, configurable: false});
          Object.defineProperty(zoo, 1, {value: 'lion', writeable: false, configurable: false});
          - // zoo === ['panda', 'lion']

          zoo[0] = 'alligator'
          - // The value of zoo[0] hasn't changed
          - // zoo[0] === 'panda



















*/
