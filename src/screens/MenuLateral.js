import IniciarBusca from "../buttons/IniciarJogo";
import EntrarDungeon from "../buttons/EntrarDungeon";

const MenuLateral = () => {
  return (
    <div className="container">
      <div className="menu-lateral">
        <IniciarBusca />
        <EntrarDungeon />     
      </div>
    </div>
  );
};

export default MenuLateral;