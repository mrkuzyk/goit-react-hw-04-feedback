import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={s.list}>
            <li className={s.items}>
                <p>Good :</p>
                <p>{good}</p>
            </li>
            <li  className={s.items}>
                <p>Neutral :</p>
                <p>{neutral}</p>
            </li>
            <li  className={s.items}>
                <p>Bad :</p>
                <p>{bad}</p>
            </li>
            <li  className={s.items}>
                <p>Total :</p>
                <p>{total}</p>
            </li>
            <li  className={s.items}>
                <p>Positive feedback :</p>
                <p>{positivePercentage}%</p>
            </li>
        </ul>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};