// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="text-xl font-bold">Popliving</div>
      <ul className="flex space-x-4">
        <li><a href="#">Accueil</a></li>
        <li><a href="/concept">Concept</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
