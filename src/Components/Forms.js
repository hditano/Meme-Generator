import React from "react";
import memesData from "../DataBase/memesData";
import DataReceived from './DataReceived';

export default function Forms() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemesImages, setAllMemesImages] = React.useState(memesData);
    const [starWarsData, setStarWarsData] = React.useState({});


    function getImage() {
        const memesArray = allMemesImages.data.memes;
        const randomMeme = Math.floor(Math.random() * memesArray.length);
        setMeme(prevState => {
            return {
                ...prevState,randomImage: memesArray[randomMeme].url
            }
        })  
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value,
                [name]: value
            }
        })     
    }

    React.useEffect(() => {
        fetch('https://swapi.dev/api/people/3/')
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [])


    return (
        <div className="container--forms">
                <input type='text' value={meme.topText} name='topText' onChange={handleChange} placeholder="Shut up"/> <br></br>
                <input type='text' value={meme.bottomText} name='bottomText' onChange={handleChange} placeholder='and take my money'/>
                <DataReceived data={starWarsData} />
            <button onClick={getImage} type="button">Get a new meme image </button>
            <img className="container--image" src={meme.randomImage} alt="meme" />
        </div>
    )
}