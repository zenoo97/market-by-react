var http = require("http");
var hostname = "127.0.0.1";
// 도메인 주소에서 내부 IP, 즉 내 컴퓨터 주소를 의미한다.
var port = 8080;

const server = http.createServer((req, res) => {
  // 서버에 어떤 요청이 오든 이 콜백함수가 호출된다.
  const path = req.url;
  const method = req.method;

  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      //   js 오브젝트형 json을 보내주겠다는 것
      // end의 첫번 째 인자에는 string 형태를 보내야해서 배열을 string 형태로 바꿔준다.
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다.");
    }
  }
  res.end("Good bye");
});
server.listen(port, hostname);
console.log("grab market server on!");
// listen은 기다리고 있다는 것, 즉, port와 hostname로 요청을 기다리고 있겠다는 것
