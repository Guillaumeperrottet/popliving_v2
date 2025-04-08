// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">Popliving</h3>
          <p>Votre logement flexible à la carte.</p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-3">Liens rapides</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Nos Chambres</a></li>
            <li><a href="#">Contactez-nous</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-3">Nous contacter</h4>
          <p>Email : reservation@popliving.ch</p>
          <p>Téléphone : +41 XX XXX XX XX</p>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Popliving. Tous droits réservés.
      </div>
    </footer>
  );
}
