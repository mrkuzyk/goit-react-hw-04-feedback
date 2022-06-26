import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ names, onLeaveFeedback }) => {
    return (
    <div>
            {names.map(name =>
                <button key={name} className={s.btn} type="button" name={name} value={name} onClick={() => onLeaveFeedback(name)}>{name}</button>)}
    </div>);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    names: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}