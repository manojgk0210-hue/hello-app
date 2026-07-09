const http = require('http');
const PORT = process.env.PORT || 8080;

const html = `<!DOCTYPE html>
<html>
<head>
  <title>Hello from Ansible</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
    }
    .card {
      background: rgba(255,255,255,0.1);
      padding: 40px 60px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    h1 { font-size: 2.5rem; margin-bottom: 10px; }
    p { opacity: 0.85; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World 👋</h1>
    <p>Deployed automatically with Ansible</p>
    <p>Server: ${require('os').hostname()}</p>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
