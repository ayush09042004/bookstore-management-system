import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://srv-d3t82g9bh1hs73a9g6m0/api/v1/add", Data)
      .then((res) => alert(res.data.message));
    setData({
      bookname: "",
      author: "",
      description: "",
      price: "",
      image: "",
    });
  };

  console.log(Data);

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
            name="bookname"
            onChange={change}
            value={Data.bookname}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput2"
            className="form-label text-white"
          >
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter The Name Of Author"
            name="author"
            onChange={change}
            value={Data.author}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput3"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter Description Of The Book"
            name="description"
            onChange={change}
            value={Data.description}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput4"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="Enter The URL Of The Image"
            name="image"
            onChange={change}
            value={Data.image}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput5"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput5"
            placeholder="Enter The Price"
            name="price"
            onChange={change}
            value={Data.price}
          />
        </div>

        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
