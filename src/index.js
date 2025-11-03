import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <>
      <Header/>
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
      <Footer/>
    </>
  );
}

function Header() {
  return <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Hariz's Pizzeria</h1>;
}

function Pizza(info) {
  return (
    <div className='menu'>
      <img src={info.photo}/>
      <h2>{info.name}</h2>
      <p>{info.ingredients}</p>
      <p>{info.price}</p>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>"We're currently open".</footer>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
