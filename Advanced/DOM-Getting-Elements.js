/*
  @ DOM (Document Object Model) Getting Elements
    ^ Grab elements from the DOM

    ? Get Element by ID
        & const element = document.getElementById('javascript');

        ! "id" attribute is supposed to be unique across our entire HTML document, so this method will only ever return a single element

        $ Method name is case sensitive

    ? Get Elements by Tag Name
        ^ Give it a tag name and it will return all of the elements for that tag:
          - const ulElements = document.getElementsByTagName('ul');

        = It lets us pull a single tag name at a time, but if we pass in (*) as the tag name, us will receive every element in the DOM tree:
          - const allElements = document.getElementsByTagName('*');

    ? Get Elements by Name
        ^ It grabs the elements that have a specific name attribute

        - const namedElements = document.getElementsByName('emailInput');

          * It will return all of the elements with that name attribute

    ? Get Elements by Class Name
        ^ It will return all of the elements that have said class in it’s class name list
          - const elements = document.getElementsByClassName('js');

          = Accepts multiple class names
            & Returns all matched elements

            - const elements = document.getElementsByClassName('js web');

    ? Query Selector
      ^ First matched will return
        - const elements = document.querySelector('#form input[name="web"].js');

    ? Query Selector All
      ^ It will return all of the elements
        - const elements = document.querySelectorAll('form#name input[name^="js-"]');

    # HTMLCollection
        $ Most of the methods (except getElementById() and querySelector()) return multiple elements as an HTMLCollection

        * The HTMLCollection is similar to an array, but does deviate a bit as it lacks looping methods like forEach()

          ^ Length
              - const numberOfElements = elements.length;

          ^ First Element
              - const firstElement = elements[0];

          ^ Last Element
              - const lastElement = elements[elements.length - 1];

          ^ Looping
              - .forEach()
              - .map()
              - Array.prototype

              Array.prototype.forEach.call(elements, (element) => {
                console.log(element);
              });

*/
