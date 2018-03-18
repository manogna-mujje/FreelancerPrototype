# Freelancer Prototype website

This is a prototype model of Freelancer website developed using React.js/Redux in the frontend, Node.js in the backend and MySQL as a database.

## Functionalities:

Following functionalities have been implemented: 

Server:
a)
 1.  Sign up new user (Name, Email and password) 
 2.  Sign in existing user 
 3.  Sign out.  
 4.  Profile (Profile Image, Name, Email, Phone Number, About Me, skills) 
 5.  Users can update Profile anytime. To use the system, a user must login first to the system. Password must be encrypted. b) Post Project Functionality: 1. All Users can post project as an employer (Project Title, Project Description, File Upload, Skills Required, Budget Range) 
c)  Home  
  1. Users can see a list of all open projects. (Project Name, Description, Skills Required, Employer, Budget Range, Number of Bid yet, Bid Now) 
d)  Details View: 
  1. Project Details. (Project Name, Description, Files, Skills, Budget Range, Average Bid) 
  2. All users can bid on the project. (Bid, Period in days) 
  3. List of All bids. (Profile image, Freelancer Name, Bid Price, Period in days, Hire Button only visible to employer of project)       
e)  Dashboard  
  1. List of all projects you have bid on. (Project Name, Employer, Avg. Bid, your Bid, status of project) 

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/manogna-mujje/FreelancerPrototype.git
> cd FreelancerPrototype
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/manogna-mujje/FreelancerPrototype/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
