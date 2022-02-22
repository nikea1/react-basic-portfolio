import Social from './Social'
import {Content} from './Content'

export function Body(){

    const style = {
      // padding: '2.5em 15em' 
    }
  
      return(
        <div className='body' style={style}>
          <Content />
          <Social />
        </div>
      )
  }