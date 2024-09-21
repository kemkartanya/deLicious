import axios from "axios";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const suggestions = [
  "Delicious Chicken Curry",
  "Spiced Rohu Fish Curry",
  "Fried Catla Fish",
  "Scrambled Eggs",
  "Homemade Crispy Chicken Nuggets",
  "Crispy Fish Fingers",
];

const Chatbot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState("");

  const nextSuggestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
  };

  const prevSuggestion = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + suggestions.length) % suggestions.length
    );
  };

  const getDisplayedSuggestions = () => {
    const length = suggestions.length;
    const displayed = [];

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + length) % length; // wraps around
      displayed.push(suggestions[index]);
    }

    return displayed;
  };

  const displayedSuggestions = getDisplayedSuggestions();

  const handleSuggestionClick = (suggestion) => {
    setTextAreaValue(suggestion);
  };

  const createReceipe = async () => {
    try {
      const userPref = localStorage.getItem("user");

      const { data } = await axios.post(
        "http://localhost:8000/api/v1/recipes",
        {
          values:
            textAreaValue +
            "User Preference: " +
            " favorite meats: " +
            userPref.favorite_meats +
            "cooking_skill_level" +
            userPref.cooking_skill_level +
            "cuisine_types: " +
            userPref.cuisine_types +
            "dietary_restrictions: " +
            userPref.dietary_restrictions +
            "spice_tolerance: " +
            userPref.spice_tolerance,
        }
      );

      console.log(data);
    } catch (error) {
      console.error(error);
    }
    console.log(textAreaValue);
  };

  return (
    <div className="flex flex-col overflow-hidden" style={{ height: "90vh" }}>
      <div className="m-4 p-4 flex" style={{ height: "75%" }}>
        <div className="chat chat-start w-1/2 m-2">
          <div className="chat-bubble bg-red-700">Delicious Chicken Curry</div>
        </div>
        <div className="chat chat-end w-2/5 m-2">
          <div className="chat-bubble">
            A flavorful and aromatic chicken curry that's perfect for any
            occasion.
          </div>
        </div>
      </div>
      <div className="suggestions flex items-center justify-center m-4">
        <button
          onClick={prevSuggestion}
          className="btn btn-circle mx-4 bg-red-700 text-white"
        >
          ❮
        </button>
        <div className="flex items-center justify-center space-x-10">
          {displayedSuggestions.map((suggestion, index) => (
            <span
              key={index}
              className="font-bold p-4 bg-stone-100 rounded-md cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </span>
          ))}
        </div>
        <button
          onClick={nextSuggestion}
          className="btn btn-circle mx-4 bg-red-700 text-white"
        >
          ❯
        </button>
      </div>
      <div className="px-10 py-5 flex-grow flex flex-col justify-end overflow-auto">
        <div className="flex ">
          <textarea
            className="rounded w-full bg-[#d4d4d4] p-5 resize-none "
            placeholder="write what you want..."
            rows={1}
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          {/* <button className="btn mx-4 h-full"><FiSend className="w-full h-1/2"/></button> */}
          <button
            className="btn mx-1 h-full bg-red-700 text-white"
            onClick={createReceipe}
          >
            Create My Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
