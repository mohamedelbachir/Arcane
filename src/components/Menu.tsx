import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();

  function openHome() {
    navigate("/");
  }

  function openAbout() {
    navigate("/about");
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          <a href="#" onClick={openHome}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={openAbout}>
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
