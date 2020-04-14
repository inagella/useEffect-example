import React from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = React.useState(
    window.localStorage.getItem("storageName" || "")
  );
  function handleChange(event) {
    setName(event.target.value);
  }
  React.useEffect(() => {
    window.localStorage.setItem("storageName", name);
  });
  return (
    <div className="App">
      <form>
        <label htmlFor="name">Name:</label>
        <input value={name} id="name" onChange={handleChange} type="text" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your Name"}
    </div>
  );
}
