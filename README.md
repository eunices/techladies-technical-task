# Readme

Test

This is a technical task submission for TechLadies bootcamp by Eunice Soh.



The main feature of this app is a todo list. The todo list is populated by MongoDB hosted on mLabs, using Express and Mongoose. One can add tasks to the to-do list and it persists. However, any updates to the status of the todo items (isDone = true/false) do not persist.

Environment variables (such as DB URI) are stored in .env so that credentials are not revealed. Please email eunice.sjy@gmail.com for the .env file.

## Technical task

1. An About Me page with a few paragraphs describing who you are, why you want to be part of the TechLadies Bootcamp, and include one image (it can be a photo of yourself or anything you like (cats are always a good option!))
2. A To-Do page where a user can add to-do tasks to a list, update existing tasks, delete existing tasks, and mark tasks as done.
3. A navigation bar which allows you to navigate between the About Me and To-Do page.

Brownie Points:

- Database
- Deploy to Heroku

## Todos

I could not finish everything I planned out to do but the basic app is working. I wanted to persist the isDone everytime it is changed and also delete todos from the database.

1. HTML/CSS
    - Styling the page
    - ~~About me text~~
2. React
    - ~~Todo list react code~~
    - ~~Routes between React components~~
    - ~~Make API GET call to Express~~
    - ~~Make API POST call~~ (to add todos)
    - Make API POST call (to edit todo description)
    - Make API DELETE call (to delete tasks that are done)
3. Express
    - ~~Routing in Express~~
    - ~~Get/Post/Delete/Update APIs with MongoDB~~
    - ~~Store keys in environment variables~~
4. MongoDB & Mongoose
    - ~~Add data to MongoDB [3]~~
5. Hosting on Heroku
    - ~~Push app to Heroku [5] (resources: [here](https://originmaster.com/running-credfate-react-app-and-express-crae-on-heroku-c39a39fe7851))~~
6. ~~Finish Techladies application [6]~~

## Getting started

Pre-requisites: NodeJS

### Running locally

1. Type `git clone https://github.com/eunices/techladies-technical-task.git`
2. Change your directory to the repo
3. Type `npm install`
4. Type `npm start`
5. Go to `localhost:3001` on your browser
