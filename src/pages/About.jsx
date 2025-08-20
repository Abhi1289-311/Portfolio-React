export default function About() {
  return (
    <section className="stacked">
      <h2>About</h2>
      <p>
        I’m Abhilash Gandham, Technical Lead at HCL Technologies (ex-Gupshup intern),
        focused on modern front-end (React, Angular), performance optimization,
        and delightful UX. I enjoy building API-driven interfaces and improving
        load times with smart, scalable UI patterns.
      </p>
      <h3>Core Skills</h3>
      <ul className="chips">
        <li>React</li><li>Angular</li><li>JavaScript</li><li>TypeScript</li>
        <li>HTML</li><li>CSS</li><li>Node.js</li><li>MySQL</li>
        <li>Jest/RTL</li><li>Vercel/GitHub Pages</li>
      </ul>

      <h3>Experience (highlights)</h3>
      <ul className="bullets">
        <li>Technical Lead @ HCL — improved app load time by ~35%, built complex front-end components.</li>
        <li>Gupshup — React + unit tests; no-code chatbot tool; significant test coverage gains.</li>
      </ul>

      <a className="btn-outline" href="https://www.linkedin.com/in/abhilash-gandham/" target="_blank">LinkedIn</a>
    </section>
  );
}
