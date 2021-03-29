import "../styles/hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <div className="triangle triangle--left">&#9650;</div>
      <div className="triangle triangle--right">&#9650;</div>

      <div className="hero__image">
        <div className="hero__text">
          <h1>Projet API Spotify</h1>
          <span>Test pour projet futur</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
