import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import OneDog from './pages/OneDog';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<OneDog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
