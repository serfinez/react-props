import logo from './logo.svg';
import './App.css';

import ProfileComponent from './profile/ProfileComponent';

 
function App() {


  const handleName =(name) =>{
    alert("Hello " + name);
  }





  return (
  <div>
    <ProfileComponent  handleName={handleName} name="serfinez" bio="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." profession="etudiante">

    <img alt="..." src={logo} />


    </ProfileComponent>
   
    </div>
  );
}

export default App;
