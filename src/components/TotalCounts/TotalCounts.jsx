
import PropTypes from 'prop-types';

const TotalCounts = ({totalTimes, totalCalories}) => {
    
    return (
        <div>
             
             <div className='flex gap-7  justify-end pt-3'>
                        <p className='w-24'>Total Time = <br />
                        {totalTimes} minutes</p>
                        <br />
                       <p className='w-24'>Total Calories = <br />
                        {totalCalories} calories</p>
                    </div>
        </div>
    );
};

TotalCounts.propTypes = {
    totalTimes: PropTypes.number,
    totalCalories: PropTypes.number,
};

export default TotalCounts;