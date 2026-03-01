import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to TrainerHub</h2>
        <p className="text-xl text-gray-600 mb-8">Book your perfect fitness trainer in Almaty</p>
        <div className="space-x-4">
          <Link href="/client/search" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Find a Trainer
          </Link>
          <Link href="/trainer/register" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Become a Trainer
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">🔍 Find Trainers</h3>
          <p className="text-gray-600">Browse qualified trainers and book sessions by your schedule</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">💰 Fair Pricing</h3>
          <p className="text-gray-600">Direct pricing with no hidden fees</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">⭐ Reviews</h3>
          <p className="text-gray-600">Read real reviews from other clients</p>
        </div>
      </div>
    </main>
  )
}
