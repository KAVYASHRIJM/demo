import React from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <div className='navbar'>
        <nav>
            <ul>
                <Link to="/"> {/*to set home as default page*/}
                    <li>Home</li>
                </Link>
                <Link to="/work">
                    <li>Work</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/todolist">
                <li>Todolist</li>
                </Link>
            </ul>
        </nav>
        </div>
    </div>
  )
}
export default Navbar