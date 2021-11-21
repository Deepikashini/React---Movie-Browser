import MovieBrowser from './components/MovieBrowser';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import {Switch, Route} from 'react-router-dom';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView'
import { useState, useEffect } from 'react';
import PageNotFound from './components/PageNotFound';






function App() {
  const [searchResults, setsearchResults] = useState([]);
  const [searchText, setsearchText] = useState('');
    useEffect(() => {
      if(searchText) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
          .then(response => response.json())
          .then(data => {
            setsearchResults(data.results)
        })
    }
  }, [searchText])

  
  return (
    

    
                  <div>
                    <NavBar searchText={searchText} setsearchText={setsearchText} />
                    <Route path="/MovieBrowser" component={MovieBrowser}/>
                      <Switch>
                          
                          <Route path='/' exact>
                            <Home/>
                          </Route>
                          <Route path="/about" component ={AboutView}/>
                          <Route path="/search"> 
                            <SearchView keyword={searchText} searchResults={searchResults}/>
                            <Route path="/search" component={PageNotFound} />
                          </Route>
                          <Route path="/movies/:id" component ={MovieView}/>
                        
                      </Switch>
                     </div> 
        
    
  );
}

export default App;




