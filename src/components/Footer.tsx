import "../styles/components/Footer.css";

export default function Footer() {
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="container footer">
      <div className="footer-left">
        <p>{year} © — Autli. Сделано своими руками</p>
      </div>

      <div className="footer-right">
        <ul>
          <li><a href="https://vk.com/autli_officiall" target="_blank">VK</a></li>
          <li><a href="https://t.me/autli" target="_blank">Telegram</a></li>
        </ul>
      </div>
    </footer>
  );
}