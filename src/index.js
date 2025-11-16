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

function App() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <div className="container">
      <Header />
      <Menu isOpen={isOpen} />
      <Footer isOpen={isOpen} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Hariz's Pizzeria</h1>
    </header>
  );
}

function Menu(props) {
  const { isOpen } = props;
  const numPizzas = pizzaData.length;

  const [query, setQuery] = React.useState("");

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a pizza..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {numPizzas > 0 ? (
        <>
          {isOpen && (
            <p>
              Authentic Italian cuisine, all from our stone oven
            </p>
          )}

          {filteredPizzas.length > 0 ? (
            <ul className="pizzas">
              {filteredPizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          ) : (
            <p>No pizzas found matching your search. Please try again!</p>
          )}
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza(props) {
  const { pizzaObj } = props;
  const pizzaClass = pizzaObj.soldOut ? 'pizza sold-out' : 'pizza';

  return (
    <li className={pizzaClass}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
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
      <p>We're currently open</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer(props) {
  const { isOpen } = props;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>Sorry, we're closed</p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);