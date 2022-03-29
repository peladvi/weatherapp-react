import React from "react";
import Search from "./Search";
import "./App.css";
import Current from "./Current";
import Icon from "./Icon";

export default function () {
  return (
    <section>
      <h1>What's your weather?</h1>
      <Search />
      <div class="row">
        <Current />
        <Icon />
      </div>
    </section>
  );
}
