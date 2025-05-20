import React from 'react';
import { useLoaderData } from 'react-router';
import MyRecipeCard from './MyRecipeCard';

const MyRecipes = () => {
    const recipes=useLoaderData();
    console.log(recipes)
    return (
        <div>
            MyRecipes
             <div >
                {
                recipes.map(recipe=><MyRecipeCard
               key={recipe.id} recipe={recipe}  ></MyRecipeCard>)
            }
             </div>
        </div>
    );
};

export default MyRecipes;