
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
        <div className="nav-center">
            <Link to='/'>
            <h3>Songoch.</h3>

            </Link>
       

            <div className="nav-container">
               
            
               <div className="amount-container">
                   <Link to='/create'>
                       <h5>Create Songs</h5>
                   </Link>
                 


               </div>

               
           </div>
            
            
        </div>




        </nav>
    )
}
export default Navbar