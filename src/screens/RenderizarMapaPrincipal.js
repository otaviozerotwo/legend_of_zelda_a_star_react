import { useState } from 'react';
import gridHyrule from '../data/GridMapaPrincipal';
import TelaMapaPrincipal from './MapaPrincipal';
import IniciarBusca from '../buttons/IniciarJogo';
import EntrarDungeon from '../buttons/EntrarDungeon';

function RenderizarMapaPrincipal () {
  const [grid] = useState(gridHyrule);

  return (
    <>
      <IniciarBusca />
      <EntrarDungeon />
      <TelaMapaPrincipal grid={grid}/>
    </>
  ); 
};

export default RenderizarMapaPrincipal;