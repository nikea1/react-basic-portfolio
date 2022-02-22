import {Link} from 'react-router-dom'

function NavLink({linkText, link}){

    return(
      <li>
        <Link to={link}>{linkText}</Link>
      </li>
    )
  }
  
  function HeaderMenu(){
    const headerMenuUlStyle ={
      display:'flex',
    }
  
    return(
      <nav className='header-menu'>
        <ul style={headerMenuUlStyle}>
          <NavLink linkText="About" link='/about'/>
          <NavLink linkText="Portfolio" link='/portfolio'/>
          <NavLink linkText="Contact" link='/contact'/>
        </ul>
      </nav>
    )
  }


export function Header(){

    return(
      
      <header className='header'>
        <nav className='header-name'>
          <h1 >Adenike "Nike" Adeyemi</h1>
        </nav>
        <HeaderMenu />
  
      </header>
    )
  }