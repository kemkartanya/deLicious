import React from "react";

const Chatbot = () => {
  return (
    <div>
      <div className="m-4">Receipe Generator</div>
      <div className="p-6">
        <textarea
          className="rounded w-full bg-[#FECFCC] p-5"
          placeholder="write what you want..."
          rows={15}
        />
        <button className="btn w-full">Generate Receipe</button>
      </div>
    </div>
  );
};

export default Chatbot;
