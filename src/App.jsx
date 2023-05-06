import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  const hamdleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value; 
    const email = form.email.value;
    const user = { name, email };

    console.log(user)


    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(`insie post respnde`, data)
        const newUser  =[...user, data]
        setUser(newUser);
        form.reset();
      })


  }

  return (
    <>
      <h1>User Management System</h1>
      <h3>Number of user : {user.length}</h3>
      <form onSubmit={hamdleSubmit}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="submit" />
      </form>
      <div>
        {
          user.map(m => <p key={m.id}>{m.id} : {m.name} : {m.email}</p>)
        }
      </div>
    </>
  )
}

export default App
