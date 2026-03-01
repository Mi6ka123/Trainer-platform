'use client'

import { useState } from 'react'

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const trainer = {
    id: 1,
    name: 'Maria Garcia',
    spec: 'Strength Training',
    price: 5000,
    rating: 4.9,
    image: '👩‍🏫'
  }

  const availableTimes = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time')
      return
    }
    alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`)
    // Redirect to payment
    window.location.href = '/client/payment'
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Book a Session</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trainer Info */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <div className="text-6xl mb-4">{trainer.image}</div>
              <h2 className="text-2xl font-bold mb-2">{trainer.name}</h2>
              <p className="text-gray-600 mb-4">{trainer.spec}</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-3xl font-bold text-blue-600">₸{trainer.price}</p>
                <p className="text-lg text-yellow-500">⭐ {trainer.rating}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded text-sm text-gray-700">
                <p className="font-semibold mb-2">Session Details:</p>
                <p>Duration: 60 minutes</p>
                <p>Type: In-person or Online</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold mb-6">Select Date & Time</h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input 
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-semibold">
                    ✓ Selected: {selectedDate} at {selectedTime}
                  </p>
                </div>
              )}

              <button 
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
