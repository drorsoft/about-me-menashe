import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white border-4 border-black rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-8 text-center text-[--color-cartoon-pink]">John Doe</h1>
      
      <nav className="mb-8">
        <ul className="flex justify-center gap-8">
          <li>
            <Link to="/" className="text-2xl text-[--color-cartoon-blue] hover:text-[--color-cartoon-pink] hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/resume" className="text-2xl text-[--color-cartoon-blue] hover:text-[--color-cartoon-pink] hover:underline">Resume</Link>
          </li>
          <li>
            <Link to="/contact-info" className="text-2xl text-[--color-cartoon-blue] hover:text-[--color-cartoon-pink] hover:underline">Contact Info</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
