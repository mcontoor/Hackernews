# MileStone 6 : Hackers read news too you know 

Woohoo! Look like we're doing some read web app development now. Isn't this a lot more fun!? Working with actual pages and interactivity and users and profiles and databases and bugs and errors and crashes (OK! Maybe the last 3 aren't that fun). 

With this MS, we will be building a fully featured webapp. What we will build is a clone of the [Y Combinator](http://www.ycombinator.com/)'s news site [HackerNews](http://news.ycombinator.com/)

## Teams

Sinatra: Rahul Korada & Vigneshwar Balakrishnan & Vijay Boosa
Django: Ben Sooraj M & Vamshidhar Reddy & Narayan Siddahrth 
Rails: Deepinder Singh & Akshay Reddy & Rahul Dronamraju & Ravi Kumar Reddy

## Release 0 : Break it! 

Just explore the site and observe the functionality. Here are some questions to ask yourself:

- What all can you do on the site? 
- What does the Homepage look like? 
- Does it have an option to login? 
- What functionality gets added if you login?
- What's the MVC for this app? 
- What pages do we need to create? What are the routes attached to these pages? 
And so on.... 

Break down your product into versions. Remember go as small as you can and build that thing and then build from there. 

## Release 1 : Routes, please? 

Think of all the routes you will need to build for this to work. Also think of the Database Models, tables and structure you will need. Are any of the tables linked? Should they be? How will you design this? 

## Release 2 : Putting everything together
Look at how certain events trigger certain calls on the back end. 

For e.g. If you type a comment and click Submit, it should store the comment in the DB. If you click on the UpVote button, it should increase votes of the Post by 1 and reflect this information for everyone visiting the site. 

## Release 3 : Login
For this app, we're not going to encrypt our login. We will just take the username and password that the user sets while Registering and store that in the Database (**Note**: Never ever, ever, ever in your life do this! We're doing this only to keep it less complex). When the user tries to login, we should verify if the user has indeed input the right password and if that matches the on in our DB. Only if it does can the user login, else it should give an error. 

## Release 4 : Users!
Since we have login now, there will be events related to specific users. How are we storing that information? 

For e.g. User A up votes a particular link. That should increase the votes of the link. User B comments on a post, the post should show User B's comment when other users come to the same post etc etc

## Release 5 : Nested Comments 
HN follows [Reddit](https://youreallythoughtiwouldlinktoreddit.wtf) style of nested comments. What do these mean? How are they different from normal comments? How can we implement these? 

Finally, don't forget to test everything all the time. You don't want to be stuck in a situation where the solution for one problem leads to 2 other problems!



