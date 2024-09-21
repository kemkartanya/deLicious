import axios from "axios";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const meat_preferences = [
  "chicken",
  "mutton",
  "goat",
  "lamb",
  "fish",
  "prawns",
  "crab",
  "pomfret",
  "rohu",
  "catla",
  "hilsa",
  "mackerel",
  "sardines",
  "tuna",
  "buffalo",
  "quail",
  "duck",
  "turkey",
  "rabbit",
  "venison",
  "pigeon",
  "partridge",
  "carp",
  "catfish",
  "tilapia",
  "salmon",
  "trout",
  "squid",
  "octopus",
  "lobster",
  "mussels",
  "clams",
  "oysters",
  "eel",
  "snapper",
  "cod",
  "bhetki",
  "surmai",
  "bombil",
  "bangda",
  "kingfish",
  "silverfish",
  "anchovies",
];
const dietary_restrictions = [
  "vegetarian",
  "vegan",
  "jain",
  "lacto-vegetarian",
  "ovo-vegetarian",
  "sattvic",
  "no-onion-no-garlic",
  "halal",
  "navratri-fasting",
  "ekadashi-fasting",
  "ramadan-fasting",
  "gluten-free",
  "dairy-free",
  "lactose-free",
  "diabetic-friendly",
  "low-salt",
  "low-oil",
  "no-root-vegetables",
  "no-leafy-greens",
  "no-nightshades",
  "ayurvedic",
  "pitta-pacifying",
  "vata-pacifying",
  "kapha-pacifying",
  "no-processed-foods",
  "sugar-free",
  "no-refined-flour",
];
const spices_tolerance = [
  "no spice",
  "mild",
  "medium",
  "medium-hot",
  "hot",
  "very hot",
];
const cooking_skill_levels = [
  "absolute beginner",
  "novice",
  "beginner",
  "amateur",
  "intermediate",
];
const cuisine_types = [
  "Italian",
  "Chinese",
  "Japanese",
  "Indian",
  "French",
  "Mexican",
  "Thai",
  "Spanish",
];

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userPref, setUserPref] = useState({
    favorite_meats: [],
    cooking_skill_level: "",
    cuisine_types: [],
    dietary_restrictions: [],
    spice_tolerance: "",
  });

  useEffect(() => {
    // Load preferences from localStorage
    const storedPreferences = JSON.parse(localStorage.getItem("user"));
    if (storedPreferences) {
      setUserPref({
        favorite_meats: storedPreferences.favorite_meats || [],
        cooking_skill_level: storedPreferences.cooking_skill_level || "",
        cuisine_types: storedPreferences.cuisine_types || [],
        dietary_restrictions: storedPreferences.dietary_restrictions || [],
        spice_tolerance: storedPreferences.spice_tolerance || "",
      });
    }
  }, []);

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;

    // Ensure it's an array category, i.e., for checkboxes
    setUserPref((prev) => ({
      ...(prev || []),
      [category]: checked
        ? [...prev[category], value] // Add the item if checked
        : prev[category].filter((item) => item !== value), // Remove if unchecked
    }));
  };

  const handleRadioChange = (e, category) => {
    setUserPref((prev) => ({
      ...prev,
      [category]: e.target.value,
    }));
  };

  const savePreference = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/user-preference",
        {
          userId: user.id,
          favorite_meats: userPref.favorite_meats,
          cooking_skill_level: userPref.cooking_skill_level,
          cuisine_types: userPref.cuisine_types,
          dietary_restrictions: userPref.dietary_restrictions,
          spice_tolerance: userPref.spice_tolerance,
        }
      );

      if (data.status === "success") {
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-5">
      <div className="flex justify-between gap-2 bg-stone-100 p-2">
        <div className="w-full flex justify-center">
          <Toaster />
          <div>
          <div className="text-xl font-bold mx-16">User Profile & Preferences</div>
          <div className="mb-4">
            Save your preferences for personalized recipe suggestions in future
          </div>
          </div>
        </div>
        <button
          className="btn btn-outline bg-red-700 mt-2 m-2 text-white"
          onClick={savePreference}
        >
          Save
        </button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 m-3 gap-4">
        {/* Favorite Meats */}
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">
            Favorite meats
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {meat_preferences?.map((meat) => (
              <div className="flex gap-2 items-center" key={meat}>
                <input
                  type="checkbox"
                  value={meat}
                  checked={userPref?.favorite_meats?.includes(meat)}
                  onChange={(e) => handleCheckboxChange(e, "favorite_meats")}
                  className="checkbox checkbox-sm"
                />
                <label className="text-base">{meat}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Dietary Restrictions */}
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">
            Dietary restrictions
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {dietary_restrictions?.map((restriction) => (
              <div className="flex gap-2 items-center" key={restriction}>
                <input
                  type="checkbox"
                  value={restriction}
                  checked={userPref?.dietary_restrictions?.includes(
                    restriction
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(e, "dietary_restrictions")
                  }
                  className="checkbox checkbox-sm"
                />
                <label className="text-base">{restriction}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Spice Tolerance */}
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">
            Spice tolerance
          </div>
          <div className="grid grid-cols-2 gap-2">
            {spices_tolerance?.map((spice) => (
              <div className="flex gap-2 items-center" key={spice}>
                <input
                  type="radio"
                  name="radio-spice"
                  value={spice}
                  checked={userPref?.spice_tolerance === spice}
                  onChange={(e) => handleRadioChange(e, "spice_tolerance")}
                  className="radio radio-sm"
                />
                <label className="text-base">{spice}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Cooking Skill Level */}
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">
            Cooking skill levels
          </div>
          <div className="grid grid-cols-2 gap-2">
            {cooking_skill_levels?.map((skill) => (
              <div className="flex gap-2 items-center" key={skill}>
                <input
                  type="radio"
                  name="cooking_skill_level"
                  value={skill}
                  checked={userPref?.cooking_skill_level === skill}
                  onChange={(e) => handleRadioChange(e, "cooking_skill_level")}
                  className="radio radio-sm"
                />
                <label className="text-base">{skill}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Cuisine Types */}
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">
            Cuisine Types
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {cuisine_types.map((cuisine) => (
              <div className="flex gap-2 items-center" key={cuisine}>
                <input
                  type="checkbox"
                  value={cuisine}
                  checked={userPref?.cuisine_types?.includes(cuisine)}
                  onChange={(e) => handleCheckboxChange(e, "cuisine_types")}
                  className="checkbox checkbox-sm"
                />
                <label className="text-base">{cuisine}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
