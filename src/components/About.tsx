const About = () => {
  return (
    <div className="title-section">
      <h2 className="lg:text-6xl md:text-5xl text-4xl typography-primary">
        About me
      </h2>
      <hr />
      <div className="about-container flex flex-col gap-1">
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Introduction
          </h3>
          <p className="typography-secondary text-xl">
            Hi! I am Zyrus Hiyao, a graduate with an Associate in Computer
            Technology from STI College Calamba. I am an aspiring UI/UX designer
            and frontend web developer.
          </p>
        </div>

        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Hobbies:
          </h3>
          <ul className="typography-secondary text-xl">
            <li>Playing Guitar</li>
            <li>Listening to music</li>
            <li>Playing rhythm games</li>
            <li>Reading</li>
          </ul>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Tech Stack:
          </h3>
          <ul className="typography-secondary text-xl">
            <li>UI/UX - Figma</li>
            <li>Dart - Flutter</li>
            <li>Typescript - React</li>
            <li>Java </li>
            <li>HTML - CSS - JS</li>
          </ul>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Certificates:
          </h3>
          <ol className="typography-secondary text-xl">
            <li>
              DTI Laguna x Google Certificate Program - Google UX Design
              [Coursera] (July 8, 2025)
            </li>
            <li>UXPH Mini 2025: Manila Conference (Oct 18, 2025)</li>
            <li>
              The No-Code Creative : Figma for Talents and Local Business (March
              14, 2026)
            </li>
          </ol>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Links:
          </h3>
          <ul className="typography-secondary text-xl">
            <li>
              <a href="https://github.com/dev-zyrushiyao" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/zyrushiyao" target="_blank">
                Behance
              </a>
            </li>
          </ul>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Contact
          </h3>
          <ul className="typography-secondary text-lg">
            <li>
              <a href="mailto:zyrushiyao@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zyrus-hiyao/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
