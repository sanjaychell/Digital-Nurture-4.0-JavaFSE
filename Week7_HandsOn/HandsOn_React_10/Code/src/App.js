import React from "react";

function App() {
  // Object array of office spaces
  const officeSpaces = [
    {
      name: "Skyline Workspace",
      rent: 50000,
      address: "123 MG Road, Bengaluru",
      image: "https://source.roboflow.com/Ys41lo3OA6QxJYVMEy8Q7PGQUA53/8H6Awj3arCG74EVOowc9/original.jpg"
    },
   
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental App</h1>

      {officeSpaces.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            margin: "20px auto",
            padding: "15px",
            maxWidth: "400px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green", fontWeight: "bold" }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;


