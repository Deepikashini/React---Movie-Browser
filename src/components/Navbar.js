import {useHistory, Link } from "react-router-dom";


const NavBar = ({searchText, setsearchText}) => {
  const history = useHistory()

  const updateSearchText = (e) => {
    history.push('/search')
    setsearchText(e.target.value)
  }

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/MovieBrowser">Movie Browser</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/search">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/movies">Movie details View</Link>
              </li> */}
              
              {/* <li className="nav-item">
                <Link className="nav-link disabled" to="gotosomewhere" tabIndex="-1" aria-disabled="true">Disabled</Link>
              </li> */}
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search for the Movies" 
              aria-label="Search" 
              value={searchText} 
              onChange={updateSearchText}/>
                
              <button className="btn btn-outline-purple-300" type="submit" >Search</button>
              
              
            </form>
          </div>
        </div>
      </nav>
    )
  }
  
  export default NavBar;