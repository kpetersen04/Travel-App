import { Link } from "react-router-dom";

const Header = () => {
  const navigationLinks = [
    { title: "Home", slug: "/" },
    { title: "CountryPage", slug: "countries/:id" },
    { title: "AllCountries", slug: "/countries" },

  ];

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            {navigationLinks.map((link, idx) => (
              <Link className="header_links" key={idx} to={link.slug}>
                <li> {link.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
