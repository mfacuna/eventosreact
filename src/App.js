import React from 'react';
import Header from './component/Header';
import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';
import Formulario from './component/Formulario'

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario />
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
