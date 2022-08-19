import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";

function Basket() {
  const [items, setitems] = useState([]);
  useEffect(async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=5");
    const result = await data.json();
    setitems(result);
  });
  return (
    <div>
      <Header>
        <input placeholder="Search items..." />
        <button>Search</button>
      </Header>
      <Items>
        {items.map((item) => (
          <Item
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
          ></Item>
        ))}
      </Items>
    </div>
  );
}

export default Basket;

const Header = styled.header`
  display: flex;
  min-height: 10vh;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1rem;

  input {
    padding: 0.5rem;
    margin-right: 5px;
    width: 300px;
    outline: none;
  }

  button {
    padding: 0.5rem 2rem;
    margin-right: 5px;
    transition: 0.2s ease;
    cursor: pointer;
  }

  button:hover {
    background: black;
    color: white;
    border: none;
  }
`;
const Items = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  gap: 10px;
  min-height: 80vh;
  width: 90vw;
  margin: 10px auto;
`;
