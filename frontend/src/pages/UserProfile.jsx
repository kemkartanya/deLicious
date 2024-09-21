import React from "react";

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
  return (
    <div className="p-5">
      <div className="flex justify-between gap-2">
        <div>
          <Toaster />
          <div className="text-xl font-bold">User Profile & Preferences</div>
          <div className="mb-4">
            Save your preferences for personalized recipe suggestions in the future
          </div>
        </div>
        <button className="btn btn-outline btn-success">Save</button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 m-3 gap-4">
        {/* Favorite Meats */}
        <div>
          <div className="text-lg text-[#4B4F54] mb-1 font-bold">
            Favorite meats
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {meat_preferences.map((meat) => (
              <div className="flex gap-2 items-center" key={meat}>
                <input type="checkbox" className="checkbox checkbox-sm" />
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
            {dietary_restrictions.map((restriction) => (
              <div className="flex gap-2 items-center" key={restriction}>
                <input type="checkbox" className="checkbox checkbox-sm" />
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
            {spices_tolerance.map((spice) => (
              <div className="flex gap-2 items-center" key={spice}>
                <input type="radio" name="radio-spice" className="radio radio-sm" defaultChecked />
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
            {cooking_skill_levels.map((skill) => (
              <div className="flex gap-2 items-center" key={skill}>
                <input type="radio" name="radio-skill" className="radio radio-sm" defaultChecked />
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
                <input type="checkbox" className="checkbox checkbox-sm" />
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
