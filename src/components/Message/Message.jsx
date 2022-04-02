import PropTypes from 'prop-types';

import './Message.styles.css';

export const Message = ({ author, text }) => {
    return (
        <h3 className='message'>
            <span>{author}: </span>
            <span>{text}</span>
        </h3>
    );
};

Message.propTypes = {
    author: PropTypes.string.isRequired, 
    text: PropTypes.string,
}

