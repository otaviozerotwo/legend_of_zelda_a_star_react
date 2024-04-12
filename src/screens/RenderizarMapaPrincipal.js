import { useState } from 'react';
import gridHyrule from '../data/GridMapaPrincipal';
import TelaMapaPrincipal from './MapaPrincipal';
import MenuLateral from './MenuLateral';

function RenderizarMapaPrincipal () {
  const [grid] = useState(gridHyrule);

  return (
    <>
      <div className="container">
        <MenuLateral />
        <TelaMapaPrincipal grid={grid}/>
      </div>
    </>
  ); 
};

export default RenderizarMapaPrincipal;