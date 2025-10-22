import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";


const ViewBooks = () => {

    const [books,setBooks] = useState([])

    const fetchBooks = async () => {
        const res = await fetch("http://localhost:5000/book")
        const data = res.json()
        setBooks(data)
    }

    const deletebook = async ( _id ) => {
        await fetch(`http://localhost:5000/book/delete/${_id}` ,{
            method : "DELETE",
        })
        fetchBooks();
    }

    useEffect(() => {
        fetchBooks()
    },[])

    return (

        <div style={{ padding: "20px" }}>

            <h2>Book List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((b) => (
                        <tr key={b._id}>
                            <td>{b.name}</td>
                            <td>{b.author}</td>
                            <td>{b.price}</td>
                            <td>
                                <Link to={`/update/${b._id}`}>Edit</Link>
                                <button onClick={ () => deletebook(b._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewBooks
