'use client'

import { useState } from 'react'

export default function MySessions() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      trainer: 'Maria Garcia',
      spec: 'Strength',
      date: '2026-03-05',
      time: '14:00',
      price: 5000,
      status: 'completed',
      image: '👩‍🏫'
    },
    {
      id: 2,
      trainer: 'Alex Johnson',
      spec: 'Yoga',
      date: '2026-03-08',
      time: '10:00',
      price: 3000,
      status: 'upcoming',
      image: '👨‍🏫'
    },
  ])

  const [selectedSession, setSelectedSession] = useState<any>(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [review, setReview] = useState({ rating: 5, comment: '' })

  const handleCancelSession = (id: number) => {
    if (confirm('Are you sure you want to cancel this session?')) {
      setSessions(sessions.filter(s => s.id !== id))
      alert('Session cancelled. Refund processed.')
    }
  }

  const handleReview = (session: any) => {
    setSelectedSession(session)
    setShowReviewForm(true)
  }

  const submitReview = () => {
    alert(`Review submitted: ${review.rating}⭐ - "${review.comment}"`)
    setShowReviewForm(false)
    setReview({ rating: 5, comment: '' })
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">My Sessions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Upcoming Sessions</h2>
          <div className="space-y-4">
            {sessions.filter(s => s.status === 'upcoming').map((session) => (
              <div key={session.id} className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-3xl mb-2">{session.image}</div>
                    <h3 className="text-lg font-bold">{session.trainer}</h3>
                    <p className="text-sm text-gray-600">{session.spec} Training</p>
                  </div>
                  <p className="text-xl font-bold text-blue-600">₸{session.price}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
                  <p>📅 {session.date} at {session.time}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm">
                    Join Session
                  </button>
                  <button 
                    onClick={() => handleCancelSession(session.id)}
                    className="flex-1 bg-red-100 text-red-600 px-3 py-2 rounded hover:bg-red-200 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Sessions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-600">Completed Sessions</h2>
          <div className="space-y-4">
            {sessions.filter(s => s.status === 'completed').map((session) => (
              <div key={session.id} className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-3xl mb-2">{session.image}</div>
                    <h3 className="text-lg font-bold">{session.trainer}</h3>
                    <p className="text-sm text-gray-600">{session.spec} Training</p>
                  </div>
                  <p className="text-xl font-bold text-green-600">₸{session.price}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
                  <p>✓ Completed on {session.date}</p>
                </div>
                <button 
                  onClick={() => handleReview(session)}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                >
                  Write Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Review {selectedSession?.trainer}</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button
                    key={r}
                    onClick={() => setReview({ ...review, rating: r })}
                    className={`text-3xl ${review.rating >= r ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Comment</label>
              <textarea
                value={review.comment}
                onChange={(e) => setReview({ ...review, comment: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Share your experience..."
                rows={4}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={submitReview}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit Review
              </button>
              <button
                onClick={() => setShowReviewForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
