import Welcome from './components/Welcome'

import './App.css'

const App = () => <Welcome />

Welcome.defaultProps = {
  buttonText: 'Subscribe',
}

export default App
