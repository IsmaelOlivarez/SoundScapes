export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gym SoundWaves
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered workout music generation for your fitness journey
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-6">
              Create personalized workout plans with AI-generated music that matches your intensity and style.
            </p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
