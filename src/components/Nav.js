import React, { useEffect, useState } from "react";
import "./Nav.css"
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.screenY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    return () => {
        window.removeEventListener("scroll", () => {})
    };
}, []);

const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
};

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src="https://about.netflix.com/images/logo.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />

      <input 
      value={searchValue} 
      onChange={handleChange}
      className="nav__input"
      type="text"
      placeholder="제목, 이름으로 검색하세요."
      />

      <img 
        alt="User logged" 
        src="https://avatars.githubusercontent.com/u/3025708?v=4"
        className="nav__avatar"
      />
    </nav>
  );
}
