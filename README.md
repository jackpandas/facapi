## InstaCognito

FAC5 Week 2 API challenge
Repo for the blog:

Branches:
- mac (Jack M)
- rans (Jack R)
- abdi (Abdi)
- lukas (Lukars)

###Project Pitch

Ever wanted to keep track of your favourite TMZ celebrities, but you were too embarassed to add them on Instagram? Now you can, and even if your friends nick your phone: they'll be none the wiser.

###Concept

We are designing a proof of concept page to demonstrate the capability to use the Instagram API to keep track of a list of usernames in real time, alongside the ability to track hashtags.

###Workflow

Managed using pivotal tracker. The front end designer (Jack Rans) is designing the pages with testing, translated and optimised by devops (Jack M) using jade/harp to compile. Lukas (Architect) and Abdi (API) are working together to design the requirements for the API and test its functionality.

###API Functions

This project calls upon the Instagram API on a local host, with a three step progression to a functional tool.

####Version 1

The project uses javascript to call the Instagram API using an access key. This version is considered complete when it is possible to call the Instagram API using hashtags and usernames in order to deliver data to the local domain.

####Version 2

Using the basic API functionality, the project will use javascript to call the Instagram API using an array of input values (usernames or hashtags). The data returned from these API calls will be stored in a staging array, ordered by ID number. The individual photos will then be sorted by timestamp, providing the newest photo first, and then pushed into the domain as a single API call.

####Version 3

The third iteration of the application adds the function to update the page, either by calling the API again for newer photos (REFRESH) or to seek older photos from the stream (MORE). In the REFRESH function, the API will be called (using the version 2 mode) and the new data will be compared to the existing data, at the staging array point, with any duplicate data being discarded. The new data will then be added to the domain above the existing data. In the MORE function, the version 2 API will be called using the NEXT URI function from the data in the array. 

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

