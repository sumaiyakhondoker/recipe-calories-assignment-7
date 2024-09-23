
import { LuClock3 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types';

const RecipeCard = ({recipe, handleWantToCookBtn}) => {
    const {recipe_image, recipe_name, short_description,ingredients, preparing_time, calories} = recipe
    return (
        <div >
            {/* card */}
            <div className="card bg-base-100 w-[380px] shadow-xl border-2">
                    <figure className="px-6 pt-6 ">
                    <img 
                    src={recipe_image}
                    alt="recipe"
                    className="rounded-2xl" />
                    </figure>
                    <div className="card-body ">
                    <h2 className="card-title ">{recipe_name}</h2>
                    <p className='text-gray-400 '>{short_description}</p>
                    <hr />

                    <div>
                        <h4 className='text-lg font-medium'>Ingredients: {ingredients.length}</h4>
                        
                            <ul className=' text-gray-400 py-4'>
                              
                                    {ingredients.map((ingredient, idx)=> <li key={idx}>{ingredient}</li>)}
                                
                            </ul>
                            <hr />
                            <div className='py-6 text-gray-500  flex '>
                                <p className='flex items-center gap-1'><LuClock3></LuClock3><span>{preparing_time} min</span></p>
                                <p className='flex items-center gap-1'><RiFireLine></RiFireLine><span>{calories} calories</span></p>
                            </div>
                        
                    </div>
                    <div className="card-actions">
                    <button onClick={()=> handleWantToCookBtn(recipe)} className="btn bg-[#0be58a] text-lg font-medium  px-7 rounded-[50px] ">Want to Cook</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

RecipeCard.propTypes = {
    recipe: PropTypes.object,
    handleWantToCookBtn: PropTypes.func,
    recipe_id: PropTypes.number,
    
};

export default RecipeCard;