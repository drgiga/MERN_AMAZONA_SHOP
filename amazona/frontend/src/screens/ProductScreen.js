import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <strong>{slug}</strong>
    </div>
  );
}

export default ProductScreen;
