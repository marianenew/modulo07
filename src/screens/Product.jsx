import { useSelector } from 'react-redux';
import FiltertableProductTable from '../Components/Product/FilterProductTable';

const Product = () => {
  // Accede al estado de productos desde Redux
  const products = useSelector((state) => state.product.products);

  return (
    <>
      <p>Component product</p>
      <div>
        <h1>Product Inventory</h1>
        {/* Pasa los productos al componente */}
        <FiltertableProductTable products={products} />
        
      </div>
    </>
  );
};

export default Product;
