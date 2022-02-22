import gitHub from '../Images/gloss-square-github-icon-jx.svg';
import linkedIn from '../Images/gloss-square-linkedin-icon.svg';
import stackOverflow from '../Images/gloss-square-stackoverflow-icon.svg'

export default function Social(){


  
    return (
      
      <section className='social'>
        <h3>Let's Connect</h3>
        <hr />
        <ul>
          <li><a href="https://github.com/nikea1"><img src={gitHub} alt="Square GitHub icon" /></a></li>
          <li><a href="https://www.linkedin.com/in/adenikeadeyemi/"><img src={linkedIn} alt="Square LinkedIn icon" /></a></li>
          <li><a href='http://stackoverflow.com/users/6491566/nike-adeyemi'><img src={stackOverflow} alt="Square Stackoverflow icon"/></a></li>
        </ul>
      </section>
      
    )
  
  }