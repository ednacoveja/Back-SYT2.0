const server = require('./api/app.js');
const { conn } = require('./api/db.js');

// Syncing all the models at once.
conn.sync({ force: true}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
