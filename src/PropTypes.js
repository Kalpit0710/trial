// import React from 'react';
// import PropTypes from 'prop-types';

// const UserProfile = ({ name, age, isPremiumUser, hobbies, address }) => {
//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>Age:</strong> {age}</p>
//       <p><strong>Premium User:</strong> {isPremiumUser ? 'Yes' : 'No'}</p>
//       <p><strong>Hobbies:</strong> {hobbies.join(', ')}</p>
//       <p><strong>Address:</strong> {address.city}, {address.country}</p>
//     </div>
//   );
// };

// // PropTypes validation
// UserProfile.propTypes = {
//   name: PropTypes.string.isRequired,              
//   age: PropTypes.number.isRequired,                
//   isPremiumUser: PropTypes.bool,                   
//   hobbies: PropTypes.arrayOf(PropTypes.string),    
//   address: PropTypes.shape({                      
//     city: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//   }).isRequired,
// };


// UserProfile.defaultProps = {
//   isPremiumUser: false,        // Default value for isPremiumUser
//   hobbies: ['No hobbies listed'], // Default value for hobbies
// };


// const App = () => (
//   <UserProfile
//     name="John Doe"
//     age={30}
//     isPremiumUser={true}
//     hobbies={['Reading', 'Cycling']}
//     address={{ city: 'New York', country: 'USA' }}
//   />
// );

// export default App;




import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h3>Array: {this.props.propArray.join(', ')}</h3>
        <h3>Bool: {this.props.propBool ? 'True...' : 'False...'}</h3>
        <h3>Func: {this.props.propFunc(3)}</h3>
        <h3>Number: {this.props.propNumber}</h3>
        <h3>String: {this.props.propString}</h3>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

// Default prop values
App.defaultProps = {
  name: 'Welcome to class',
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (e) {
    return e;
  },
  propNumber: 1,
  propString: 'string value...',
};

export default App;
