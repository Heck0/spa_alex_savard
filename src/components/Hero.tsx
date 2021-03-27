import "../styles/hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="triangle triangle--left">&#9650;</div>
      <div className="triangle triangle--right">&#9650;</div>

      <div className="hero__image">
        <div className="hero__text">
          <h1>Projet Mock up </h1>
          <span>Je suis un span templateeee</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
