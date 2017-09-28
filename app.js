const express = require('express');
const app = express();

const db = require('./db').db;
const teacherRoute = require('./routes/teachers')
const studentRoutes = require('./routes/student')
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks')
const morgan = require('morgan')

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let PORT = 8080;

app.use('/teacher', teacherRoute)
app.use('/student', studentRoutes)


app.get("/", (req, res, next) => {
	// Visit http://localhost:8080/test to see the message!
	res.send("Hello GET Route!")
})
/* 
 Your Route Code Here
*/

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});


db.sync({force: false})
.then(() => {
	console.log('db synced')
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
});