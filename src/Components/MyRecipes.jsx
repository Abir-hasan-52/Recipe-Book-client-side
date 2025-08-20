import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MyRecipeCard from './MyRecipeCard';

const MyRecipes = () => {
    const initialRecipes=useLoaderData();
    const [recipes,setRecipes]=useState(initialRecipes)
    // console.log(initialRecipes)
  return (
        <div>
             <div className='my-12'>
      <h2 className="text-2xl font-bold mb-2 text-center">My Personal Recipe Book</h2>
      <p className="text-gray-600 text-sm mb-6 text-center">
  Here are all the delicious recipes you've created and saved. Manage your dishes, update ingredients, or delete the ones you no longer love. Your kitchen, your rules!
      </p>


             </div>
             <div >
                {
                recipes.map(recipe=><MyRecipeCard
            key={recipe._id}
            recipes={recipes}
            setRecipes={setRecipes}
                recipe={recipe} 
                 ></MyRecipeCard>)
            }
      </div>
             <div className='flex justify-center items-center mb-25'>
                <Link to='/' className='btn btn-primary'>Go to Home Page</Link>
      </div>
    </div>
  );
};

export default MyRecipes;
