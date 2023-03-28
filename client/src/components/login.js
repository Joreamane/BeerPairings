import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    // const [ message, setMessage ] = useState('...Loading')
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const navigate = useNavigate()

    const onRegisterHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            firstName,
            lastName,
            email,
            password
        })
            .then(res=>{
                console.log(res)
                console.log(res.data)
            })
            .catch(err => console.log(err))
        navigate('/api/homepage')
    }

    const onLoginHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email,
            password
        })
            .then(res=>{
                console.log(res)
                console.log(res.data)
            })
            .catch(err=> console.log(err))
        navigate('/api/homepage')
    }


    return(
        <>
        <div>
            <h2>Hello</h2>
        </div>
        <div className='formContainer'>
        <form onSubmit={onRegisterHandler}>
            <h3>First time here?</h3>
            <h5>Please register!</h5>
            <p>
                <label>First Name</label><br/>
                <input type='text' onChange = {e=> setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type='text' onChange = {e=> setLastName(e.target.value)}/>
            </p>
            <p>
                <label>Email</label><br/>
                <input type='text' onChange = {e=> setEmail(e.target.value)}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input type='password' onChange = {e=> setPassword(e.target.value)}/>
            </p>
            <input type='submit'/>
        </form>
        <form onSubmit={onLoginHandler}>
            <h3>Returning user?</h3>
            <h5>Please Login</h5>
            <p>
                <label>Email</label><br/>
                <input type='text' onChange = {e=> setEmail(e.target.value)}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input type='password' onChange = {e=> setPassword(e.target.value)}/>
            </p>
            <input type='submit'/>
        </form>
        </div>
        </>
    )
}

export default LandingPage