// About: Node.js HTTP server with a root route and a JSON API endpoint.
// Run: `node implementation_node_js_server.js`, then open http://localhost:3000.

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node.js Server");
    return;
  }

  if (req.url === "/api/user") {
    const user = { id: 1, name: "Asha", course: "Web Development" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Not Found");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
