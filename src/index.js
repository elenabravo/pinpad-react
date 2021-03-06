import React from 'react'
import ReactDOM from 'react-dom'
import PinPadApp from './components/App/PinPadApp'
import * as serviceWorker from './serviceWorker'

// Reset styles
import 'normalize.css/normalize.css'

ReactDOM.render(
  <React.StrictMode>
    <PinPadApp />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
