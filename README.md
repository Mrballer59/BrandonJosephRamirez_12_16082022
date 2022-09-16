![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![made-with-react-rooter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

# SportSee - Front end

## 1. Project

This project is a front end project.SportSee is a startup dedicated to sports coaching. The profile page is a dashboard of diffrents users. The goal of the project is to create the dashboard displaying sport informations (session duration, weight, activity...) of the user in multiples charts.
For the technical side, the goal is to use API and mocked data (used in a switch system) to deliver the user data to the user's page rendered in various charts (from the recharts library).

## 2. Prerequisites

### Tools

- [NodeJS(16.13.1)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [yarn](https://yarnpkg.com/)

## 3. Install project

### 3.1 With Micro API

#### Backend

- Fork the [Backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) repository
- Clone it on your computer.
- Use the`npm install command` to install all the dependencies.
- The `npm start ` command will allow you to run the micro API.
- The back end will run at port 3000.

#### Frontend

- Clone this repository.
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the app.
- The front end will run at port 3001.

### 3.2 With mocked data

#### Frontend only

- Clone this repository.
- You can switch data from API to Mocked data in the DataContext.js in the data folder file by changing:
- const path = "http://localhost:3000" to const path = "http://localhost:3001"
- This will run an error and fechtes the mocked data instead of the API data from the Back.

#### JSdoc

- You can also run the jsdoc by opening docs/index.html file in Live Server.

#### About

- when starting the project remember to use the correct path by adding /users/12 or /users/18 to view the charts depending on what you want to see ( mocked API or Real API)
- Example http://localhost:3001/user/12

### 4. Author

Brandon JOSEPH RAMIREZ
