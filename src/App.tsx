import { useEffect, useReducer } from 'react';
import './App.css';
import styled from 'styled-components';
import Map from './map/Map';
import { Store, initialState, reducer } from './state/reducer';
import { Action, setRestaurants } from './state/actions';
import { AppContext } from './state/context';
import { loadData } from './state/server.stub';

const MapWrapper = styled(Map)`
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [state, dispatch] = useReducer<React.Reducer<Store, Action>>(reducer, initialState);
  useEffect(() => {
    loadData().then(r => dispatch(setRestaurants(r)));
  }, [])

  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <MapWrapper></MapWrapper>
      </AppContext.Provider>
    </div>
  );
}

export default App;
