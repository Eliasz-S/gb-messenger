import './Message.styles.css';

export const Message = ({ message }) => {
    return (
        <h3 className="message">
            {message}
        </h3>
    );
};

