# Feed Reader Testing

**Project 4: Feed Reader Testing** ~ [Udacity Front End Web Developer Nanodegree Program](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001)

I was given a web-based application that reads RSS feeds and wrote a complete test suite using Jasmine to ensure the following:
* Each feed in the allFeeds object has a URL defined and that the URL is not empty.
* The menu element is hidden by default.
* The menu changes visibility when the menu icon is clicked. This test has two expectations: the menu displays when clicked and hides when clicked again.
* When the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* When a new feed is loaded by the loadFeed function, the content changes. Callbacks are used to ensure that feeds are loaded before they are tested.

## Usage
* Navigate to your local copy of index.html through your web browser  

## Technologies Used
* JavaScript
* jQuery
* Jasmine
* HTML5 / CSS3

## Resources
* **Udacity Supporting Courses**: [JavaScript Testing](https://eu.udacity.com/course/javascript-testing--ud549)
