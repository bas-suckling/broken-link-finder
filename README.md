# Broken Link Finder

This web app allows a user to type in a url, and displays a list of all the links on that page, and their status codes (eg 404, 200 etc). It was built using React, Node.js, express and Puppeteer, with Jest and Enzyme for testing. Check it out here: http://broken-link-finder.herokuapp.com/

## Stretch
- Give users an option to do a 'deep' search, and look at all routes associated with the entered url (e.g 'exampleurl/about', 'exampleurl/contact-us' etc)
- Add tests for puppeteer and API calls
- Remove false positives such as links to phone numbers, some emails, and Linked In accounts (status code 999??)

## Troubleshooting
I had issues during deployment to heroku, as it requries additional buildpack which is not included. See the links beloew for details.

- https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md
- https://github.com/jontewks/puppeteer-heroku-buildpack
