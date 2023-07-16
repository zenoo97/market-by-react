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
  console.log(product);
  return <h1>상품 상세 페이지 {id}</h1>;
};
export default ProductPage;
