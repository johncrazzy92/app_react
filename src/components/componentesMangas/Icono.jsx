const ChatIcon = ({ onClick, isVisible }) => {
    return (

        <div className={`chat-icon z-50 ${isVisible ? 'hidden' : ''}`} onClick={onClick}>
            <img src="public/img/icon.webp" alt="" />
        </div>
    );
};

export default ChatIcon;