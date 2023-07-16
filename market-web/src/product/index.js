import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://dee06ecd-a7c5-42dd-9d57-13540a6fe98e.mock.pstmn.io/products/${id}`
      )
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (product === null) {
    // 방어코드
    // 처음에 state가 null이므로 null.imageUrl은 없으므로, product가 null일 때 실행시키는 코드
    return <h1>상품 정보를 받고 있습니다....</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt="" />
      </div>
      <div id="profile-box">
        <img src="/images (2)/images/icons/avatar.png" alt="" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
};
export default ProductPage;
