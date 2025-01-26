import './App.css'

import Navigator from './Components/Navigator/Navigator';
import Router from './Components/Navigator/Router';
import { Provider } from "react-redux";
import store from "../src/store/store";


function App() {
  return (
    <>
     <Provider store={store}>

     </Provider>
      <Navigator />
      <Router />
    </>
  )
}

export default App
