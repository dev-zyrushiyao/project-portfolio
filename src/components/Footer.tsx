const about: string[] = [
  "Zyrus Hiyao",
  "Associate in Computer Technology",
  "Calamba , Laguna , Philippines 4027",
];

const contact: string[] = ["zyrushiyao@gmail.com", "LinkedIn"];

const skills: string[] = [
  "Figma",
  "Java",
  "Dart / Flutter",
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript / React",
];

export default function Footer() {
  return (
    <footer className="max-w-full p-10 flex flex-col md:flex-row justify-evenly">
      <div className="footer-content flex flex-col gap-7 p-10">
        <h4 className="typography-primary text-3xl">About</h4>
        <ul className="typography-secondary text-xl flex flex-col gap-3">
          {about.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </div>

      <div className="footer-content flex flex-col gap-7 p-10">
        <h4 className="typography-primary text-3xl">Contact</h4>
        <ul className="typography-secondary text-xl flex flex-col gap-3">
          {contact.map((data) => {
            return (
              <li>
                {data === "zyrushiyao@gmail.com" && (
                  <a href={`mailto:${data}`} target="_blank">
                    {data}
                  </a>
                )}
                {data === "LinkedIn" && (
                  <a
                    href="https://www.linkedin.com/in/zyrus-hiyao/"
                    target="_blank"
                  >
                    {data}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="footer-content flex flex-col gap-7 p-10">
        <h4 className="typography-primary text-3xl">Skills</h4>
        <ul className="typography-secondary text-xl flex flex-col gap-3">
          {skills.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </div>
    </footer>
  );
}
