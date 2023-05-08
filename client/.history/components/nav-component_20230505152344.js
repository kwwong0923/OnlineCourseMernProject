import React from 'react'
import { Link } from "react-router-dom";

const navComponent = () => {
  return (
    <div>
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Homepage
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Register
                                </Link>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    </div>
  )
}

export default navComponent;