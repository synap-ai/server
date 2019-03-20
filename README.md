# Synap.ai Application Server

Built using the [Apollo Express PostgreSQL Boilerplate](https://github.com/the-road-to-graphql/fullstack-apollo-express-postgresql-boilerplate)

## Installation

* `touch .env`
* `npm install`
* fill out *.env file* (see below)
* start PostgreSQL database
* `npm run watch`
* visit `http://localhost:8000` for GraphQL playground

#### .env file

```
DATABASE=mydatabase

DATABASE_USER=postgres
DATABASE_PASSWORD=postgres

SECRET=asdlplplfwfwefwekwself.2342.dawasdq
```

The `SECRET` is just a random string for your authentication. Keep all these information secure by adding the *.env* file to your *.gitignore* file. No third-party should have access to this information.

#### Testing

* adjust `test:run-server` npm script with `TEST_DATABASE` environment variable in package.json to match your testing database name
  * to match it from package.json: `createdb mytestdatabase` with psql
* one terminal: npm run test:run-server
* second terminal: npm run test:execute-test
