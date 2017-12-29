import React from 'react';
import { NavLink } from 'react-router-dom';

// set up our individual routes via JSX
// must set root page to exact=true so it won't pattern match when navigating to other pages that contain "/"
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)

export default Header;