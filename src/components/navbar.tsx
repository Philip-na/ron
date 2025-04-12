import { Link } from "@tanstack/react-router"


const Navbar = () => {
  return (
    <>
    <header className="bg-white shadow-md sticky top-0 z-10 h-16 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-xl font-bold text-gray-900">My Website</a>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
    
         
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="px-4 py-2 border rounded" />
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Search</button>
      </div>
  

    </header>
    
    </>
  )
}

export default Navbar