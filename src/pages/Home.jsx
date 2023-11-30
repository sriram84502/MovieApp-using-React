import Movies from '../assets/data'
import ListMovies from '../components/ListMovies'
import { useRef, useState } from 'react'

function Home() {
    const [allmovies,setallmovies] = useState(Movies)
    const inputText = useRef();
    function searchHandler(){
        setallmovies(Movies.filter(Movie => Movie.title.toLowerCase().includes(inputText.current.value)))
        if(allmovies.length == 0){
            setallmovies(Movies)
        }
    }
    return(
        <>
            <div className="search-container">
                <h3>Search Movies</h3>
                <input type="text" onChange={searchHandler} ref={inputText} placeholder="Search..." name="search" />
            </div>
            <div className='card'>
            {
                allmovies.map((Movie) => {
                    return <ListMovies key={Movie.id} id={Movie.id} title={Movie.title} year={Movie.year} genre={Movie.genre} desc={Movie.description} director={Movie.director} cast={Movie.cast}/>
                })
            }
            </div>
        </>
    )
}

export default Home