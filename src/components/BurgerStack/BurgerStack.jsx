
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, onRemove }) => {
  return (

    <ul>
    {stack.length === 0 ? (
    <li>No Ingredients</li>
    ) : (
    
    stack.map((ingredient, index) => (
    <Ingredient
    key={index}
    ingredient={ingredient}
    onClick={() => onRemove(index)}
    buttonText="X"
    />
    ))
      )}
    </ul>
  );
};

export default BurgerStack;
