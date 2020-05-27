const express = require("express");

const schema = require('./schema');

const expressGraphQL = require('express-graphql');

const PORT = 4000;

const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql: true // Enables us to use GraphQL IDE
}))

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
