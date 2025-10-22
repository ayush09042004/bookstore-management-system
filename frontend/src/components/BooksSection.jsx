import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const BooksSection = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState(""); // selected option from dropdown
  const [category, setCategory] = useState("all");

  const { addToCart } = useContext(CartContext); // <-- Cart context

  const categories = ["all", ...new Set(data.map(book => book.category || "Other"))];

  useEffect(() => {
    let temp = [...data];

    // Filter by category
    if (category !== "all") temp = temp.filter(book => (book.category || "Other") === category);

    // Sorting based on dropdown
    if (filter === "priceLow") temp.sort((a, b) => a.price - b.price);
    else if (filter === "priceHigh") temp.sort((a, b) => b.price - a.price);
    else if (filter === "newest") temp.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setFilteredData(temp);
  }, [filter, category, data]);

  return (
    <div className="container my-4">
      {/* Filter Bar */}
      <div className="filters-bar d-flex flex-wrap align-items-center justify-content-between mb-3 p-2">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select filter-item">
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="form-select filter-item">
          <option value="">Sort / Filter</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="newest">Newly Added</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="row">
        {filteredData.map(book => (
          <div key={book._id} className="col-md-3 mb-4">
            <div className="card h-100 bg-dark text-white">
              <div className="img-container">
                <img src={book.image} alt={book.bookname} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{book.bookname}</h5>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Price: ${book.price}</p>
                <p className="card-text">Category: {book.category || "Other"}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => addToCart(book._id, 1)}
                >
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
