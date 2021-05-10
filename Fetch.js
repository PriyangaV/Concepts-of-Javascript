/*
  @ Fetch
    * Fetch is a new-ish, promise-based API that lets us do Ajax requests without all the fuss associated with XMLHttpRequest!

    & Fetch is very easy to use and work with and greatly simplifies fetching resources from an API!

    # Get Requests
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(res => res.map(user => user.username))
          .then(userNames => console.log(userNames));

  - // ["Bret", "Antonette", "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"]

    # Post, Put and Delete Requests
      & To make requests other than GET, pass-in an object as a second argument to a fetch call with the method to use as well as any needed headers and the body of the request:

          const myPost = {
            title: 'A post about true facts',
            body: '42',
            userId: 2
          }

          const options = {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
              'Content-Type': 'application/json'
            }
          };

          fetch('https://jsonplaceholder.typicode.com/posts', options)
            .then(res => res.json())
            .then(res => console.log(res));

        ? JSONPlaceholder sends us the POSTed data back with an ID attached:
            Object {
              body: 42,
              id: 101,
              title: "A post about true facts",
              userId: 2
            }

        $ We’ll note that the request body needs to be stringified. Other methods that we can use for fetch calls are DELETE, PUT, HEAD and OPTIONS

    # Error Handling

        ? There’s a catch (pun intended 😉) when it comes to error handling with the Fetch API:

            $ If the request properly hits the endpoint and comes back, no error will be thrown

            $ Meaning, error handling is not as simple as chaining a catch call at then end of our fetch promise chain

            ! The response object from a fetch call has an ok property that will be either true of false depending on the success of the request
              = We can then use Promise.reject() if ok is false:

      fetch('https://jsonplaceholder.typicode.com/postsZZZ', options)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject({ status: res.status, statusText: res.statusText });
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log('Error, with message:', err.statusText));

      * Our promise will reject because we’re calling an endpoint that doesn’t exist, the chained catch call will be hit and the following will be outputted:
          - // "Error, with message: Not Found"


    # Fetch + Async/Await
        & Fetch is a promise-based API, using async functions is a great option to make our code even easier to reason about and synchronous-looking

          async function fetchUsers(endpoint) {
            const res = await fetch(endpoint);
            let data = await res.json();

            data = data.map(user => user.username);

            console.log(data);
          }

          fetchUsers('https://jsonplaceholder.typicode.com/users');

        ? We could just return a promise from our async/await function and then we'd have the ability to keep-on chaining then calls after calling the function:

          async function fetchUsers(endpoint) {
            const res = await fetch(endpoint);
            const data = await res.json();

            return data;
          }

          fetchUsers('https://jsonplaceholder.typicode.com/users')
            .then(data => {
              console.log(data.map(user => user.username));
          });

          ^ Calling json() returns a promise so in the above example, when we return data in the async function, we’re returning a promise

          - Again we could also throw an error if the response’s ok is false and catch the error as usual in our promise chain:

      async function fetchUsers(endpoint) {
        const res = await fetch(endpoint);

        if (!res.ok) {
          throw new Error(res.status); // 404
        }

        const data = await res.json();
        return data;
      }

      fetchUsers('https://jsonplaceholder.typicode.com/usersZZZ')
        .then(data => {
          console.log(data.map(user => user.website));
        })
        .catch(err => console.log('Ooops, error', err.message));
          - // Ooops, error 404









*/
