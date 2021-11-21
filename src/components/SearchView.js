import Hero from "./Hero";
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  
  return(

    <div className="col-lg-3 col-md-3 col-2 my-4">
<div className="card">
  <img 
  src={posterUrl} 
  className="card-img-top" 
  alt="no image found" 
  onError="doSomething();" 
  // onError={(e)=>{e.target.onerror = null; e.target.src="/no-image-found.png"}}
  />
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    
    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
  </div>
</div>
</div> 
    
  )
}



const SearchView = ({keyword, searchResults}) => {
  const title = `you are searching for ${keyword}`
  const resultsHtml = searchResults.map((obj, i) => {
   return  <MovieCard movie={obj} key={i} />

  })

    return(
      <>
        <Hero text= {title} />
       
        {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
        }
        
      </>
    );
  };

export default SearchView;



// api = 3bcbc6e5849d1ab424ab3c15b42faeaa
// https://api.themoviedb.org/3/search/movie? api_key=3bcbc6e5849d1ab424ab3c15b42faeaa&language=en-US&query=star%20wars&page=1&include_adult=false

// Card
{/* <div className="col-lg-3 col-md-3 col-2 my-4">
<div className="card">
  <img 
  src={posterUrl} 
  className="card-img-top" 
  alt="no image found" 
  onError={(e)=>{e.target.onerror = null; e.target.src="/no-image-found.png"}}/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    
    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
  </div>
</div>
</div> */}