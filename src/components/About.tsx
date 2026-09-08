const certificates: string[] = [
  "Software Development Online Part-Time Accelerated - JAVA [Coding Dojo](2023)",
  "DTI Laguna x Google Certificate Program - Google UX Design[Coursera] (2025)",
  "UXPH Mini 2025: Manila Conference (2025)",
  "The No-Code Creative : Figma for Talents and Local Business (2026)",
  "GSAP 3 Express (2026)",
];

const otherCertificates: string[] = [
  "Analog System & Digital Console Mixing Master Class[Sound Tech Institute of the Philippines(2019)",
  "Caregiving NC2 (Calamba Doctors' College) (2024)",
];

const hobbies: string[] = [
  "Playing Guitar",
  "Listening to music",
  "Playing rhythm games",
  "Reading",
];

const techStack: string[] = [
  "GSAP",
  "Typescript - React",
  "UI/UX - Figma",
  "Dart - Flutter",
  "Java",
  "HTML - CSS - JS",
];

type ContactAndLink = { platform: string; address: string };

const links: ContactAndLink[] = [
  { platform: "Github", address: "https://github.com/dev-zyrushiyao" },
  { platform: "Behance", address: "https://www.behance.net/zyrushiyao" },
];

const contacts: ContactAndLink[] = [
  { platform: "Email", address: "mailto:zyrushiyao@gmail.com" },
  { platform: "LinkedIn", address: "https://www.linkedin.com/in/zyrus-hiyao/" },
];

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
            {hobbies.map((hobby) => {
              return <li key={hobby}>{hobby}</li>;
            })}
          </ul>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Tech Stack:
          </h3>
          <ul className="typography-secondary text-xl">
            {techStack.map((tech) => {
              return <li key={tech}>{tech}</li>;
            })}
          </ul>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Certificates:
          </h3>
          <ul className="typography-secondary text-xl">
            {certificates.toReversed().map((cert) => {
              return <li key={cert}>{cert}</li>;
            })}
          </ul>
          <h5 className="lg:text-2xl md:text-xl text-xl typography-primary">
            Other:
          </h5>
          <ul className="typography-secondary text-sm">
            {otherCertificates.toReversed().map((otherCert) => {
              return <li key={otherCert}>{otherCert}</li>;
            })}
          </ul>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Links:
          </h3>
          <ul className="typography-secondary text-xl">
            {links.map((link) => {
              return (
                <li key={link.platform}>
                  <a href={link.address} target="_blank">
                    {link.platform}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="about-content flex flex-col gap-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl typography-primary">
            Contact
          </h3>
          <ul className="typography-secondary text-lg">
            {contacts.map((contact) => {
              return (
                <li key={contact.platform}>
                  <a href={contact.address} target="_blank">
                    {contact.platform}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
