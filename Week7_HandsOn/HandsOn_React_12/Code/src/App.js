import React, { useState } from "react";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can browse the available flights below:</p>
      <ul>
        <li>✈️ Chennai to Delhi - ₹5,000</li>
        <li>✈️ Mumbai to Kolkata - ₹4,500</li>
        <li>✈️ Bengaluru to Hyderabad - ₹2,800</li>
      </ul>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <p>You can now book your tickets:</p>
      <form>
        <label>
          Destination:{" "}
          <select>
            <option>Chennai to Delhi</option>
            <option>Mumbai to Kolkata</option>
            <option>Bengaluru to Hyderabad</option>
          </select>
        </label>
        <br /><br />
        <label>
          Number of Tickets:{" "}
          <input type="number" min="1" placeholder="Enter count" />
        </label>
        <br /><br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let content = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Flight Ticket Booking App</h1>
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <hr />
      {content}
    </div>
  );
}

export default App;

