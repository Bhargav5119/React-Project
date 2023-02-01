import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <Div>
      <Link to={"home"} spy={true} className={`${visible ? "block" : "none"}`} smooth={true}  duration={500} offset={-40}>
        <FaChevronUp />
      </Link>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: white;
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 768px) {
      right: 1rem;
      bottom: 2rem;
    }
  }

`;

export default ScrollToTop;
