import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RenderizarMapaPrincipal from './screens/RenderizarMapaPrincipal'
import RenderizarMapaDungeon1 from './screens/RenderizarMapaDungeon1'
import RenderizarMapaDungeon2 from './screens/RenderizarMapaDungeon2'
import RenderizarMapaDungeon3 from './screens/RenderizarMapaDungeon3'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RenderizarMapaPrincipal />} />
        <Route path="/dungeon_1" element={<RenderizarMapaDungeon1 />} />
        <Route path="/dungeon_2" element={<RenderizarMapaDungeon2 />} />
        <Route path="/dungeon_3" element={<RenderizarMapaDungeon3 />} />
      </Routes>
    </Router>
  );
}

export default App;
