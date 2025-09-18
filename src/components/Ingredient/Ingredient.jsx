

const Ingredient = ({ ingredient, onClick, buttonText }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
 {ingredient.name}
 <button onClick={onClick}>{buttonText}</button>
 </li>
  );
};

export default Ingredient;
