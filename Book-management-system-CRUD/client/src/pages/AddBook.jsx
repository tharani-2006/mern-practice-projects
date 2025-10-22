import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [book, setBook] = useState({ name: "", author: "", price: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({ ...book , [e.target.name] : e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:5000/book/add" , {
            method:"POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(book),
        })
        navigate("/")
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="name"
                    value={book.name}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <input
                    name="author"
                    placeholder="Author"
                    value={book.author}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <input
                    name="price"
                    placeholder="Price"
                    value={book.price}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddBook
