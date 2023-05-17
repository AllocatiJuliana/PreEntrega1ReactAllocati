const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(counter)}>Agregar al Carrito</button>
    </div>
  );
};

export default CounterPresentation;
