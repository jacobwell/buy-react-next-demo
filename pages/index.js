import { useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading spinner

  async function handleSearch() {
    setIsLoading(true); // Show the loading spinner

    const apiKey = 'redacted';
    const apiType = 'search';
    const amazonDomain = 'amazon.com';
    const apiUrl = 'https://api.rainforestapi.com/request';

    const searchUrl = `${apiUrl}?api_key=${apiKey}&type=${apiType}&amazon_domain=${amazonDomain}&search_term=${searchTerm}`;

	track('Product Searched', { product: searchTerm });
	
    try {
      const res = await fetch(searchUrl);
      const data = await res.json();
      
      if (data && data.search_results) {
        setProducts(data.search_results);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Hide the loading spinner
    }
  }
  
  return (
    <div>
      <header>
        <h1>API Powered Product Search Results</h1>

        <div className="search-container">
          <input 
            type="text" 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className="search-input"
          />
         <button className="search-button" onClick={handleSearch}>
  			<i className="fa fa-search"></i>
		</button>

        </div>
      </header>

        <Link className="back-to-home" href="/about">How It Works</Link>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="loading-spinner">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      )}

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


      <footer>
        <p>&copy; 2023 Jacob.Guru. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
