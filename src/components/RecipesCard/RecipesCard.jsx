import food from '../../../images/food2.png'
import { LuClock3 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types';

const RecipesCard = props => {
    return (
        <div className=' my-24 '>
            <div className='text-center'>
            <h1 className='text-4xl font-semibold mb-0'>Our Recipes</h1>
            <p className='text-gray-500 mt-6 mb-12 lg:w-[820px] mx-auto'>Cooking is the art of transforming simple ingredients into delicious, nourishing meals. It's a joyful, creative process that brings people together around the table.</p>
            </div>
            {/* lower part container */}
            <div className='flex justify-between'>
                {/* card container */}
                <div className='lg:w-3/5'>
                    {/* card 1*/}
                <div className="card bg-base-100 w-[380px] shadow-xl">
                    <figure className="px-6 pt-6 ">
                    <img 
                    src={food}
                    alt="Shoes"
                    className="rounded-2xl" />
                    </figure>
                    <div className="card-body ">
                    <h2 className="card-title ">Chicken Caesar Salad</h2>
                    <p className='text-gray-400 '>Classic Italian pasta dish with savory meat sauce.</p>
                    <hr />

                    <div>
                        <h4 className='text-lg font-medium'>Ingredients: 6</h4>
                        
                            <ul className=' text-gray-400 py-4'>
                                <li>500g ground beef</li>
                                <li>onion, chopped</li>
                                <li>cloves garlic, minced</li>
                            </ul>
                            <hr />
                            <div className='py-6 text-gray-500  flex '>
                                <p className='flex items-center gap-1'><LuClock3></LuClock3><span>30 min</span></p>
                                <p className='flex items-center gap-1'><RiFireLine></RiFireLine><span>600 calories</span></p>
                            </div>
                        
                    </div>
                    <div className="card-actions">
                    <button className="btn bg-[#0be58a] text-lg font-medium  px-7 rounded-[50px] ">Want to Cook</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className='lg:w-2/5 '>
                    {/* upper part */}
                    <div>
                    <h2 className='text-2xl font-semibold pt-6 pb-4 border-b-2 text-center'>Want to cook: 01</h2>
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
                            {/* row 1 */}
                            <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className="btn  py-0  bg-[#0be58a]  rounded-[50px] border-none ">Preparing</button></td>
                            {/* <button className="btn mt-3  py-0  bg-[#0be58a]  rounded-[50px] border-none ">Preparing</button> */}
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="hover">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                    {/* lower part */}
                    <div>
                    <h2 className='text-2xl font-semibold pt-6 pb-4 border-b-2 text-center'>Currently cooking: 02</h2>
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
                            {/* row 1 */}
                            <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="hover">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>

                    <div className='flex gap-9  justify-end pt-3'>
                        <p className='w-24'>Total Time = <br />
                        45 minutes</p>
                        <br />
                       <p className='w-24'>Total Calories = <br />
                        1050 calories</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

RecipesCard.propTypes = {
    
};

export default RecipesCard;