
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeNameComponent from './components/PokeNameComponent';
import  PokeQueryComponent  from './components/PokeQueryComponent';
import HomeComponent from './components/HomeComponent';
import { usePokemonHook } from './hook/usePokemonHook';
import {Navigate} from 'react-router-dom';

function App() {


  usePokemonHook();

  return (
    <>
          <BrowserRouter>
                  <div className='container-fluid'>
                      <Routes>
                          <Route
                              path={'/'}
                              element={ <HomeComponent /> }
                          />  
                          <Route
                              path={'/pokemons'}
                              element={ <PokeQueryComponent /> }
                          />
                          <Route 
                            path={'/pokemon/:name'} 
                            element={<PokeNameComponent />}
                            />
                          <Route path="*" element={ <Navigate to='/pokemons' />} />
                      </Routes>
                  </div>
              </BrowserRouter>
    </>
  );
}

export default App;
