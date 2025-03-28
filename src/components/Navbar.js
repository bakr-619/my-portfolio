export default function Navbar() {
    return (
      <nav className="flex justify-between p-5 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <a href="#about" className="px-3">About</a>
          <a href="#projects" className="px-3">Projects</a>
          <a href="#contact" className="px-3">Contact</a>
        </div>
      </nav>
    );
  }
  