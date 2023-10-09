// components/Header.js
export default function Header() {
  return (
    <header>
      <h1>API Powered Product Search Results</h1>
      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search for products..." />
        <button id="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
}
