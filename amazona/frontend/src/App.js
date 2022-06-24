import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">BiLink Shop</a>
      </header>

      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a className="product-name" href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add To Card</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
