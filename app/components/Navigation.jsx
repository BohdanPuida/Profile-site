var React = require('react')
var {Link, IndexLink} = require('react-router');


var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Profile site
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Profile</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Plans</Link>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
          Created by <a href="https://github.com/waskannichtun" target="_blank">Bogdan Puida</a>
          </li>
        </ul>
      </div>
    </div>
  );
};


module.exports = Navigation;
