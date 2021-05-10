/*
  @ Date - Native JS Date Object

    * There are some great libraries out there to deal with dates in JavaScript, with Moment.js and date-fns

      # Creating Date Objects
        $ Creating a new date instance is as easy as newing up a date object

        ? Without arguments, we get the current date and time in the local timezone:

          const now = new Date();
          console.log(now); // Today with current time

      # Milliseconds Since Unix Epoch
        $ We can also pass-in an integer for a date object that’s X amount of milliseconds after January 1st 1970 UTC:

          const latter = new Date(4000000000);
          console.log(latter); // Sun Feb 15 1970 23:06:40 GMT-0800 (PST)

      # Date String
        $ We can also alternatively create a date object by passing a string:

          const summerOf95 = new Date("1995-06-28");

        - // or, with a full date string that also includes the time and the time zone. Note here that `Z` is for UTC timezone:
            const december31st = new Date("1999-12-31T02:56:03.392Z");

      # Date Components
        $ Finally, we can create a date object in our local timezone using separate component argument:

        const someDate = new Date(2000, 5, 20, 16, 34, 12, 24);
        console.log(someDate);
        - // Tue Jun 20 2000 16:34:12 GMT+0530 (India Standard Time)

          ? The months are zero-based, and 5 therefore represents June. Components for time can be omitted and 0 will be assumed:

            const someDate = new Date(2000, 5, 20, 16, null, 12, 24);
            console.log(someDate);

          - // Tue Jun 20 2000 16:00:12 GMT+0530 (India Standard Time)

      # Timestamps
        $ We can get a timestamp (number of milliseconds since Jan 1st 1970 UTC) using a date instance’s getTime method:

            const nowTimestamp = new Date().getTime();
            console.log(nowTimestamp); // 1512616153783

        $ Timestamp for now
            ? We’re getting the timestamp for now. This is so common that JavaScript now has a method to get just that more easily:

            const nowTimestamp = Date.now();
            console.log(nowTimestamp); // 1512616153783

        $ Timestamps are useful to easily calculate the difference in milliseconds between two dates

          const diff = new Date("1995-02-03").getTime() - new Date(0).getTime();

            - We can ommit the call to getTime and the dates will automatically be coerced to timestamps:

            const diff = new Date("1995-02-03") - new Date(0);

    # Human Readable Strings

      $ Few useful methods to get human-friendly string representations!

        * toDateString
        * toTimeString
        * toLocaleDateString
        * toLocaleString
        * toLocaleTimeString
        * toUTCString

        const now = new Date();

        console.log(now.toDateString()); // Wed Dec 06 2017
        console.log(now.toTimeString()); // 19:23:42 GMT-0800 (PST)
        console.log(now.toLocaleDateString()); // 12/6/2017
        console.log(now.toLocaleString()); // 12/6/2017, 7:20:28 PM
        console.log(now.toLocaleTimeString()); // 7:20:51 PM
        console.log(now.toUTCString()); // Thu, 07 Dec 2017 03:21:14 GMT

    # Getting Date or Time Components

      $ We can get specific date/time components from a date instance using the following methods:

        getFullYear(): The year, using 4 digits.
        getDate(): The day of the month (e.g: 31).
        getMonth(): A zero-based integer for the month (e.g: 0 for January).
        getDay(): The index for the day of the week from 0 for Sunday up to 6 for Saturday.
        getHours(): The hour of the day.
        getMinutes(): The minutes.
        getSeconds(): The seconds.
        getMilliseconds(): The milliseconds.

        const now = new Date();
      console.log(`It's ${now.getHours()}:${now.getMinutes()} o'clock`);
        - // It's 19:34 O'Clock

        - Each method has an equivalent so that UTC date/time is returned instead (e.g: getUTCMinutes()

    # Setting Date or Time Components

      $ Similar to how we can get date/time components, we can also set them using analogous methods:

      const now = new Date();
      now.setFullYear(2049);
      console.log(now.toLocaleString()); // 12/6/2049, 7:40:04 PM

      ? The tedious way
        const now = new Date();

      ? The shortcut
        const now = new Date();

    # Adding/Subtracting Time

      $ Using a combination of the get and set methods, we can add to or subtract from the date/time components of a date instance. Here for example, we add 15 minutes to the current time:

        const now = new Date();
        console.log(now.toLocaleTimeString()); // 7:47:53 PM

        now.setMinutes(now.getMinutes() + 15);
        console.log(now.toLocaleTimeString()); // 8:02:53 PM




























*/
