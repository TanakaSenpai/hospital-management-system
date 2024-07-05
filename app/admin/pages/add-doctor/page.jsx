import React from "react";
import "./styles.css";

const page = () => {
  return (
    <div className="bod">
      <div class="box flex flex-col justify-between">
        <h1 className="text-3xl text-center">Add new doctor</h1>
        <form id="doctorForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="specialty">Specialty:</label>
          <input type="text" id="specialty" name="specialty" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label>Availability:</label>
          <div className="flex gap-4">
            <div>
              <label htmlFor="from" className="mr-3">
                From:
              </label>
              <input type="time" id="from" name="from" required />
            </div>
            <div className="">
              <label htmlFor="to" className="mr-3">
                To:
              </label>
              <input type="time" id="to" name="to" required />
            </div>
          </div>

          <button type="submit" className="bg-primary">Add Doctor</button>
        </form>
      </div>
    </div>
  );
};

export default page;
