import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">BiLink Shop</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
          </Routes>
        </main>

        <footer>Footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
