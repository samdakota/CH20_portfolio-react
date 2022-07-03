import React from "react";

function Nav() {
  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   currentCategory,
  //   contactSelected,
  //   setContactSelected,
  // } = props;

  // useEffect(() => {
  //   document.title = currentCategory.name;
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">About me</a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio">Portfolio</a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
