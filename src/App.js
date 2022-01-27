import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';
import Location from './components/pages/Location';

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/location" element={<Location />} />

      </Routes>

    </Router>

  );

}

export default App;
