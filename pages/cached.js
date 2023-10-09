import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';


const Cached = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cached data and update the state
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.search_results);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {/* Header */}
      <header>
        <h1>API Powered Product Search Results</h1>
        <h3>Cached Search for: Red Car Accessories</h3>
      </header>
 	 <Link href="/" className="back-to-home">Back to Home</Link>

      {/* Product List */}
      	<div id="product-list">
	  {products.map((product, index) => (
		<div className="product-cell" key={index}>
		  <h2 className="product-title">{product.title}</h2>
		  <img src={product.image} alt={product.title} className="product-img" />
		  {product.price && <p className="product-price">{product.price.raw}</p>}
		  <a href={product.link} target="_blank" rel="noopener noreferrer" className="buy-now-button" onClick={() => {
        	track('Buy Now', { product: product.title })
      	  }}>Buy Now</a>
		</div>
	  ))}
	</div>


      {/* Footer */}
      <footer>
        <p>&copy; 2023 Jacob.Guru. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Cached;
