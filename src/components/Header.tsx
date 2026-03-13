import "../styles/components/Header.css";

export default function Header() {
  return (
    <div className="headerComponent container">
      <div className="top">
        <h1>Autli</h1>
      </div>

      <div className="bottom">
        {/* <ul className="navigateHeaderBottom">
          <li>Главная</li>
          <li>Обо мне</li>
        </ul> */}
      </div>
    </div>
  );
}