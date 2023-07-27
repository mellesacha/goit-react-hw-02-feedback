import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const label = str => str.charAt(0).toUpperCase() + str.slice(1)
  return (
		<>
			{options.map((option) => (
				<button key={option}  type="button" onClick={onLeaveFeedback} name={option}>
					{label(option)}
				</button>
            ))}
          
		</>
	);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

