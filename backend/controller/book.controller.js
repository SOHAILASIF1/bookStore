import Book from "../models/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch the books from the database
        res.status(200).json(books); // Send the fetched books as the response
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
