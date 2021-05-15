import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LinkItem from "./linkItem";
import background from "../images/bg-shorten-desktop.svg";
import "./shortenPage.css";

const ShortenPage = () => {
  const [input, setInput] = useState([]);
  const [state, setstate] = useState("");

  return (
    <div className="shortenPageMain">
      <div
        className="shortenPage"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form
          className="shortenPageForm"
          onSubmit={(e) => {
            e.preventDefault();
            if (state) {
              setInput([...input, { id: uuidv4(), task: state }]);
              setstate("");
            }
          }}
        >
          <input
            className="input"
            placeholder="Shorten a link here..."
            onChange={(e) => {
              setstate(e.target.value);
            }}
            value={state}
          />
          <button className="inputBtn">Shorten it</button>
        </form>
      </div>{" "}
      <div className="itemList">
        {console.log()}
        {input.map((el) => {
          return <LinkItem input={el} />;
        })}
      </div>
    </div>
  );
};

export default ShortenPage;
