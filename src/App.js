import React ,{createContext} from 'react'
import './App.css';
import CompA from './CompA'

const firstName = createContext()
const lastName = createContext()

function App() {
  return (
    <firstName.Provider value={"FN Dipesh"}>
      <lastName.Provider value={"LN Sakharkar"}>
    <div className="App">
      <h1>Welcome to context API</h1>
      <CompA/>

    </div>
    </lastName.Provider>
    </firstName.Provider>
  );
}

export default App;
export {firstName,lastName};