import React from "react"
import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<Link to="/">Home</Link>
			</div>
      <div className="menu">
        <div>
          <Link to="/admin">Admin</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
	);
};