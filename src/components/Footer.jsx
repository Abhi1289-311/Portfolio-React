export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Abhilash Gandham</p>
      <div className="social">
        <a href="mailto:abhilash.gandham311@gmail.com" target="_blank">Email</a>
        <a href="https://www.linkedin.com/in/abhilash-gandham/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Abhi1289-311" target="_blank">GitHub</a>
      </div>
    </footer>
  );
}
