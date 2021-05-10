/*
  @ Promises (ES6 (ES2015))
      $ Promises allow us to very easily deal with asynchronous code without resolving to multiple levels of callback functions

      * Goodbye callback hell!

      > Basic Promise - simulating with a setTimeout()
        let myPromise = new Promise((resolve, reject) => {
          let data;
          setTimeout(() => {
            data = "Some payload";
            if (data) {
              resolve(data);
            } else {
              reject();
            }
          });
        });

        $ Promise is initiated with two functions as arguments

        $ resolve() - A function for its success

        $ reject() - A function for its failure

          * Get the payload data
            myPromise.then(data => {
              console.log('Received: ' + data); // Received: Some payload
            }).catch(() => {
              console.log("There was an error"); // There was an error
            });

      > Chaining Promises
        $ Promises can also be chained together with multiple then functions

        $ The return value of a then becomes the value available to the next then in the chain

            myPromise.then(data => {
              console.log('Received: ' + data); // Received: Some payload
              let moreData = "Another payload";
              return moreData;
            }).then(data => {
              console.log(data); // Another payload
            }).catch(() => {
              console.log("There was an error");
            });

*/