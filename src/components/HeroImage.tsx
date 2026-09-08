
import backgroundImage from "../assets/hero-image.png";

const HeroImage = () => {
  return (
    <div className="hero-section w-full overflow-hidden">
      <img
        className="blur-none max-w-full max-h-full object-cover"
        alt="pikachu hero-image"
        src={backgroundImage}
      />
      <div className="hero-content">
        <h1>Zyrus Hiyao</h1>
        <p>Frontend Developer</p>
        <p>UI/UX Designer</p>
      </div>
    </div>
  );
};

export default HeroImage;
