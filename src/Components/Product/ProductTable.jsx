import PropTypes from 'prop-types'; // Importa PropTypes
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  if (!Array.isArray(products)) {
    console.error("Error: 'products' no es un arreglo:", products);
    return <div>No hay productos disponibles</div>;
  }

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
    if (inStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// Agrega validación de props con PropTypes
ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stocked: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
};

export default ProductTable;
