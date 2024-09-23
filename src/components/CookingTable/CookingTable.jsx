
import PropTypes from 'prop-types';
import UpperTable from '../UpperTable/UpperTable';
import LowerTable from '../LowerTable/LowerTable';


const CookingTable = ({wantedFoods, handlePreparing ,preparingFoods, totalTimes, totalCalories}) => {
    
    return (
        <div className='rounded-2xl border-2 lg:px-2 pb-6'>
            {/* upper part */}
            <UpperTable wantedFoods ={wantedFoods} handlePreparing ={handlePreparing}></UpperTable>
            
            {/* lower part */}
            <LowerTable preparingFoods ={preparingFoods} totalTimes ={totalTimes} totalCalories={totalCalories}></LowerTable>



                
            
        </div>
    );
};

CookingTable.propTypes = {
    wantedFoods: PropTypes.array,
    handlePreparing: PropTypes.func,
    preparingFoods: PropTypes.array,
    totalTimes: PropTypes.number,
    totalCalories: PropTypes.number,
    
};

export default CookingTable;