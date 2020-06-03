# DiagonAlley
Shopping app for the ambitious young wizard or witch

## User Stories
- 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- 500 - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- homepage - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- sign up - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- login - As a user I want to be able to log in on the webpage so that I can get back to my account
- letter - As a user i want to be able to see my acceptance letter to Hogwarts once i sign up. 
- profile - As a user i want to be able to see my profile, where i can see which house im a part of and the items i bought. 
- shop - As a user I want to be able to purchase the items from the shop list

## Backlog
- logout - As a user i want to be able to log out of my account
- extra pages - apart from the shop page 
- potions instagram - an instagram like feature for potions you can create

## User profile:

see my profile
emblem what house theyre in
how much money they have 
what items you own


...
## ROUTES:
GET /

renders the homepage
GET /auth/signup

redirects to / if user logged in
renders the signup form (with flash msg)
POST /auth/signup

redirects to / if user logged in
profile:
username
email
password
GET /auth/login

redirects to / if user logged in
renders the login form (with flash msg)
POST /auth/login

redirects to / if user logged in
body:
username
password
POST /auth/logout

POST /profile



POST /shop/create

redirects to / if user is anonymous
body:
name
date
location
description
GET /profile/:id

renders the event detail page
includes the list of attendees
attend button if user not attending yet
POST /events/:id/attend

redirects to / if user is anonymous
body: (empty - the user is already stored in the session)

## Models
user model 
new Schema ({
_id: , 
email: String, required: true, unique: true,
password: String, minlength: 6, maxlength: 30,
userName: String, required: true, unique: true, maxlength: 20 
}) 

shop list
shopList new Schema ({
_id: , pets: [String], books: [String], potions: [String]
})
  
## Links
### Trello
https://trello.com/b/BXQiE1Qs/hogwarts

### Git

Repository Link

Deploy Link

### Slides



