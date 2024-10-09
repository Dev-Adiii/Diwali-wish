'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        // Encode the name for the URL
        const encodedName = encodeURIComponent(name.trim());
        router.push(`/${encodedName}`);
      } else {
        alert('Error submitting name');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting name');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
        <input
          type="text"
          placeholder="Enter your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-64 px-4 py-2 text-black text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out">
          Submit
        </button>
      </form>
    </>
  );
}
