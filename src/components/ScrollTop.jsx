import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../assets/styles/scrollTop.css";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    visible && (
      <button
        className="scroll-top"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollTop;