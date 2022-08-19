import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Form from "./components/form/Form";
import Input from "./components/input/Input";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
    } else if (e.target.type === "email") {
      setUser({ ...user, email: e.target.value });
    }
  };

  const handleClick = () => {
    if (user.name === "") {
      alert("Adınız ve Soyadınız Boş Bırakılamaz");
    } else if (user.email === "") {
      alert("Email Adresiniz Boş Bırakılamaz");
    } else {
      alert(
        "Adınız ve Soyadınız: " +
          user.name +
          " " +
          "Email Adresiniz: " +
          user.email
      );
    }
  };
  return (
    <div className="App">
      <Form>
        <h4>Adınız Soyadınız</h4>
        <Input
          type={"text"}
          value={user.name}
          placeHolder={"Kullanıcı Adı ve Soyadı"}
          onChange={handleChange}
        />
        <h4>Email Adresiniz</h4>
        <Input
          type={"email"}
          placeHolder={"Kullanıcı Email Adresi"}
          value={user.email}
          onChange={handleChange}
        />
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

export default App;
