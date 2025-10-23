import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const {
        cart,
        removeFromCart,
        fetchCart,
        checkoutCart,
        decreaseQuantity,
        addToCart: increaseQuantity, // renamed addToCart for clarity
    } = useContext(CartContext);

    const [total, setTotal] = useState(0);

    // Calculate total price whenever cart changes
    useEffect(() => {
        const sum = cart.reduce((acc, item) => acc + item.book.price * item.quantity, 0);
        setTotal(sum);
    }, [cart]);

    // Fetch cart on mount
    useEffect(() => {
        fetchCart();
    }, []);

    if (!cart.length) {
        return <div className="text-center mt-5 text-white">Your cart is empty</div>;
    }

    return (
        <div className="container my-4 text-white">
            <h2 className="mb-4">Your Cart</h2>
            <div className="row">
                {cart.map((item) =>
                    item.book && (
                        <div key={item.book._id} className="col-md-6 mb-3">
                            <div className="card bg-dark text-white border-secondary">
                                <div className="row g-0">
                                    <div className="col-4">
                                        <img
                                            src={item.book.image}
                                            alt={item.book.bookname}
                                            className="img-fluid rounded-start"
                                        />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.book.bookname}</h5>
                                            <p className="card-text mb-1">Author: {item.book.author}</p>
                                            <p className="card-text mb-2">Price: ${item.book.price}</p>
                                            <div className="d-flex align-items-center">
                                                <button
                                                    className="btn btn-secondary btn-sm me-2"
                                                    onClick={() => decreaseQuantity(item.book._id)}
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    className="btn btn-secondary btn-sm ms-2"
                                                    onClick={() => increaseQuantity(item.book._id, 1)}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm ms-3"
                                                    onClick={() => removeFromCart(item.book._id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className="text-end mt-4">
                <h4>Total: ${total.toFixed(2)}</h4>
                <button className="btn btn-success" onClick={checkoutCart}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
