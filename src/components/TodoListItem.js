import React, { useContext, useState } from "react";
import { Context } from "../utils/context";
import { actionType } from "../utils/reduser";

export default function TodoItem({ id, title, complete }) {
  const { dispatch } = useContext(Context);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={complete}
          onChange={() => dispatch({ type: actionType.TOGGLE, payload: id })}
        />
        <span></span>
        {title}
      </label>
      <span>
        <button onClick={() => console.log("EDIT")}>R</button>
        <button
          onClick={() => dispatch({ type: actionType.REMOVE, payload: id })}
        >
          D
        </button>
      </span>
    </li>
  );
}
