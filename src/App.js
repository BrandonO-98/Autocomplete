import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { Autocomplete } from '@react-google-maps/api';


function App() {
  const [autocomplete, setAutocomplete] = useState(null)
  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete)
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }
  return (
    <div className="App">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
            </Autocomplete>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
