import './App.css'
import React, { useState } from 'react'
import LoginForm from './components/Loginform'
import AfterLoginForm from './components/AfterLoginForm'
import ForImage from './components/ForImage'

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  }

  const [user, setUser] = useState({
    username: '',
    email: '',
  })
  const [error, setError] = useState('')

  const Login = (details) => {
    // console.log(details)
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      // console.log('logged in')
      setUser({
        username: details.username,
        email: details.email,
        // password: details.password
      })
    } else {
      setError('Details do not match')
      console.log('Details do not match')
    }
  }
  const AfterLogin = (afterLoginDetails) => {
      setUser({
        name: afterLoginDetails.name,
        dob: afterLoginDetails.dob,
        religion: afterLoginDetails.religion,
        height: afterLoginDetails.height,
      })
    
  }

  const Logout = () => {
    console.log('Logout')
    setUser({
      username: '',
      email: '',
    })
  }


  return (
    <div className="App">
      {user.email != '' ? (
        <div className="welcome">
          <ForImage/>
          <h2>
            Welcome ,<span> {user.username}</span>
          </h2>
          <AfterLoginForm AfterLogin={AfterLogin}/>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

export default App
