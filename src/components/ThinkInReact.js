import React from 'react'

/**
 * App
 */
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: 'ball', 
      inStockOnly: true
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange(filterText) {
    console.log(filterText)
    this.setState({
      filterText
    })
  }

  handleInStockChange(inStockOnly) {
    // console.log(inStockOnly)
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    const {inStockOnly, filterText} = this.state
    const {products} = this.props

    return (
      <div>
        <SearchBar 
          inStockOnly={inStockOnly}
          filterText={filterText}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable 
          products={products}
          inStockOnly={inStockOnly}
          filterText={filterText}
        />
      </div>
    )
  }
}

export default FilterableProductTable

/**
 * 接受用户输入
 */
const SearchBar = ({inStockOnly, filterText, onFilterTextChange, onInStockChange}) => {
  const handleFilterTextChange = (e) => 
    onFilterTextChange(e.target.value)

  const handleInStockChange = (e) => 
    onInStockChange(e.target.checked)

  return (
    <form>
      <input 
        type="text" 
        placeholder="Search..." 
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={handleInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}

/**
 * 展示数据结果
 */
const ProductTable = ({products, inStockOnly, filterText}) => {
  let lastCategory = null
  let rows = []

  products.filter(product => !inStockOnly || product.stocked)
    .filter(product => product.name.indexOf(filterText) !== -1)
    .forEach((product) => {
    if (product.category !== lastCategory) {
      lastCategory = product.category
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    )
  })
  // rows = rows.filter(product => product.stocked)
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
  )
}

const ProductCategoryRow = ({category}) => 
  <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>

const ProductRow = ({product}) => {
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}