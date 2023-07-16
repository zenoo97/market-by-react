import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>상품 상세 페이지 {id} 상품</h1>
    </div>
  );
};
export default ProductPage;
