import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzasData } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

function Header() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const openingHour = hour >= openHour && hour < closeHour;

  return (
    <div className="font-nunito">
      <div className="absolute left-8 top-2.5 px-8 py-4 text-slate-900">
        It's{" "}
        {new Date().toLocaleTimeString("en-JP", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}
        .<br></br>
        {openingHour ? (
          <p className="text-lg">
            We're now<span class="text-red-500"> OPEN</span> until 22:00.
          </p>
        ) : (
          <p className="text-lg">
            Preparing... Currently we're{" "}
            <span className="text-red-500">CLOSED.</span>
          </p>
        )}
      </div>
      <div>
        <h1 className="py-8 text-center font-nunito text-5xl font-bold uppercase tracking-wider text-yellow-500">
          Tuntun's Tasty Pizza
        </h1>
        <div className="fixed right-0 top-0">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-yellow-500 px-8 py-4 font-nunito text-slate-50">
      <div className="text-center text-lg">
        Store Hours: Sun - Thur, 12:00 - 22:00 <br></br>
        Address: 3-14 Kinoko Avenue, Capybara Land<br></br>
        TEL: 010 8820 943
      </div>
    </footer>
  );
}

function Menu() {
  return (
    <div className="mx-8 p-6">
      <h2 className="mx-auto mb-10 flex w-fit items-center justify-center border-y-2 border-rose-700/60 p-2 font-nunito text-2xl font-bold uppercase leading-7 text-rose-700/80 sm:truncate sm:text-3xl">
        Menu
      </h2>
      <div>
        <ul className="grid grid-cols-3 grid-rows-2 justify-items-center gap-x-6 gap-y-6">
          {pizzasData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <>
      <li className="font-nunito md:w-48 lg:w-64">
        <div className="flex h-full flex-col space-y-2 py-4">
          <img
            src={pizzaObj.photoName}
            alt={pizzaObj.photoName}
            className="w-32 rounded-lg md:w-48 lg:w-64"
          />
          <h3 className="text-2xl font-bold">{pizzaObj.name}</h3>
          <p className="text-start text-slate-500">{pizzaObj.ingredients}</p>
          <div className="flex-grow" />
          <div className="text-xl font-bold">
            {pizzaObj.soldOut ? (
              <span className="text-red-500">SOLD OUT</span>
            ) : (
              <span>${pizzaObj.price}</span>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

function Button() {
  return (
    <div>
      <button className="m-10 flex rounded-full bg-yellow-500 px-4 py-2 font-nunito text-lg font-extrabold text-slate-50">
        Add to cart
      </button>
    </div>
  );
}
