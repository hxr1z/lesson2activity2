import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <>
      <Header />
      <Pizza 
        name="Pizza Spinaci"
        ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
        photo="/pizzas/spinaci.jpg"
        price="$10.00"
      />
      <Pizza 
        name="Pizza Margherita"
        ingredients="Tomato, mozzarella, and basil"
        photo="/pizzas/margherita.jpg"
        price="$8.00"
      />
      <Pizza 
        name="Pizza Funghi"
        ingredients="Tomato, mozzarella, and mushrooms"
        photo="/pizzas/funghi.jpg"
        price="$9.00"
      />
      <Pizza 
        name="Pizza Prosciutto"
        ingredients="Tomato, mozzarella, ham, and arugula"
        photo="/pizzas/prosciutto.jpg"
        price="$11.00"
      />
      <Pizza 
        name="Pizza Salamino"
        ingredients="Tomato, mozzarella, and pepperoni"
        photo="/pizzas/salamino.jpg"
        price="$10.50"
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
      <p>{props.price}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//Demo Conditional rendering
//Method 1: If statements 
//Requirements:
//If age >=18 then display "Thanks for the purchase"
//Else age <18, then display "Sorry you're not allowed"

let message = <h1>Thanks for the purchase</h1>
root.render(message);
