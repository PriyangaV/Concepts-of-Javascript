/*
    @ ES6 - Template Strings
      $ Template Strings add new functionality and syntactic sugar to our code

      # A multi-line strings in JavaScript prior to ES6

        - // Use +
            var heading = 'All about JS';
            var content = 'Stuff about JS';
            var htmlTemplate =
              '<div>' + '<h3>' + heading + '</h3>' + '<p>' + content + '</p>' + '</div>';

        - // Or Use arrays
            var htmlTemplate2 = [
              '<div>',
              '<h3>',
              heading,
              '</h3>',
              '<p>',
              content,
              '</p>',
              '</div>'
            ].join('');

        $ This way of creating dynamic strings ugly and not very fun to work with

          - // Use Template Strings (ES6)
              var heading = 'All about JS';
              var content = 'Stuff about JS';
              var htmlTemplate = `<div>
                      <h3>${heading}</h3>
                      <p>
                        ${content} ${2 + 2}
                      </p>
                  </div>`;

        $ We get multi line string support along with object templates

*/
