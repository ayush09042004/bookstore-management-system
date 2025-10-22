import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Fetch cart from backend
    const fetchCart = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            const res = await axios.get("http://localhost:3000/api/v1/cart", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCart(res.data.cart?.books || []);
        } catch (err) {
            console.log(err);
        }
    };

    // Add book to cart
    const addToCart = async (bookId, quantity = 1) => {
        const token = localStorage.getItem("token");
        if (!token) return alert("Login first");

        try {
            await axios.post(
                "http://localhost:3000/api/v1/cart/add",
                { bookId, quantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchCart(); // Fetch updated cart after adding
        } catch (err) {
            console.log(err);
        }
    };

    // Remove book from cart
    const removeFromCart = async (bookId) => {
        console.log("Remove clicked for:", bookId);
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            await axios.delete(
                `http://localhost:3000/api/v1/cart/remove/${bookId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchCart(); // Fetch updated cart after removing
        } catch (err) {
            console.error("Error removing book:", err.response?.data?.message || err.message);
        }
    };

    // Checkout cart
    const checkoutCart = async () => {
        const token = localStorage.getItem("token");
        if (!token) return alert("Login first");

        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/cart/checkout",
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert(`Checkout successful! Total: $${res.data.total}`);
            fetchCart(); // Refresh cart after checkout
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Checkout failed");
        }
    };
    // Decrease quantity of a book
    const decreaseQuantity = async (bookId) => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            await axios.patch(
                `http://localhost:3000/api/v1/cart/decrease/${bookId}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchCart(); // refresh cart after decreasing
        } catch (err) {
            console.error("Error decreasing quantity:", err.response?.data?.message || err.message);
        }
    };


    useEffect(() => {
        fetchCart(); // Fetch cart on mount
    }, []);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            fetchCart,
            checkoutCart,
            decreaseQuantity // ✅ include this so Cart.jsx can use it
        }}>
            {children}
        </CartContext.Provider>
    );

};
