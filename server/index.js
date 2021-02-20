var app = require('./server.js');
var PORT = process.env.PORT || 7777;
// var PORT = process.env.PORT || 3000;

var PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}, visit: http://localhost:${PORT}`);
});
