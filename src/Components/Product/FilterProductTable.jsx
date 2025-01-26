import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable() {
  const { products, filterText, inStock } = useSelector((state) => state.product);
  //console.log("Productos disponibles:", products); // Depuración

  return (
    <div>
      <SearchBar />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStock} />
    </div>
  );
}

export default FilterableProductTable;

