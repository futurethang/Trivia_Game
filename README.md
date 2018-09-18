# Trivia_Game
A timer-based trivia game using HTML, CSS, and jQuery. [Play the Trivia Game!](https://futurethang.github.io/Trivia_Game/)



# Primary Project Requirements

This project is part of the curriculum for University of Washington's Part Time Full Stack bootcamp. In it we reinforced principles of light web application design using HTML, CSS, and Javascript with the jQuery library. Special focus was made to make use of timers to advance the game and penalize for slow play. The challenges to meet were: 

* Create a trivia form with multiple choice or true/false options (your choice).
* Player has limited amount of time to finish the quiz. 
* The page will reveal the number of questions that players answer correctly and incorrectly.
* Player can pick one answer per question.

With additional optional challenges:

* Show only one question until the player answers it or their time runs out.
* On the final screen, show the number of correct answers, and incorrect answers.

# Personal Challenges and Lessons

In my approach to buiding this game I wanted to try the more difficult route and additionally include a fresh AJAX call from the Open Trivia API. At the time this was a larger challenge than expected, but I still utilized the API to get a set of trivia questions and answers to use. I used a fair amount of helper functions to break up the game operations, write clean DOM markup and set fresh event listeners. I also included use of some CSS Grid for my layout, including a case-specific fix for a Firefox font rendering glitch. I was prepared to include some <img> elements for the ovals to make it more "Trivial Pursuit"-like, but found a great raw CSS solution that also enabled more dynamic JS generated HTML. Bonus!
