import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate, Link} from 'react-router-dom'

const HomePage = (props) => {
    const {beers, setBeers} = props
    const [brand, setBrand] = useState("")
    const [name, setName] = useState("")
    const [style, setStyle] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/allBeers')
            .then(res => setBeers(res.data))
            .catch(err => console.log(err))
    }, [])
    
    const onBeerAddHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost/api/addBeer', {
            brand,
            name,
            style
        })
    }

    return(
        <div>
            <h1>Homepage Placeholder</h1>
            <h2>Map through all beers in cards</h2>
            <Link to={`/api/addBeer`} className='link'>Add a beer!</Link>
            <div>
                {/* need to finish this form first thing, get beer attributes going, set style as text input and attributes as a select option */}
                <form onSubmit={onBeerAddHandler}>
                    <h3>What beer are you drinking tonight?</h3>
                    <p>
                        <label>Brand:</label>
                        <input type='text' onChange = {e => setBrand(e.target.value)}/>
                    </p>
                    <p>
                        <label>Name:</label>
                        <input type='text' onChange = {e => setName(e.target.value)}/>
                    </p>
                    <p>
                        <label>Style:</label>
                        <select onChange={e => setStyle(e.target.value)}>
                            
                        </select>
                    </p>
                    <input type='submit' value='Add beer'/>
                </form>
            </div>
        </div>
    )
}

export default HomePage