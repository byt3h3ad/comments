import PropTypes from "prop-types";

export const Button = ({ handleClick, children }) => {
  return (
    <button
      className="rounded bg-gray-800 px-4 py-1 font-light text-white hover:bg-gray-700"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
