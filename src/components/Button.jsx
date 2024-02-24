/* eslint-disable react/prop-types */
export const Button = ({ handleClick, children }) => {
  return (
    <button
      className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
