// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Alert, Button } from "flowbite-react";

export default function Home() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState('');

const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
    'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState) {
      router.push(`/places?state=${selectedState}`);
    }
  };

  return (

 <div className="flex items-center justify-center h-screen">
   <Alert color="warning" rounded>
      <span className="font-medium">Info alert!</span> Change a few things up
      and try submitting again. MOe
    </Alert>

   <Button>Click me</Button>
        
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4">Select a State</h1>
        <select
          required
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Choose a state</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Search Places
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
    </main>
  );
}
