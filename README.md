[Link to deployed application](https://naguiluz.github.io/brews-and-reviews-client/)</br>
[Link to deployed api](https://dry-brushlands-62315.herokuapp.com)

I'm going to build a site where users can catalog beers they've tried from different micro/local breweries and post pictures, descriptions, and reviews. 

I have heard of apps like this before, so I can't say it's very original. However, I really like trying new beers and have worked at several breweries and bars, and for a long time I've always taken pictures of beers I like and then forgotten them in the backlogs of my phone. So this is related to my interests and will also be something I can actually use to keep track of the strange and obscure beers I like. 


As a user I want to be able to create an account that I can sign in and out of.
As a user I want to be able to change my password.
As a user I want to be able to save pictures of the beers I try.
As a user I want to be able to write about the beers I try.
As a user I want to be able to view my saved beers, and hopefully view the beers other users have tried and liked.

My Users will have an email, password, username(potentially), and a Beers resource 
name: string
brewery: string
description: string
type : string
rating: number
picture: image 

maybe later i'll make the description a separate subdocument



Wire frames and ERD<br/>
[page on load](https://i.imgur.com/5E3WIQy.png)<br/>
[page on sign in](https://i.imgur.com/eI5SiVU.png)<br/>
[ERD](https://i.imgur.com/et9uPH6.png)<br/>



GET - find user/index/show
POST - create user/sign-in/create post
PATCH - update post/change-password
DELETE - delete post/sign-out/delete account??


Thursday -
- planning/review
- set up api template
- create repository 
- set up user sign-up/sign-in/sign-out
**bonus set up change password
Friday - 
- set up Beers resource
- set up create/index/show/delete/update
** bonus deploy
*** bonus bonus work on following schedule over the weekend
Monday - 
- planning/review
- set up browser template
- create repository
- set up user sign-up/sign-in/sign-out/change-password
- set up create/index/show/delete/update

Tuesday - 
- finish functionality
- deploy
- style
