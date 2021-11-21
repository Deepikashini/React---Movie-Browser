const Hero = ({text, backdrop}) => {
    return(
        <header className="bd-purple-500 text-white p-5 hero-container">
        
            
            <h1 className="mb-2 mt-auto ">{text}</h1>
            {backdrop &&
            <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
            }
            
            
        </header>
        
    )
}

export default Hero;



// bd-purple-500 text-white p-5 hero-container