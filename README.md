## InstaCognito

FAC5 Week 2 API challenge
Repo for the blog:

###Project Pitch

Ever wanted to keep track of your favourite TMZ celebrities, but you were too embarassed to add them on Instagram? Now you can, and even if your friends nick your phone: they'll be none the wiser.

###Concept

We are designing a proof of concept page to demonstrate the capability to use the Instagram API to keep track of a list of usernames in real time, alongside the ability to track hashtags.

###Workflow

Managed using pivotal tracker. The front end designer (Jack Rans) is designing the pages with testing, translated and optimised by devops (Jack M) using jade/harp to compile. Lukas (Architect) and Abdi (API) are working together to design the requirements for the API and test its functionality.

###Core Function Description

Users:

The function loadUserArray() takes a client-provided array of public Instagram usernames (@****), and gets the numeric User_ID for each from Instagram. It then uses another function loaduser() to query the Instagram API with the numeric User_IDs to return the most recent images for each queried user and push it into the usersImageArray[]. The page then uses sortByTime() that implements a pivot sort - pivotSort() - to sort the Instagram photos by timestamp (serving newest first). Using the function displayinitialusers, the script then pushes the individual objects to the page, appending them to the page with div classes that allow for formatting with CSS.

Hashtags:

This functions much the same as the user function, but searches by tag instead.

###Stretch Function Description

Taking input via forms on the page.

###Project Files

Files are located in the gh-pages of this repository (located at www.github.com/jackpandas/facapi)

In order to run this project, you need to fork the gh-pages branch.

###Project Timeline/Goals
Tuesday
- Meet client
- Develop workflow
- Define API concept/requirements
- Test and produce site framework from wireframes  
Wednesday
- Goal: Proof of concept of intended API use
- Goal: Satisfy client at meeting (min 8 tests, 2 per person)
- Goal: Optimise core site code (index, tabbed pages) using jade  
Thursday
- Goal: Test and deliver API functions
- Goal: Implement core API function on local site
- Goal: Implement tabbed browsing on site to enable switching between different uses of API  
Friday
- Goal: Implement multiple use of API on local site
- Goal: Enable switching between tabs without reloading entire page
- Goal: Present a functioning web site