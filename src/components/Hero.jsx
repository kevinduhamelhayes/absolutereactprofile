import "./styles/Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <figure className="hero-figure">
          <img className="hero-img" src="./public/hero.jpg" alt="Kevin Duhamel" />
        </figure>
      </div>
      <div className="hero-right">
        <h1 className="hero-title">Kevin Duhamel</h1>
        <h2 className="hero-subtitle">Developer</h2>
        <p className="hero-description">
          Passionate about transforming ideas into digital realities. 
          Specialized in React and always eager to explore new technologies.
        </p>
        <button className="hero-button">Contact Me</button>
      </div>
    </div>
  )
}

export default Hero;

