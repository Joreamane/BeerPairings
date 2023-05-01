import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate, Link} from 'react-router-dom'

const HomePage = (props) => {
    const {styles, setStyles} = props
    const {beers, setBeers} = props
    const [brand, setBrand] = useState("")
    const [name, setName] = useState("")
    const [style, setStyle] = useState("")
    const [beerAPI, setBeerAPI] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/allBeers')
            .then(res => setBeers(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allStyles')
            .then(res => setStyles(res.data))
            .catch(err => console.log(err))
    })

    useEffect(()=> {
        axios.get('https://api.untappd.com/v4')
            .then(res => {
                return res.data
            })
            .then(res => {
                setBeerAPI({
                    untappd: res.results
                })
            })
    })
    
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
            {/* <Link to={`/api/addBeer`} className='link'>Add a beer!</Link> */}
            {/* {beers.map((beer, index) => {
                return(
                    <div>
                        <h5>{beer.name}</h5>
                        <p>Brand: {beer.brand}</p>
                        <p>Style: {beer.style}</p>
                    </div>
                )
            })} */}
            <div>
                {/* need to finish this form first thing, get beer attributes going, set style as text input and attributes as a select option */}
                {/* <form onSubmit={onBeerAddHandler}>
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
                            {styles.map((style, index) => {
                                return(
                                    <option>{style.name}</option>
                                )
                            })}
                        </select>
                    </p>
                    <input type='submit' value='Add beer'/>
                </form> */}
            </div>
            {/* <div>
                <form onSubmit={onStyleAddHandler}>
                    <p>
                        <label>Style Name:</label>
                        <input type='text' onChange = {e => setName(e.target.value)}/>
                    </p>
                    <p>
                        
                    </p>
                </form>
            </div> */}
        </div>
    )
}

export default HomePage