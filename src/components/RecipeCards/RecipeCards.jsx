

import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import CookingTable from '../CookingTable/CookingTable';


const RecipeCards = () => {
    const [recipes, setRecipes] = useState([])
    const [wantedFoods, setWantedFoods] = useState([])
    const [preparingFoods , setPreparingFoods] = useState([])

    
    const [totalTimes, setTotalTimes] = useState(0)
    const [totalCalories, setTotalCalories] = useState(0)

    // const cookingFood = []
    const handlePreparing = food =>{
const {preparing_time, calories} = food
        // total times
        let updatedTotalTimes = totalTimes + preparing_time;
        setTotalTimes(updatedTotalTimes)

         // total calories
         let updatedTotalCalories = totalCalories + calories;
         setTotalCalories(updatedTotalCalories)

        
     const cookFoods = [...preparingFoods, food]
     setPreparingFoods(cookFoods)
    // console.log(cookFoods);






        // let currentlyCookingFoods = []
        // const cookFoods = recipes.filter(recipe => recipe.recipe_id === food.recipe_id)
        // const currentlyCookingFoods = [...cookFoods]
        // console.log(currentlyCookingFoods);


        // const cookFoods = wantedFoods.filter(wantedFood => wantedFood.recipe_id === food.recipe_id)
         
        //  console.log(cookFoods);


        // cookFoods.map(cookFood =>currentlyCookingFoods.push(cookFood))
        // console.log(currentlyCookingFoods);
         
        // setPreparingFood(cookFood)

        const remainingFood = wantedFoods.filter(item => item.recipe_id !==  food.recipe_id);
       
            setWantedFoods(remainingFood);
 

     
      
        // const cookingFood = wantedFoods.filter(item => item.recipe_id ===  food.recipe_id);
        // const currentCookingFood = [...cookingFood, food]
        // setPreparingFood(currentCookingFood)
        // console.log(preparingFood);

        
        
    }

    const handleWantToCookBtn =(item)=>{
       
        const isExist = wantedFoods.find(food => food.recipe_id == item.recipe_id)
        if(!isExist){
            
            setWantedFoods([...wantedFoods, item]);
        }
        else{
            alert('already added')
        }
       
    }

 
    
    useEffect(()=>{
        fetch('./recipe-data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className=' my-24 '>
            <div className='text-center'>
            <h1 className='text-4xl font-semibold mb-0'>Our Recipes</h1>
            <p className='text-gray-500 mt-6 mb-12 lg:w-[820px] mx-auto'>Cooking is the art of transforming simple ingredients into delicious, nourishing meals. Its a joyful, creative process that brings people together around the table.</p>
            </div>
            {/* lower part container */}
            <div className='flex justify-between gap-5'>

                {/* cards container */}
                <div className='lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                
                    {
                        recipes.map((recipe,idx) => <RecipeCard key={idx} recipe ={recipe} handleWantToCookBtn ={handleWantToCookBtn}></RecipeCard>)
                    }
                </div>

            {/* cooking tables */}
                <div className='lg:w-2/5 '>
                    <CookingTable wantedFoods ={wantedFoods} handlePreparing ={handlePreparing} preparingFoods = {preparingFoods} totalTimes ={totalTimes} totalCalories ={totalCalories}></CookingTable>
                    
                </div>
            </div>
        </div>
    );
};



export default RecipeCards;