const Resultados = ({ custoTotal }) => {
  return (
    <div className="resultados">
      <div className="titulo-h2">
        <h2>Resultados</h2>
      </div>
      
      <div className="resultados-custo-total">
        <p>
          {`Custo Total: ${custoTotal}`}
        </p>
      </div>
    </div>
  );
};

export default Resultados;