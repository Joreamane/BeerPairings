import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate, Link} from 'react-router-dom'

const HomePage = (props) => {
    const {beers, setBeers} = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/allBeers')
            .then(res => setBeers(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h1>Homepage Placeholder</h1>
            <h2>Map through all beers in cards</h2>
            <Link to={`/api/addBeer`} className='link'>Add a beer!</Link>
        </div>
    )
}

export default HomePage