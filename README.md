
#  Grrrr'inder  

<img src="https://img.shields.io/badge/License-MIT-ff69b4.svg">

---
Grrrrr'inder is a pawsitively new way of connecting your furry friends with friends of their own. Here, you can set up doggy play dates with the click of a few buttons! As an owner, you must first create an account. Once that's done, you can create your pet's profile, add more dogs if they want to get in on the action as well, and ultimately reach out to another owner to set up your dog's pup play date. 

![loginpage](./public/assets/images/logingiphy.gif)

----
## Table of Contents 
  * [Getting Started](#getting-started)
  * [User Stories](#user-stories)
  * [Installation and Usage](#installation-and-usage)
  * [License](#license)
  * [Creators](#creators)
  * [Tests](#tests)
  * [Technologies](#technologies)
  * [Deployed Link](#deployed-link)
---

## Getting Started


This website was a collaborative effort for sure. It took plenty of communication, organization, flexibility and optimism to achieve our end result! Most of the members in our group have pets, and all of us are animal lovers. It was a no brainer when the idea of creating a dog play date website was mentioned! In order to transform our vision to reality, we had to first brainstorm on possible user stories to figure out the purpose of our website, and how we'd like it to work. 


---
## User Stories


	
Below are some of the user stories that helped guide our project. 

	1. The user can either log in or create a new account. 
	2. Once successfully logged in, the user can create a dog profile. 
	3. The user must add his or hers' furry friend's name, breed, gender, size, age, vaccination status, neuter or spayed status, temperament, preferred day and time of day to meet, zip code and picture. 
	4. The user can choose to add a comment about their dog while creating the dog's profile. 
	5. The user will be able to view the dog's profile. 
	6. The user will be able to match with another dog and send an email. 
	7. If the user has more than one dog, the user will be able to add another. 

Once our user stories were defined, we were then able to move on to the next step - creating it. 

---

## Installation and Usage


We used the MVC (Model-View-Controller) Framework to build out our application. In the back-end, we had to create a database, models and routes. 


<h2 align="left">Models</h2>


For our pup play date website, we had to set up three models:

+ Dog 
- Owner
+ Index 


<strong>Dog Model</strong>

The dog model was used to store information about the dog, that would be included in the dog's profile. This model had a few versions before ultimately deciding on the version you see below. This was one of the more important models, as it holds the information necessary for an owner to create the profile. 


<strong>Owner Model</strong>

The owner model was used to store the user information once they signed up. This model utilized bcrypt, the password-hashing npm package, to protect the user's information.  

<strong>Index Model</strong>

The index model served as one to bridge the relationships between the dog and owner models. An owner can have more than one dog, however a dog can only have one owner. 


<h2 align="left">Routes and Controllers</h2>


Once our server and models were created, we were able to move on and set up the routes. Within our 'Controller' folder, we created a 'Dog' route, 'Owner' route, 'Homepage' route and 'Index' route. 

<strong>Dog Route</strong>

The dog route utilizes four types of HTTP requests:

+ Get - Allows the user to either search all dogs, or search dogs based on specific search criteria. Figuring out this specific code was a bit tricky, but ultimately we were able to accomplish our goal by adding a 'where: query'. See the code below! (ENTER PICTURE OF CODE)

- Post - Allows the user to create a new profile and send a request for email contact. 

+ Put - Allows the user to update an existing dog profile. 

- Delete - Allows the user to delete the profile. 



<strong>Owner Route</strong>

The owner route utilizes three types of HTTP requests:

+ Get - Allows the user to search for all owners. 

- Post - Allows the user to create a new user account. When creating an account, a user will have to make a username and password, that is at least eight characters long. This HTPT request also allows a user to log in. 

+ Delete - Allows the user to delete the user account. 


<strong>Homepage Route</strong>

The homepage route utilizes the GET HTTP request, that allows the users to sign up, log in, create a profile, add a dog, match and meet and log out. 



<strong>Index Route</strong>


The index route served as one to bridge the 'dog' and 'owner' route together. 

After the routes were created, we tested them using Insomnia to confirm that our request was good.



<h2 align="left">Authentication</h2>

Since our application involves creating an account and inputting personal information, it was important and necessary to protect our users' data. In order to do this, we used the npm packages, express-session and bcrypt. Express-session installed middleware, and creates and manages our users session; while bcrypt hashes passwords securely. 


<h2 align="left">Views</h2>

For the front-end we utilized express Handlebars - this was the 'V' in the 'MVC' framework. Our handlebar files were separated in a folder of their own. CSS was linked to each sheet, and within these files, we were able to display the information we set up on the back-end, to display on the web-page. 

Since it was a profile, we also thought it was necessary for the owner to include a picture of their furry friend. On the back-end, in the 'dog' model, we actually created the code to not allow a null. This means that a user would not be able to create a profile if a photo was not submitted. In order to bring our vision to life, we utilized the api Cloudinary. This api allows it's users to submit a picture from their computer. See the picture below to see all of the options! 

CSS, mentioned above was also used to pull our entire look together. We used a drop-down effect so that when the user hovers over the menu button, the various places they can go to appears, and utilized colors that would be easy to read on screen, and look inviting! 

---
## Creators
  
+  Cassandre Beauzil : [Github](https://github.com/CassNoisette)
+  Olivia Daouphars : [Github](https://github.com/estilbee),
+  Samantha Davidson :[Github](https://github.com/SamanthaJaneDavidson)
+  Amy Lipscomb : [Github](https://github.com/AmyLipscomb)
+  Michele Tornetta : [Github](https://github.com/MicheleTornetta)
  ---

## License
```
This project is licensed under MIT.
```
---

## Tests

None.

 ---
 ## Technologies
* HTML
* CSS
* JavaScript
* MySQL
* Cloudinary
* Node.js
    * npm packages:
       * [dotenv](https://www.npmjs.com/package/dotenv)
       * [express](https://www.npmjs.com/package/express)
	  * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
	  * [express-session](https://www.npmjs.com/package/express-session)
	  * [inquirer](https://www.npmjs.com/package/inquirer)
       * [mysql2](https://www.npmjs.com/package/mysql2)
       * [sequelize](https://www.npmjs.com/package/sequelize)
	  * [bcrypt](https://www.npmjs.com/package/bcrypt)
	  * [nodemailer](https://www.npmjs.com/package/nodemailer)

        
* Insomnia
* Heroku 
* Screencatisfy
* VS Code
 ---

## Deployed Link

Our website was deployed via Heroku- [Grrrr'inder](https://floating-reef-00120.herokuapp.com/login). Thanks for taking the time to view our site! 