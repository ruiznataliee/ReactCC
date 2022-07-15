import Navbar from "./navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App(){
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
    break
    case "/contact":
      component = <Contact/>
      break
      case "/about":
        component = <About/>
  }
  return( 
  <>
  <Navbar/>
  {component}

  </>
  )
}
export default App