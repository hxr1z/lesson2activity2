import React from 'react';
import ReactDOM from 'react-dom/client';

// App is the parent component
function App() {
  return (
    <>
      <Header />
      <Pizza 
        name="Pizza Spinaci"
        ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
        photo="/pizzas/spinaci.jpg"
      />
      <Pizza 
        name="Pizza Margherita"
        ingredients="Tomato, mozzarella, and basil"
        photo="/pizzas/margherita.jpg"
      />
      <Pizza 
        name="Pizza Funghi"
        ingredients="Tomato, mozzarella, and mushrooms"
        photo="/pizzas/funghi.jpg"
      />
      <Pizza 
        name="Pizza Prosciutto"
        ingredients="Tomato, mozzarella, ham, and arugula"
        photo="/pizzas/prosciutto.jpg"
      />
      <Pizza 
        name="Pizza Salamino"
        ingredients="Tomato, mozzarella, and pepperoni"
        photo="/pizzas/salamino.jpg"
      />
    </>
  );
}

function Header() {
  return <h1>Pizza@Hariz's</h1>;
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photo} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);