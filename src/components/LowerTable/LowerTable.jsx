
import PropTypes from 'prop-types';

import TotalCounts from '../TotalCounts/TotalCounts';

const LowerTable = ({preparingFoods, totalTimes, totalCalories}) => {
    // console.log(preparingFoods);
  
   
    
    return (
        <div>
            <div>
                    <h2 className='text-2xl font-semibold pt-6 pb-4 border-b-2 mx-10 text-center'>Currently cooking: {preparingFoods.length}</h2>
                    <div className="overflow-x-auto ">
                        
                        <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th> Calories</th>

                            </tr>
                        </thead>
                        <tbody className='bg-slate-100'>
                            {
                                preparingFoods.map((food,idx) => (
                            <tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{food.recipe_name}</td>
                            <td>{food.preparing_time} minutes</td>
                            <td>{food.calories} calories</td>
                            
                            </tr>
                                ))
                            }
                            
                            
                        </tbody>
                        </table>
                    </div>
                    </div>

                   <TotalCounts totalTimes ={totalTimes} totalCalories ={totalCalories}></TotalCounts>
        </div>
    );
};

LowerTable.propTypes = {
    preparingFoods: PropTypes.array,
    totalTimes : PropTypes.number,
    totalCalories: PropTypes.number,
};

export default LowerTable;