// import React, { useState } from "react";
// import RecipeCard from "../components/RecipeCard"; // Correct path for component import

// const PopularRecipes = () => {
//   const [favorites, setFavorites] = useState([]);

//   // Example recipe data
//   const recipes = [
//     { id: 1, name: "Spaghetti Carbonara", image: "src/assets/spagetti carbonara.jpg", description: "Classic Italian pasta" },
//     { id: 2, name: "Chicken Tacos", image: "src/assets/Chicken-Tacos_3.webp", description: "Mexican street food" },
//     { id: 3, name: "Sushi Roll", image: "src/assets/susjhi.jpg", description: "Japanese sushi rolls" },
//     { id: 4, name: "Beef Stroganoff", image: "src/assets/beef.webp", description: "Russian beef dish in creamy sauce" },
//     { id: 5, name: "Pad Thai", image: "src/assets/pad-thai-2.jpg", description: "Popular Thai stir-fried noodles" },
//     { id: 6, name: "Shawarma", image: "src/assets/sawarma.avif", description: "Middle Eastern wrap with spiced meat" },
//     { id: 7, name: "Paella", image: "src/assets/Mixed-Paella-Recipe-1.jpg", description: "Spanish rice dish with seafood" },
//     { id: 8, name: "Chicken Biryani", image: "src/assets/chicken-biryani-5.jpg", description: "Spiced rice and chicken dish from India" },
//     { id: 9, name: "Peking Duck", image: "src/assets/Peking-Duck.jpg", description: "Famous Chinese roast duck" },
//     { id: 10, name: "Falafel", image: "src/assets/Falafel-Pita-FEATURED.jpg", description: "Middle Eastern chickpea fritters" },
//     { id: 11, name: "BBQ Ribs", image: "src/assets/ribs.jpg", description: "American style barbecue ribs" },
//     { id: 12, name: "Fish and Chips", image: "src/assets/fish and chips.webp", description: "Classic British fried fish with fries" },
//     { id: 13, name: "Lasagna", image: "src/assets/lasagna.jpg", description: "Layered Italian pasta dish with meat and cheese" }
//   ];


//   // Function to add a recipe to favorites
//   const addToFavorites = (recipe) => {
//     if (!favorites.includes(recipe)) {
//       setFavorites([...favorites, recipe]);
//     }
//   };

//   return (
//     <div className="recipe-catalog-container p-8">
//       <h1 className="text-4xl font-bold mb-6 text-center">Popular Recipes</h1>
//       <div style={{ gap: '5rem' }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} addToFavorites={addToFavorites} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularRecipes;




//latest code below

import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard"; // Correct path for component import

