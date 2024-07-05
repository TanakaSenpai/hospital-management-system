import React from "react";
import "./styles.css";

const page = () => {
  return (
    <div className="bod">
      <div class="box flex flex-col justify-between">
        <h1 className="text-3xl text-center">Add new assistant</h1>
        <form id="doctorForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit" className="bg-primary">Add assistant</button>
        </form>
      </div>
    </div>
  );
};

export default page;
