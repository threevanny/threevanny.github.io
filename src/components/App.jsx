import Header from './Header'

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold tracking-wide break-normal text-gray-900">Geovanny Reyes</h1>
        <p className="text-xl font-light tracking-wide mt-5">I like build things on the internet</p>
        <a href="https://github.com/threevanny/" target="_blank" className="mt-5 font-bold bg-gray-900 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          GitHub
        </a>
      </main>
  </>
  )
}

export default App
