var React = require('react');


var Navigation = require('Navigation');

var App = ({children}) => {   //props;
  return (
    <div>
     <Navigation/>
       <p>Tak eto zhe Bodyan, nichego sebe</p>
      <div className="row" >
        <div className="column small-centered medium-6 large-4">
          

          {children}
        </div>
      </div>


    </div>

  );
}

module.exports = App;
