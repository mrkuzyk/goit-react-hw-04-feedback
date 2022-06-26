import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
            {options.map(key =>
                <button key={key} className={s.btn} type="button" onClick={() => onLeaveFeedback(key)}>{key}</button>)}
    </div>);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}