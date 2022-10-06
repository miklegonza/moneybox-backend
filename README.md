# Simple Persistence API with NodeJS and Express

This is [moneybox's](https://github.com/samirZapata/moneybox) backend application that connects to a MariaDB database built with NodeJS and Express framework.

## Pre-requisites

-   [NodeJS](https://nodejs.org/en/)
-   [MariaDB 10.9.3](https://mariadb.org/download/)

## Getting started

-   Clone the repository

```bash
git clone https://github.com/miklegonza/moneybox-backend.git
```

-   Install dependencies

```bash
cd moneybox-backend
npm install
```

-   Create the database with the SQL Script under the `db-script/` folder

-   Create a new file named **.env** and add the following structure

    -   These will be the environmet variables used for connecting with the database. Fill them with your host info

```
DB_HOST = localhost
DB_USER = your-user
DB_PASS = your-password
DB_NAME = moneybox

PORT = 3000
```

-   Run

```bash
npm start
```

-   Test

```bash
npm test
```

Now you can use the API

## Overview

| Method | URL           | Action                                   |
| ------ | ------------- | ---------------------------------------- |
| GET    | /main         | get 'Hello world' to prove that it works |
| GET    | /usuarios     | get all users                            |
| POST   | /usuarios     | add new user                             |
| PUT    | /usuarios/:id | update user by `id`                      |
| DELETE | /usuarios/:id | remove user by `id`                      |

## Project Structure

| Name             | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| db-script/db.sql | SQL Script to create the Database                                    |
| index.js         | Entry point to Express app                                           |
| src/configs      | Configuration files like db connection                               |
| src/controllers  | Middle points between the HTTP requests and the SQL statements logic |
| src/middlewares  | Additional bussiness logic                                           |
| src/models       | Objects created to manage db data                                    |
| src/routes       | Routes of the HTTP requests                                          |
| src/services     | DB connection and SQL statements                                     |
| src/utils        | Classes to assist some functionalities                               |
| test             | Folder dedicated to unit tests                                       |
| package.json     | Contains npm dependencies                                            |
