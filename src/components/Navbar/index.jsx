import React from "react"
import { Link } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

// ii dau un obiect cu numele props. se creaza automat in mom in care le folosesc mai jos
export const Navbar = (props) => {
	return (
    // orice nu e string trebuie pus intre acolade
		<div className="navbar" 
    style={{
      backgroundColor: props.color ?? 'transparent', 
      color: props.textColor ?? 'black'
    }}
    >
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

Navbar.PropTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
}