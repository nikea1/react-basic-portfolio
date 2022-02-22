import {Routes, Route} from 'react-router-dom'
import {About} from './Pages/About'
import {Contacts} from './Pages/Contact'
import {Projects} from './Pages/Projects'

export function Content(){
 
    const style = {

      padding: '1.25em',
    }
   
    return(
      <div className='content' style={style}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
      </div>
    )
  }