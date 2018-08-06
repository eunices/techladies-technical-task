# Readme

This is a technical task submission for TechLadies bootcamp by Eunice Soh.

## Technical task

1. An About Me page with a few paragraphs describing who you are, why you want to be part of the TechLadies Bootcamp, and include one image (it can be a photo of yourself or anything you like (cats are always a good option!))
2. A To-Do page where a user can add to-do tasks to a list, update existing tasks, delete existing tasks, and mark tasks as done.
3. A navigation bar which allows you to navigate between the About Me and To-Do page.

Brownie Points:

- Database
- Deploy to Heroku

## Todos

1. HTML/CSS
    - Styling the page
    - ~~About me text~~
2. React
    - ~~Todo list react code~~
    - ~~Routes between React components~~
    - ~~Make API GET call to Express~~
    - ~~Make API POST call~~ (to add todos)
    - Make API POST call (to edit todo description)
    - Make API DELETE call
3. Express
    - ~~Routing in Express~~
    - ~~Get/Post/Delete/Update APIs with MongoDB~~
    - ~~Store keys in environment variables~~
4. MongoDB & Mongoose
    - ~~Add data to MongoDB [3]~~
5. Hosting on Heroku
    - ~~Push app to Heroku [5] (resources: (here)[https://originmaster.com/running-create-react-app-and-express-crae-on-heroku-c39a39fe7851])
6. ~~Finish Techladies application [6]~~

## Getting started

Pre-requisites: nodejs

1. Git clone https://github.com/eunices/techladies-technical-task.git
2. Get to the root directory of the repo
3. Type `npm install`
4. Type `npm start`. A browser window for http://localhost:3000 should launch.

## Deployment

Both strategies failed. They only work locally.

### Strategy 1 (which did not work out)
App (React) https://eunix-todo.herokuapp.com/ | Express https://safe-plains-22118.herokuapp.com/

Problem: The React app was not able to communicate with the Express app.

### Strategy 2 (which also did not work out too)
Even after following the tutorial (here)[https://originmaster.com/running-create-react-app-and-express-crae-on-heroku-c39a39fe7851])
React + Express https://es-todo.herokuapp.com/ 

Problem: the app just kept crashing. Error message from `heroku logs --tail`:

```
2018-08-06T14:12:18.922434+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=es-todo.herokuapp.com request_id=2109d375-0006-4070-ac8b-044702925578 fwd="182.55.76.6" dyno= connect= service= status=503 bytes= protocol=https
2018-08-06T14:12:20.304545+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=es-todo.herokuapp.com request_id=829451de-fa7f-44bf-b5ec-19051e2d7b4b fwd="182.55.76.6" dyno= connect= service= status=503 bytes= protocol=https
```