import {useState} from "react"

function Login(){

    const [form,setForm] = useState({name : "",email : "",password : ""})
    const [message,setMessage] = useState("")

    const handleChange = (e) => {
        setForm({ ...form , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/login" , {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(form)
        })

        const data = await res.json()
        setMessage(data.message)
        
        setForm({email: "",password: ""})
    }

    return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <input name="password" type="password" value={form.password} placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );

}

export default Login