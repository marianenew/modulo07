import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setInStock } from '../../store/features/product/productSlice.js';

function SearchBar() {
  const dispatch = useDispatch();
  const { filterText, inStock } = useSelector((state) => state.product);

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={() => dispatch(setInStock())}
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;

