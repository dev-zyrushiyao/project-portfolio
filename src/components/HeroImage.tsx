import backgroundImage from "../assets/hero-image.png";

const HeroImage = () => {
  return (
    <div className="hero-section w-full overflow-hidden">
      <img
        className="blur-none max-w-full max-h-full object-cover"
        alt="pikachu hero-image"
        src={backgroundImage}
      />
      <div className="hero-content flex flex-col gap-4">
        <h1 className="lg:text-7xl md:text-6xl text-5xl typography-primary">
          Zyrus Hiyao
        </h1>
        <p
          id="main-role"
          className="lg:text-5xl md:text-4xl text-3xl  typography-primary"
        >
          Frontend Developer
        </p>
        <p
          id="sub-role"
          className="lg:text-2xl md:text-xl text-lg typography-primary"
        >
          UI/UX Designer
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
