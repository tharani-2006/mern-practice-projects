import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {

    const { id } = useParams()
    const [book, setBook] = useState({ name: "", author: "", price: "" })
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/book/update/${id}`)
            .then((res) => res.json())
            .then((data) => setBook(data))
    }, [id])

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:5000/book/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book),
        });
        navigate("/");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={book.name}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <input
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <input
                    name="price"
                    value={book.price}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditBook
