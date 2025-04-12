

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  )
}

export default Footer