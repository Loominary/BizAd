import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import PrivateRoute from './components/Auth/PrivateRoute';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main, { displayMode, filterMode } from './components/Main/Main';
import Services from './components/Services/Services';
import UpdateService from './components/Services/UpdateService';
import Signup from './components/Signup/Signup';



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
            <Main defaultDisplay={displayMode.grid} defaultFilter={filterMode.default} />
            </PrivateRoute>
          }
        />
        <Route
          path='/about'
          element={
            <PrivateRoute>
            <About />
            </PrivateRoute>
          }
        />
        <Route
          path='/services'
          element={
            <PrivateRoute>
            <Services />
            </PrivateRoute>
          }
        />
        <Route
          path='/update/:service_id'
          element={
            <PrivateRoute>
            <UpdateService />
            </PrivateRoute>
          }
        />


        <Route
          path='/login'
          element={
            <Login />
          }
        />
        <Route
          path='/register'
          element={
            <Signup />
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
