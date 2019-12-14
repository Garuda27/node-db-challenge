const server = require('./api/server');

   PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`\nServer listening on port ${PORT}...\n`);
});
