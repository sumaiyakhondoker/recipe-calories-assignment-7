
import PropTypes from 'prop-types';

const UpperTable = ({wantedFoods ,handlePreparing}) => {
    return (
        <div>
            <div>
                    <h2 className='text-2xl font-semibold pt-6 pb-4 border-b-2 text-center mx-10'>Want to cook: {wantedFoods.length}</h2>
                    <div className="overflow-x-auto ">
                        <table className="table ">
                        {/* head */}
                       
                        <thead>
                            <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>

                            </tr>
                        </thead>
                        
                        <tbody className='bg-slate-100'>
                            {
                                wantedFoods.map((food, idx) => (
                            
                            <tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{food.recipe_name}</td>
                            <td>{food.preparing_time} minutes</td>
                            <td>{food.calories} calories</td>
                            <td><button onClick={()=> handlePreparing(food)} className="btn  py-0  bg-[#0be58a]  rounded-[50px] border-none ">Preparing</button></td>
                            
                            </tr>
                          
                            
                           
                                ))
                            }
                            
                          
                        </tbody>
                        </table>
                    </div>
            </div>
        </div>
    );
};

UpperTable.propTypes = {
    wantedFoods: PropTypes.array,
    handlePreparing: PropTypes.func,
};

export default UpperTable;