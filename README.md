# FriendFinder

### Overview

FriendFinder is an app that matches the user to a likely friend by comparing the results of a 10-question personality test.  The user fills out a questionnaire and submits the data to an express server via AJAX.  Next, the server takes the data and compares it to an array of 7 friends whose quiz results are stored on the server, and then responds to the user's API call with a JSON containing the best matched friend's data.  Finally, a script in the user's browser parses that JSON and displays the best matched friend's name and photo in a modal.  

* [Link] https://afternoon-wildwood-04336.herokuapp.com/