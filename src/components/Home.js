import Hero from "./Hero";



const Home = () =>{
  
    return(
      <>
        <Hero text= "Welcome to Movie Browser"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="lead ">
                      <span><strong>Welcome.</strong></span>
                      <div>
                        <p className="font-link">
                          Millions of movies, TV shows and people to discover. Explore now.
                          Your guide to Movie, TV and celebrity information.
                          Watch get showtimes, and buy tickets for upcoming films. 
                          Rate and review shows you've seen and track what you want to watch using your Watchlist. 
                          Movie Browser takes you behind the scenes with exclusive IMDb Originals, celebrity interviews, and more. 
                          Stay up to date with entertainment news, awards, and events.
                          Whether you're interested in what movies have won the Oscar for best picture, maintaining a personal watchlist, 
                          or like to develop applications of your own, we hope you'll love everything our service has to offer.
                        </p>
                        

                      </div>
                    </p>
                </div>

            </div>

        </div>
      </>
    );
  };

export default Home;