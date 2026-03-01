'use client'

import { useState } from 'react'

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('kaspi')
  const [isPaying, setIsPaying] = useState(false)

  const sessionPrice = 5000

  const handlePayment = async () => {
    setIsPaying(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsPaying(false)
    alert('✅ Payment successful! Your session is confirmed.')
    window.location.href = '/client/my-sessions'
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Payment</h1>

        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Complete Your Payment</h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-600">
            <p className="text-gray-700 font-semibold mb-2">Session Price</p>
            <p className="text-4xl font-bold text-blue-600">₸{sessionPrice}</p>
          </div>

          <div className="space-y-4 mb-8">
            <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500" style={{borderColor: paymentMethod === 'kaspi' ? '#2563eb' : '#e5e7eb'}}>
              <input 
                type="radio" 
                name="payment"
                value="kaspi"
                checked={paymentMethod === 'kaspi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4"
              />
              <span className="ml-3 text-lg font-semibold">💳 Kaspi QR / Card</span>
            </label>

            <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500" style={{borderColor: paymentMethod === 'stripe' ? '#2563eb' : '#e5e7eb'}}>
              <input 
                type="radio" 
                name="payment"
                value="stripe"
                checked={paymentMethod === 'stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4"
              />
              <span className="ml-3 text-lg font-semibold">💳 Stripe Card</span>
            </label>
          </div>

          {paymentMethod === 'kaspi' && (
            <div className="mb-6 bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 mb-4">Scan Kaspi QR code:</p>
              <div className="bg-gray-300 h-48 rounded flex items-center justify-center mb-4">
                <p className="text-gray-600 text-lg">[QR Code Mock]</p>
              </div>
              <p className="text-sm text-gray-600">✓ Secure Kaspi payment</p>
            </div>
          )}

          {paymentMethod === 'stripe' && (
            <div className="mb-6 bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 mb-4">Test Card: 4242 4242 4242 4242</p>
              <div className="bg-gray-100 p-4 rounded text-sm text-gray-600">
                <p>✓ Secure Stripe payment (mock for testing)</p>
              </div>
            </div>
          )}

          <button 
            onClick={handlePayment}
            disabled={isPaying}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 font-bold text-lg mb-4"
          >
            {isPaying ? 'Processing...' : `Confirm Payment ₸${sessionPrice}`}
          </button>

          <p className="text-xs text-gray-500 text-center">
            🔒 This is a mock payment. In production, this will connect to real payment providers.
          </p>
        </div>
      </div>
    </main>
  )
}
