import './App.css';
import ProductsList from './components/ProductsList';
// import Product from './components/Product';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response)
        setFilteredProducts(response)
      })
      .catch((error) => console.error(error))
  }, [])

  function handleClick(productId) {
    const duplicate = currentSale.filter((product) => product.id == productId)
    if (duplicate.length !== 1) {
      const cartAdd = products.find((product) => product.id == productId)
      setCurrentSale([...currentSale, cartAdd])
    }
  }

  function showProducts(event) {
    const filter = products.filter((product) => {
      if (product.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return product
      }
    })
    setFilteredProducts(filter)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <p className="burger-logo">Burguer</p>
          <p className="kenzie-logo">Kenzie</p>
        </div>
        <div className="input-div">
          <input placeholder="Digitar Pesquisa" className="input" onChange={showProducts} type="text" />
          <button className="input-button" type="submit">Pesquisar</button>
        </div>
      </header>
      <div className="content-container">
        <main>
          <ProductsList products={filteredProducts} handleClick={handleClick} />
        </main>
        <section>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </section>
      </div>
    </div>
  );
}

export default App;
