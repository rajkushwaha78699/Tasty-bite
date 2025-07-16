import React from 'react';

const foodItems = [
  { id: 1, name: "Margherita Pizza", price: "₹250", image: "https://i.imgur.com/eVmVgzr.jpg" },
  { id: 2, name: "Pasta Alfredo", price: "₹200", image: "https://i.imgur.com/7l6ZhtL.jpg" },
  { id: 3, name: "Veg Burger", price: "₹150", image: "https://i.imgur.com/1JgJXHn.jpg" },
  { id: 4, name: "Paneer Roll", price: "₹120", image: "https://i.imgur.com/B3pM9p1.jpg" }
];

function App() {
  return (
    <div className="app">
      <header>
        <h1>🍕 TastyBite</h1>
        <p>Your daily dose of deliciousness</p>
      </header>

      <section className="menu">
        <h2>🍽️ Our Menu</h2>
        <div className="cards">
          {foodItems.map(item => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>📍 Contact us at order@tastybite.com | 📞 123-456-7890</p>
        <p>© 2025 TastyBite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
