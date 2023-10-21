import Navbar from './Navbar'
import Home from './pages/Home.js'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/contact":
      Component = Contact
      break
    default:
      Component = Home
  }
  return (
    <>
      <Navbar/>
      <div className="container">
        <Component/>
      </div>
      <div className="background-image"></div>
    </>
  );
}

export default App;
