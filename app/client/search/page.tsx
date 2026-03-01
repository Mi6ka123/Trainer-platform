'use client'

import { useState } from 'react'

export default function SearchTrainers() {
  const [specialization, setSpecialization] = useState('')
  const [priceMax, setPriceMax] = useState('')

  const mockTrainers = [
    { id: 1, name: 'Alex Johnson', spec: 'Yoga', price: 3000, rating: 4.8, image: '👨‍🏫' },
    { id: 2, name: 'Maria Garcia', spec: 'Strength', price: 5000, rating: 4.9, image: '👩‍🏫' },
    { id: 3, name: 'John Smith', spec: 'Cardio', price: 4000, rating: 4.7, image: '👨‍🏫' },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Trainer</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
            <select 
              value={specialization} 
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">All</option>
              <option value="yoga">Yoga</option>
              <option value="strength">Strength</option>
              <option value="cardio">Cardio</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Price (₸)</label>
            <input 
              type="number" 
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder="5000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTrainers.map((trainer) => (
          <div key={trainer.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
            <div className="p-6">
              <div className="text-4xl mb-4">{trainer.image}</div>
              <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
              <p className="text-gray-600 mb-2">{trainer.spec} Trainer</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-2xl font-bold text-blue-600">₸{trainer.price}</p>
                <p className="text-sm text-yellow-500">⭐ {trainer.rating}</p>
              </div>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
