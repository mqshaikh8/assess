import React, {useState} from 'react';
import './App.css';
//components
import Button from './components/Button'
import Popup from './components/Popup';
function App() {
  const [thankState, setThankState] = useState('false')
  const [comeBackState, setComeBackState] = useState('false')
  let thankYOuButton = () => {
    console.log('thank clicked')
    setThankState(!thankState)
  }
  let comeBackButton = () => {
    console.log('comeback clicked')
    setComeBackState(!comeBackState)
  }
  return (
    <div className="App">
      {thankState === false ? <Popup text="Thank you!" class='popup'/> : <Popup text="Thank you!" class='animate'/>}
      <div className='buttonContainer'>
        <Button text='Thank you button' clickFunc= {thankYOuButton}/>
        <Button text='Come back soon button' clickFunc= {comeBackButton}/>
      </div>
      { comeBackState === false ? <Popup text="Come back soon." class='popup'/> : <Popup text="Come back soon." class='animate'/>}
    </div>
  );
}

export default App;
