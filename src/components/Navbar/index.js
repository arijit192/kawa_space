import Style from "./Navbar.module.css";

export default function Navbar() {
  const links = ["Product", "Download", "Pricing"];
  return (
    <div className={Style.navbar}>
      <div>
        <p>Logo</p>
      </div>
      <div className={Style.navlinks}>
        {links.map((link) => (
          <div key={link}>{link}</div>
        ))}
      </div>
    </div>
  );
}
