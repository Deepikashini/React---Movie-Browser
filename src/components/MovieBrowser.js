import React from 'react';
// import background from './media/background.png';
// import Image from'./media/Img.jpg';
import movie from './media/popcorn.jpg';
function MovieBrowser() {
    return(
        
        <div className="container-fluid">
            
  
       <img className="image" src={movie}/>
            {/* <div class="centered ">  */}
            <p className="centered">Millions of movies, TV shows and people to discover. Explore now.
                          Your guide to Movie, TV and celebrity information.
                          Watch get showtimes, and buy tickets for upcoming films. 
                          Rate and review shows you've seen and track what you want to watch using your Watchlist. 
                          Movie Browser takes you behind the scenes with exclusive IMDb Originals, celebrity interviews, and more. 
                          Stay up to date with entertainment news, awards, and events.
                          Whether you're interested in what movies have won the Oscar for best picture, maintaining a personal watchlist, 
                          or like to develop applications of your own, we hope you'll love everything our service has to offer.</p>
            {/* </div> */}
            
         </div>
    )
}
export default MovieBrowser