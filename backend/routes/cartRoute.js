const router = require("express").Router();
const Cart = require("../models/cartModel");
const auth = require("../middleware/auth");
const Book = require("../models/booksModel");

// Add book to cart
router.post("/add", auth, async (req, res) => {
    const userId = req.user.id;
    const { bookId, quantity = 1 } = req.body;

    if (!bookId) return res.status(400).json({ message: "BookId is required" });

    try {
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, books: [{ book: bookId, quantity }] });
        } else {
            const existing = cart.books.find(b => b.book.toString() === bookId);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.books.push({ book: bookId, quantity });
            }
        }

        await cart.save();

        // Populate books before sending
        const populatedCart = await Cart.findById(cart._id).populate({
            path: "books.book",
            select: "bookname author price image"
        });

        res.status(200).json({ message: "Book added to cart", cart: populatedCart });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Get user's cart
router.get("/", auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate({
            path: "books.book",
            select: "bookname author price image"
        });
        res.status(200).json({ cart });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Remove book from cart
// Remove one quantity of a book from cart
router.delete("/remove/:bookId", auth, async (req, res) => {
    const userId = req.user.id;
    const { bookId } = req.params;

    try {
        let cart = await Cart.findOne({ user: userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        // Find the book in cart
        const bookItem = cart.books.find(b => b.book._id.toString() === bookId);
        if (!bookItem) return res.status(404).json({ message: "Book not in cart" });

        if (bookItem.quantity > 1) {
            // Reduce quantity by 1
            bookItem.quantity -= 1;
        } else {
            // Remove book if quantity is 1
            cart.books = cart.books.filter(b => b.book._id.toString() !== bookId);
        }

        await cart.save();
        res.status(200).json({ message: "Book quantity updated", cart });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Decrease quantity by 1
router.patch("/decrease/:bookId", auth, async (req, res) => {
    const userId = req.user.id;
    const { bookId } = req.params;

    try {
        let cart = await Cart.findOne({ user: userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const bookItem = cart.books.find(b => b.book._id.toString() === bookId);
        if (!bookItem) return res.status(404).json({ message: "Book not in cart" });

        if (bookItem.quantity > 1) {
            bookItem.quantity -= 1;
        } else {
            cart.books = cart.books.filter(b => b.book._id.toString() !== bookId);
        }

        await cart.save();
        res.status(200).json({ message: "Book quantity updated", cart });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Checkout cart
router.post("/checkout", auth, async (req, res) => {
    const userId = req.user.id;

    try {
        const cart = await Cart.findOne({ user: userId }).populate("books.book");
        if (!cart || cart.books.length === 0)
            return res.status(400).json({ message: "Cart is empty" });

        // Calculate total
        const total = cart.books.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

        // Clear the cart
        cart.books = [];
        await cart.save();

        res.status(200).json({ message: "Checkout successful", total });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;
