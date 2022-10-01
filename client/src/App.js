import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Page404 from './Pages/Page404';
import Add from './Components/Add';
import View from './Components/View';
import Update from './Components/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/view' element={<View />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
