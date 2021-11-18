import React from 'react';
import './App.css';
import ProfilePhoto from './components/Profiles/ProfilePhoto';
import Address from './components/Profiles/Address';
import FullName from './components/Profiles/FullName';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Card body border="dark" style={{ width: '20rem' , backgroundColor: "white", borderRadius:"1rem" , boxShadow: "0 10px 8px 0 rgba(0,0,0,0.2)"} }>
    <div className= 'uppercon'>
     <ProfilePhoto/>
     </div>
     <div className = 'lowercon'>
     <FullName/>
     <Address/>
    </div>
     </Card>
    </div>
  );
}

export default App;
