import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Garage from './pages/Garage';
import Winners from './pages/Winners';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='container min-h-screen h-full'>
          <Header />
          <Routes>
            <Route path='/'  element={<Garage />}/>
            <Route path='/winners'  element={<Winners />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
