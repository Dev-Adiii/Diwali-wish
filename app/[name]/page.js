import Image from 'next/image';

export default function UserPage({ params }) {
  // Decode the name from the URL
  const decodedName = decodeURIComponent(params.name);

  // Generate a random number between 1 and 11 for the image
  const randomImageNumber = Math.floor(Math.random() * 11) + 1;

  // Array of Diwali wishes
  const diwaliWishes = [
    "May the festival of lights brighten your life with joy and prosperity!",
    "Wishing you a Diwali that brings happiness, prosperity, and joy to your life.",
    "Let the light of diyas guide you towards success and happiness. Happy Diwali!",
    "May this Diwali bring you new opportunities and reasons to celebrate. Happy Diwali!",
    "Wishing you a year filled with laughter, love, and light. Happy Diwali!",
    "May the divine light of Diwali spread into your life peace, prosperity, happiness, and good health.",
    "On this auspicious occasion, may joy, prosperity, and happiness illuminate your life and your home.",
    "Wishing you a gleam of diyas, echo of holy chants, contentment, and happiness today, tomorrow, and forever. Happy Diwali!",
  ];

  // Choose a random wish
  const randomWish = diwaliWishes[Math.floor(Math.random() * diwaliWishes.length)];

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Happy Diwali, {decodedName} !</h1>
      <p className="text-xl mb-6 max-w-md">{randomWish}</p>
      <Image
        src={`/diwali${randomImageNumber}.jpg`}
        alt="Random Diwali image"
        width={300}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}