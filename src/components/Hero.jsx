import "./styles/Hero.css"

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-top">
          <figure className="hero-figure">
            <img className="hero-img" src="./public/hero.jpeg" alt="" />
          </figure>
          <div className="hero-title">Ableton</div>
        </div>

          <div className="hero-subtitle">
            <h2 className="h2-black">
              We make <a className="a-hero-blue" href="#live">Live</a> , <a className="a-hero-blue" href="#push">Push</a> and{" "}
              <a className="a-hero-blue" href="#link">Link</a> unique software and hardware for music
              creation and performance. With these products, our community of
              users creates amazing things
            </h2>
            <p className="hero-paragraf">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              debitis necessitatibus provident iste cupiditate harum animi vel,
              corrupti consequuntur amet molestias non, rem unde velit quod
              error saepe! Illo, perspiciatis omnis. Repellendus.
            </p>

        </div>
      </div>
    </>
  )
}

export default Hero
