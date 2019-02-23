/* feedreader.js
 * Spec file that Jasmine will read and contains
 * tests that will be run against application.
 */

/* Placing all of our tests within the $() function,
 * since some of these tests may require DOM elements.
 */

$(function() {
  /* This suite is all about the RSS feeds definitions,
   * the allFeeds variable in the application.
   */
    describe('RSS Feeds', function() {

        // Test to make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined and no empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
        it('and each feed has a URL defined and the URL is not empty', function() {
            allFeeds.forEach(function (feed, url) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch('http://');
            });

        });

        // Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
         it('and each feed has a name defined and the name is not empty', function() {
            allFeeds.forEach(function (feed, name) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    // Test for menu
    describe('The menu', function() {

        let body = $('body');

        // Test that ensures the menu element is hidden by default
        it('element is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });;

         // Test that ensures the menu changes visibility when the menu icon is clicked
        it('element displays when clicked and hides when clicked again', function() {

            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).not.toBe(true);

            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

    // Test for function loadFeed
    describe('Initial Entries', function() {
        /* Test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Since loadFeed() is asynchronous, this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should be more than 0 when feed is loaded', function(done) {
            var entries = $('.feed .entry').length;
            expect(entries).not.toBe(0);

            // Invoke done callback function
            done();
        });
        
    });

    /* Test ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * loadFeed() is asynchronous.
     */
    describe('New Feed Selection', function() {

        let content;
        let contentNew;

         beforeEach(function(done) {
            loadFeed(0, function() {
                content = $('.feed').html();
                done();
            });
        });

        it('changes content when new feed is loaded', function(done) {
            loadFeed(1, function() {
                contentNew = $('.feed').html();
                expect(contentNew).not.toBe(content);
            done();
            });

        });

    });

}());
