import {Route, Routes} from 'react-router-dom';
import Navigation from './components/global/Navagation';
import Main from './pages/Main';
import Search from './pages/Search';
import Collection from './pages/Collection';
import ViewTitle from './pages/ViewTitle';
import './App.css';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/viewtitle/:id' element={<ViewTitle />} />
      </Routes>
    </>
  );
}

export default App;
