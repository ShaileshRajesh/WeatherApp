const path = require('path');

const httpServer = require('http-server');

(async () => {
  const open = (await import('open')).default;

  const outputDir = path.resolve(__dirname, '../../docs');

  const server = httpServer.createServer({root: outputDir});
  server.listen(5005, () => {
    open('http://localhost:5005');
  });
})();
