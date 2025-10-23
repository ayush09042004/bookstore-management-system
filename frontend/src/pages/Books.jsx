import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "../components/BooksSection";

const Books = () => {
  const [Data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [filter, setFilter] = useState("");

  const BASE_URL = "https://bookstore-management-system-backend.onrender.com";

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/books/getBooks`);
        setData(res.data.books);
        setSortedData(res.data.books);
      } catch (err) {
        console.log("Error fetching books:", err);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    let sorted = [...Data];
    if (filter === "priceLow") sorted.sort((a, b) => a.price - b.price);
    else if (filter === "priceHigh") sorted.sort((a, b) => b.price - a.price);
    else if (filter === "newest") sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setSortedData(sorted);
  }, [filter, Data]);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh", paddingTop: "80px" }}>
      {/* Filter Bar */}
      <div className="d-flex justify-content-between align-items-center py-3 px-4 filters-bar">
        <h4 className="text-white">Books Section</h4>
        <select
          className="form-select filter-item"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Sort / Filter</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="newest">Newly Added</option>
        </select>
      </div>

      {/* Books List */}
      {sortedData.length ? (
        <BooksSection data={sortedData} />
      ) : (
        <div className="text-white text-center py-5">Loading...</div>
      )}
    </div>
  );
};

export default Books;
