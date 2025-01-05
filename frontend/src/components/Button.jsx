
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => {
    return (
      <button 
        onClick={onClick}
        className={className}
      >
        {label}
      </button>
    );
  };

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
  
export default Button;