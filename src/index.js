import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// APP COMPONENT
function App() {
  // Get the current time and set open/close hours 
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22; // 10 PM
  
  // The shop is open from 10:00 up to (but not including) 22:00
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <div className="container">
      <Header />
      {/* Pass the 'isOpen' status down as a prop */}
      <Menu isOpen={isOpen} />
      <Footer isOpen={isOpen} />
    </div>
  );
}

// HEADER COMPONENT (Unchanged)
function Header() {
  return (
    <header className="header">
      <h1>Hariz's Pizzeria</h1>
    </header>
  );
}

// MENU COMPONENT (Refactored)
function Menu(props) {
  // Receive the 'isOpen' prop from App
  const { isOpen } = props;
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          {/* This tagline is now conditional  */}
          {isOpen && (
            <p>
              Authentic Italian cuisine, all from our stone oven
            </p>
          )}

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

// PIZZA COMPONENT (Refactored)
// This component now takes a single 'pizzaObj' prop
function Pizza(props) {
  const { pizzaObj } = props;

  // Conditionally apply a CSS class if the pizza is sold out
  const pizzaClass = pizzaObj.soldOut ? 'pizza sold-out' : 'pizza';

  return (
    <li className={pizzaClass}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        
        {/* Conditionally render the price or "SOLD OUT"
          based on the 'soldOut' boolean
        */}
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}

function Order() {
  return (
    <div className="order">
      {/* Specific message from requirement [cite: 46] */}
      <p>We're currently open</p>
      {/* Button is shown when open [cite: 47] */}
      <button className="btn">Order</button>
    </div>
  );
}

// FOOTER COMPONENT (Refactored)
function Footer(props) {
  // Receive the 'isOpen' prop from App
  const { isOpen } = props;

  return (
    <footer className="footer">
      {isOpen ? (
        // Render the new Order component when open 
        <Order />
      ) : (
        // Specific "closed" message from requirement 
        <p>Sorry, we're closed</p>
      )}
    </footer>
  );
}

// RENDER (Syntax error fixed)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);