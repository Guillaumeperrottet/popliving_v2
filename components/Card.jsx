// components/Card.jsx
import Image from 'next/image';

export default function Card({ image, alt, title, description }) {
  return (
    <div className="text-center p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
      <Image
        src={image}
        alt={alt}
        width={400}
        height={300}
        className="rounded-lg"
      />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}
