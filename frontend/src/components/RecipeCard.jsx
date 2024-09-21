// import React from "react";

// const RecipeCard = ({ recipe, addToFavorites }) => {
//   return (
//     <div className="recipe-card bg-white shadow-lg rounded-lg overflow-hidden">
//       <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
//       <div className="p-4">
//         <h3 className="text-2xl font-semibold">{recipe.name}</h3>
//         <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
//         <div className="mt-4 flex justify-between items-center">
//           <button
//             className="btn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-all duration-300"
//             onClick={() => alert(`Showing recipe for ${recipe.name}`)}
//           >
//             See Recipe
//           </button>
//           <button
//             className="btn bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300"
//             onClick={() => addToFavorites(recipe)}
//           >
//             Add to Favorites
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;








//latest code below

import React, { useState } from "react";

const RecipeCard = ({ recipe, addToFavorites }) => {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="recipe-card bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold">{recipe.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button
            className="btn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-all duration-300"
            onClick={toggleModal}
          >
            See Recipe
          </button>
          <button
            className="btn bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
            onClick={() => addToFavorites(recipe)}
          >
            Add to Favorites
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4">{recipe.name}</h2>
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc ml-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Instructions:</h3>
            <ol className="list-decimal ml-5">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <h3 className="text-xl font-semibold mt-4 mb-2">Additional Information:</h3>
            <p>{recipe.additionalInfo}</p>

            <button
              className="mt-4 btn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-all duration-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
