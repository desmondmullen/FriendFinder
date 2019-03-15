# FriendFinder

**FriendFinder is a personality profile matching app demonstrating full stack development skills in HTML, JavaScript, Node.js, and Expess.** I created this for the Coding Boot Camp at UNC-Chapel Hill in March 2019. The assignment called for very basic features taking answers from a ten-question survey and matching them with the one closest match already in the database (an array). I took the assignment further and created real business logic that could be extended to a true, functioning dating/friend-finder site.

# Features
In addition to the basic functions of [the assignment](homework_instructions.md), this app does the following:

### ADDITIONAL FEATURES BEYOND THE SCOPE OF THE ASSIGNMENT:
* An array of sample friends is created at startup by calling a sample data API and populating 100 friends' picture URLs, names, and ages. Sample survey responses for each sample friend are truly randomized for a realistic cross-section of people. This way you get "real" results, right out of the box. Larger sample sets (300, 500, etc.) do not appear to increase the "quality" of matches.
* Allows you to select "I'm a male looking for female friends" (or female/male, or male/male, or female/female) in the manner of a real dating site. Friends are properly matched only with those with reciprocal interests.
* Sample friends are evenly split between male and female and are randomly assigned a "looking for male friends" or "looking for female friends" status.
* App displays the *top five* closest matches to the user's survey answers.
* Displays the *actual match-percentage* (the amount of difference in comparing your answers to the friend) for each of those matches.
* Allows you to click-to-compare your answers with a match's answers.
* Characterizes the difference between your answers and the match's answers, e.g., "Jane agrees a little more with this question.", "The two of you completely disagree on this question!".
* Allows you to view the matches again, even after you have closed the modal display of the matches.
* Full input validation including age limit and true photo URL validation.
* Photo URL validation is done by doing a server-side GET on the photo URL and seeing if we get a "success" response or an error. While, in this implementation, it doesn't truly check that the URL is *an image*, it does check that the URL is completely valid and accessible.
* The question HTML markup is created on-the-fly when the page loads. The question text is kept in an array and can be easily changed by replacing the array. (Though, clearly, you want all participants to be answering the *same* set of questions!)
* "Help with Images" button provides helpful explanatory text along with a button to click to paste a valid sample image URL into the images field if the user doesn't have or doesn't want to use an image URL of their own.