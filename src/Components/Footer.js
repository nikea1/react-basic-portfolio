export function Footer(){
    const footerStyle ={
      display:'flex',
      justifyContent:'center'
    }
  
    return(
  
        <footer style={footerStyle}>
          <p> &copy; Copyright {new Date().getFullYear()} Adenike Adeyemi</p>
        </footer>
  
    )
  }