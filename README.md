## Event Tracker Project -- Nutrition Tracker

### Description

This is a basic JPA Project with a REST API. It connects to a SQL database that contains one table.

The main idea for this project is a basic nutrition tracker that allows the user to simply check off various items. It is not intended to track calories or macros. Starting small, I'm currently only implementing water tracking that keeps tally of the amount of water consumed per day. The next step will be to add vegetable tracking.

Since the database currently only has one table, there is only 1 entity in the JPA. The REST route URIs and HTTP methods include an index method (GET), show (GET), create (POST), update (PATCH), and delete (DELETE). I chose not to use the replace method, it didn't make sense with this particular app. I don't want users to replace the amount of water they drink, just update it. I have the replace method stubbed out in WaterServiceImpl, in case I want it later.

Routes:

* List the current entries (GET): api/water
* Show one (GET): api/water/{id}
* Create (POST): api/water/
* Update (PATCH): api/water/{id}
* Delete (DELETE): api/water/{id}


### Issues and lessons learned
I had minor issues from the start on this project. Mostly small mistakes that snowballed, but in the end I have basic CRUD functionality. Even with a very small project like this, I should have spent a little more time planning. I found that without envisioning the front end, I had a hard time piecing the back end together. I ran into a lot of problems with my JUnit testing, similar to issues a lot of us had in class last week. I got it to work, but I need to review that and understand why.

### The road so far and moving forward
We were encouraged to start small so I only have the one table. This is a project I've been thinking about in some form for quite some time so I will be moving forward with it, outside of class if necessary. I have long wanted a very simple app just to keep track of water and veg throughout the day. Everything I've found online is more complicated than I want. This will continue to be a good learning project for me. 
