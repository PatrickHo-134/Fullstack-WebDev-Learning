https://medium.com/@olinations/build-a-crud-template-using-react-bootstrap-express-postgres-9f84cc444438

// set up back end
npm init -y
npm install express body-parser pg knex dotenv helmet cors morgan
npm install nodemon --save-dev

// in package.json replace the “main” line with…
	“main”: “server.js”,
“start”: “nodemon server.js”

// add server.js