const PopularRecipes = () => {
  const [favorites, setFavorites] = useState([]);

  // Updated recipe data with full details
  const recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image: "src/assets/spagetti carbonara.jpg",
      description: "Classic Italian pasta",
      ingredients: [
        "Spaghetti (200g)",
        "Egg yolks (2)",
        "Parmesan cheese (50g, grated)",
        "Pancetta (100g, diced)",
        "Freshly ground black pepper",
      ],
      instructions: [
        "Boil water in a large pot with a pinch of salt. Add spaghetti and cook until al dente (firm to the bite). Drain and set aside.",
        "While pasta is cooking, fry pancetta in a pan over medium heat until crispy. Remove from heat and set aside.",
        "In a bowl, whisk together egg yolks and grated Parmesan cheese until smooth.",
        "Toss the hot spaghetti with the pancetta and its rendered fat.",
        "Quickly mix the egg yolk and cheese mixture into the hot pasta. The heat from the pasta will gently cook the eggs, creating a creamy sauce.",
        "Add freshly ground black pepper to taste and serve immediately with extra Parmesan on top."
      ],
      additionalInfo: "Serve immediately with extra cheese and pepper."
    },
    {
      id: 2,
      name: "Chicken Tacos",
      image: "src/assets/Chicken-Tacos_3.webp",
      description: "Mexican street food",
      ingredients: [
        "Chicken breasts (200g, diced)",
        "Taco shells (corn or flour)",
        "Shredded lettuce",
        "Cheddar cheese (grated)",
        "Fresh salsa (tomato, onion, cilantro, lime)",
        "Sour cream (optional)"
      ],
      instructions: [
        "Season diced chicken with salt, pepper, and taco seasoning (optional). Cook the chicken in a pan over medium heat until fully cooked and golden brown.",
        "Warm taco shells in the oven or on a pan until slightly crispy.",
        "To assemble, place cooked chicken in the taco shell.",
        "Top with shredded lettuce, grated cheese, and fresh salsa.",
        "Add a dollop of sour cream if desired, and serve."
      ],
      additionalInfo: "Gluten-free if you use corn tortillas."
    },
    {
      id: 3,
      name: "Sushi Roll",
      image: "src/assets/susjhi.jpg",
      description: "Japanese sushi rolls",
      ingredients: ["Sushi rice", "Nori (seaweed)", "Fish (salmon or tuna)", "Soy sauce", "Wasabi"],
      instructions: ["Cook rice", "Spread rice on nori", "Add fish and roll", "Serve with soy sauce"],
      additionalInfo: "Use fresh fish for best taste."
    },
    {
      id: 4,
      name: "Beef Stroganoff",
      image: "src/assets/beef.webp",
      description: "Russian beef dish in creamy sauce",
      ingredients: [
        "Sushi rice (2 cups, cooked and seasoned with rice vinegar)",
        "Nori sheets (seaweed)",
        "Fresh fish (salmon or tuna, sliced thinly)",
        "Soy sauce",
        "Wasabi",
        "Pickled ginger (optional)"
      ],
      instructions: [
        "Cook sushi rice according to package instructions and season it with rice vinegar. Let the rice cool slightly.",
        "Lay a sheet of nori (seaweed) on a bamboo rolling mat.",
        "Spread a thin layer of rice evenly over the nori, leaving a small edge at the top.",
        "Place thin slices of fresh fish on top of the rice, and gently roll the sushi using the mat.",
        "Slice the roll into bite-sized pieces using a sharp knife.",
        "Serve with soy sauce, wasabi, and pickled ginger on the side."
      ],
      additionalInfo: "Serve with rice or mashed potatoes."
    },
    {
      id: 5,
      name: "Pad Thai",
      image: "src/assets/pad-thai-2.jpg",
      description: "Popular Thai stir-fried noodles",
      ingredients: ["Rice noodles", "Chicken", "Peanuts", "Bean sprouts", "Lime"],
      instructions: ["Soak noodles", "Stir-fry chicken", "Mix with noodles and toppings"],
      additionalInfo: "Garnish with lime and crushed peanuts."
    },
    {
      id: 6,
      name: "Shawarma",
      image: "src/assets/sawarma.avif",
      description: "Middle Eastern wrap with spiced meat",
      ingredients: ["Chicken or lamb", "Pita bread", "Garlic sauce", "Pickles"],
      instructions: ["Cook meat", "Wrap in pita with toppings", "Serve with sauce"],
      additionalInfo: "Add fries inside the wrap for extra crunch."
    },
    {
      id: 7,
      name: "Paella",
      image: "src/assets/Mixed-Paella-Recipe-1.jpg",
      description: "Spanish rice dish with seafood",
      ingredients: ["Rice", "Shrimp", "Mussels", "Saffron", "Peppers"],
      instructions: ["Cook rice with saffron", "Add seafood", "Simmer until fully cooked"],
      additionalInfo: "Use fresh seafood for authentic flavor."
    },
    {
      id: 8,
      name: "Chicken Biryani",
      image: "src/assets/chicken-biryani-5.jpg",
      description: "Spiced rice and chicken dish from India",
      ingredients: ["Chicken", "Basmati rice", "Spices", "Yogurt", "Onions"],
      instructions: ["Marinate chicken", "Cook rice separately", "Layer chicken and rice"],
      additionalInfo: "Top with fried onions and mint."
    },
    {
      id: 9,
      name: "Peking Duck",
      image: "src/assets/Peking-Duck.jpg",
      description: "Famous Chinese roast duck",
      ingredients: ["Duck", "Hoisin sauce", "Pancakes", "Cucumber", "Green onions"],
      instructions: ["Roast duck", "Slice thin", "Serve with pancakes and sauce"],
      additionalInfo: "Traditionally served with thin pancakes."
    },
    {
      id: 10,
      name: "Falafel",
      image: "src/assets/Falafel-Pita-FEATURED.jpg",
      description: "Middle Eastern chickpea fritters",
      ingredients: ["Chickpeas", "Garlic", "Onions", "Cumin", "Parsley"],
      instructions: ["Blend ingredients", "Fry until golden", "Serve in pita"],
      additionalInfo: "Serve with hummus or tahini sauce."
    },
    {
      id: 11,
      name: "BBQ Ribs",
      image: "src/assets/ribs.jpg",
      description: "American style barbecue ribs",
      ingredients: ["Pork ribs", "BBQ sauce", "Spices", "Garlic"],
      instructions: ["Marinate ribs", "Grill slowly", "Baste with BBQ sauce"],
      additionalInfo: "Cook low and slow for tender meat."
    },
    {
      id: 12,
      name: "Fish and Chips",
      image: "src/assets/fish and chips.webp",
      description: "Classic British fried fish with fries",
      ingredients: ["White fish", "Potatoes", "Flour", "Oil", "Malt vinegar"],
      instructions: ["Fry fish in batter", "Serve with fries", "Sprinkle with vinegar"],
      additionalInfo: "Use cod or haddock for traditional flavor."
    },
    {
      id: 13,
      name: "Lasagna",
      image: "src/assets/lasagna.jpg",
      description: "Layered Italian pasta dish with meat and cheese",
      ingredients: ["Lasagna sheets", "Ground beef", "Tomato sauce", "Cheese", "Bechamel sauce"],
      instructions: ["Layer pasta, meat sauce, and cheese", "Bake until golden"],
      additionalInfo: "Allow to cool slightly before serving for easier slicing."
    }
  ];

  // Function to add a recipe to favorites
  const addToFavorites = (recipe) => {
    if (!favorites.includes(recipe)) {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="recipe-catalog-container p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Popular Recipes</h1>
      <div style={{ gap: '5rem' }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} addToFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
