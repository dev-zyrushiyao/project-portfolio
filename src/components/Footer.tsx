export default function Footer() {
  return (
    <footer className="typography-primary max-w-full p-10 flex flex-col md:flex-row justify-evenly">
      <div className="footer-content flex flex-col gap-7 p-10">
        <h4 className="text-2xl">About</h4>
        <ul className="flex flex-col gap-3">
          <li>Zyrus Hiyao</li>
          <li>Associate in Computer Technology</li>
          <li>Calamba , Laguna , Philippines 4027</li>
        </ul>
      </div>

      <div className="footer-content flex flex-col gap-7 p-10">
        <h4 className="text-2xl">Contact</h4>
        <ul className="flex flex-col gap-3">
          <li>zyrushiyao@gmail.com</li>
          <li>Linkedin</li>
        </ul>
      </div>

      <div className="footer-content flex flex-col gap-7 p-10">
        <h4 className="text-2xl">Skills</h4>
        <ul className="flex flex-col gap-3">
          <li>Figma</li>
          <li>Java</li>
          <li>Dart / Flutter</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Typescript / React</li>
        </ul>
      </div>
    </footer>
  );
}
