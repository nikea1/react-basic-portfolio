import Social from './Social'
import {Content} from './Content'

export function Body(){

    const style = {
      margin: '2.5em auto' 
    }
  
      return(
        <div className='body' style={style}>
          <Content />
          <Social />
        </div>
      )
  }