const RED = require("node-red");
const http = require("http");

// Tạo server HTTP
const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("Node-RED is running");
});

const settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "./node-red-data", // Nơi lưu trữ dữ liệu của Node-RED
  functionGlobalContext: {}, // Đặt các biến toàn cục nếu cần
};

// Khởi động Node-RED
RED.init(server, settings);

// Bắt đầu server HTTP
server.listen(2000);

// Khởi động giao diện web và các nút của Node-RED
RED.start();
