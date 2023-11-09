import React, { useEffect, useState } from "react";

function ToyForm({ onNewToySubmit }) {
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  function handleToyImageChange(e) {
    setToyImage(e.target.value)
  }

  function handleToyNameChange(e) {
    setToyName(e.target.value)
  }

  function handleToySubmit(e) {
    e.preventDefault();
    const toyData = {
      toyName: toyName,
      toyImage: toyImage
    }
    onNewToySubmit(toyData)
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleToySubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleToyNameChange}
          value={toyName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleToyImageChange}
          value={toyImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
