import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Main, { displayMode, filterMode } from './components/Main/Main';
import Services from './components/Services/Services';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Main defaultDisplay={displayMode.grid} defaultFilter={filterMode.default} />
          }
        />
        <Route
          path='/about'
          element={
            <About />
          }
        />
        <Route
          path='/services'
          element={
            <Services />
          }
        />

      </Routes>

    </>
    /*  <>
     <Header />
     <Main></Main>
     </> */
  )
}

export default App;
