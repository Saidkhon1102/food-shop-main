import Dessert from "./Dessert";

function Desserts({ desserts }) {
  return (
    <div className="desserts">
      <h1 className="desserts__title">Desserts</h1>
      <div className="desserts__container">
        {desserts.map((dessert) => {
          return <Dessert key={dessert.id} dessert={dessert} />;
        })}
      </div>
    </div>
  );
}

export default Desserts;
