import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="burger btn lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu-drop menu menu-sm dropdown-content rounded-box z-1 mt-3 w-53 p-2 shadow-lg">
        <li><a href="#hero-section">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
    <div className="avatar">
  <div className="ring w-12 rounded-full ring-offset-2 ring-neutral">
    <img src="/MyPhoto/Samanta.PNG" />
  </div>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#hero-section">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#skills">SKILLS</a></li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
  </div>
  <div className="navbar-end">
<a className="download btn btn-outline btn-neutral">CV<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="download-svg size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a>
  </div>
</div>
  );
}