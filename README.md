# Broken Link Finder

This web app allows a user to type in a url, and gets displayed a list of all the external links on that page, and whether they are broken or not.

## Current Tasks

- get(url) currently does not let modern web pages render, and so res.body doesn't contain relevent information most of the time. Will try and use package phantomjs.


## MVP

- Allow users to type a url into the portal
- If the link is valid, return a list of links and their status.

## Stretch
- Give users an option to do a 'deep' search, and look at all routes associated with the entered url (e.g '/about', '/contact-us' etc)
