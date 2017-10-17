const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const http = require("http").Server(app);

//chat requirements:
const io = require("socket.io")(http);

//route handler is defined that gets called when we hit our dashboard page
// app.get("/", function(req, res) {
// 	//sending Socket component to server
// 	res.sendFile(__dirname + "/Socket");
// });

//sending a message to everyone using io.emit
io.emit('some event', { for: 'everyone' });

//listening on the connection event for incoming sockets and logging to the 
//console
io.on("connection", function(socket) {
	socket.on("chat message", function(msg) {
		//sending message to everyone including the sender
		io.emit("chat message", msg);

		console.log("message: " + msg);	

	});
	console.log('a user connected');
	//firing a disconnect event
	socket.on("disconnect", function(){
		console.log("user disconnected");
	});
//------Chat code ends-------


// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3",
  {
    useMongoClient: true
  }
);

var db = mongoose.connection;
// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



