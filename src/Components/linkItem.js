import React, { useState, useEffect } from "react";
import "./linkItem.css";
import axios from "axios";

const LinkItem = (props) => {
  const postData = async () => {
    const { data } = await axios.post("http://localhost:5000/url", {
      longUrl: props.input.task,
    });
  };
  useEffect(() => {
    postData();
  }, [props.input.task]);

  useEffect(() => {
    getData();
  }, []);
  const [copied, setcopied] = useState("copy");
  const changeCopied = () => {
    if (copied === "copy") setcopied("copied");
  };
  return (
    <div className="item">
      <p className="itemLink">{props.input.task}</p>
      <button className="itemBtn" onClick={() => changeCopied()}>
        {copied}
      </button>
    </div>
  );
};

export default LinkItem;
