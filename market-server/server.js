const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8080;

app.use(express.json());
// express의 app에 대한 설정을 해준다.
// express 서버에서도 json 형식의 데이터를 사용해서 정보를 전달
app.use(cors());
// 모든 브라우저에서 서버에게 요청할 수 있다.
app.get("/products", (req, res) => {
  // method가 get 요청이 왔을때, 이쪽 코드가 실행된다는 것
  //   이곳에 상품 정보를 넣을 것
  models.Product.findAll({
    // limit: 2,
    // 2개만 조회할 수 있도록 제한
    order: [["createdAt", "DESC"]],
    // 정렬: 생성된 시간을 기준으로 내림차순으로 정렬
    attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl"],
    // 어떤 컬럼을 가져올 것인지 설정하는 것
  })
    // 조회하는 방법
    .then((result) => {
      console.log(`Products: ${result}`);
      res.send({
        product: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("에러 발생");
    });
});
app.post("/products", (req, res) => {
  const body = req.body;
  // body에 데이터를 담는 부분은 req.body로 접근이 가능하다.
  // body에 데이터가 담긴다.
  const { name, description, price, seller } = body;
  if (!name || !description || !price || !seller) {
    res.send("모든 필드를 입력해주세요.");
  }

  models.Product.create({
    // Product 테이블에 이 안에 있는 객체를 생성하겠다는 뜻.
    // name, description, price, seller로 넣을수도 있다.
    name: name,
    description: description,
    price: price,
    seller: seller,
  })
    .then((result) => {
      console.log(`상품 생성 결과: ${result}`);
      res.send({
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("상품 업로드에 문제가 발생했습니다.");
    });
});
//   받은 데이터를 바로 보내주는 로직 작성

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id, eventId } = params;
  models.Product.findOne({
    where: {
      id: id,
    },
  })
    .then((result) => {
      console.log(`PRODUCT: ${result}`);
      res.send({
        product: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("상품 조회에 에러가 발생했습니다.");
    });
});

app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
  models.sequelize
    .sync()
    // 즉, models 폴더에 있는 파일을 db와 동기화 시켜서 db에서 상품과 관련된 테이블을 만들어줘서 동기화를 시켜주는 것
    .then(() => {
      console.log("DB 연결 성공");
    })
    .catch((err) => {
      console.log("DB 연결 에러 ㅠ");
      process.exit();
      // 서버 실행할 때, 계속 서버가 리슨을 하는데, db가 연결이 안되면 api 서버로써 의미가 없기 때문에 프로세스를 종료 시키겠다는 것.
    });
});
