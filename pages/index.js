import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onAdd = () => {
    if (text != "") {
      setList([...list, text]);
      setText("");
    }
  };

  const onRemove = (id) => {
    setList(list.filter((data) => list.indexOf(data) !== id));
  };
  return (
    <div className="px-30 mt-16">
      <h1 className="font-bold text-3xl text-center pt-16">ToDoList</h1>
      <div className="text-center mt-7">
        <input
          id="price"
          className="appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          type="text"
          placeholder="write it"
          value={text}
          onChange={onChange}
        />
        <button
          onClick={onAdd}
          className="px-3 flex-1 bg-orange-500 text-white py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium hover:bg-orange-600"
        >
          Submit
        </button>
      </div>
      <div className="mt-5">
        <ul>
          {list.map((data, i) => (
            <li className="text-center font-medium text-lg mt-1.5" key={i}>
              {data}
              <button
                onClick={() => onRemove(i)}
                className="ml-2 px-3 flex-1 bg-orange-500 text-white py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium hover:bg-orange-600"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
