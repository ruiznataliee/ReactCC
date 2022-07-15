  export default function Navbar(){
      const path = window.location.pathname
      return (<nav className= 'nav'>
          <a hred = '/' className="site-title">Natalie</a>
<ul>

<li> <a href="/pricing">Contact</a></li>
    <li> <a href="/about">About</a></li>
    <li> <a href="/about">Home</a></li>

</ul>

      </nav>
 ) }
