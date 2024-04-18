
import styles from './ChatMiddlePart.module.css'

const ChatMiddlePart = ({messageReceived, correctChatInfo})=> {
     console.log(messageReceived)
    
    return(
        <div className={styles.chatMiddlePartContainer}>

            {messageReceived.length > 0 
            ? messageReceived.map(message=> (
                <div className={styles.messageCardContainer}>
                    <figure className={styles.pfpContainer}>
                        <img src={message.senderPicture} alt="sender picture" />
                    </figure>

                    <div className={styles.nameAndMessageContentContainer}>
                        <p>{message.senderName}</p>
                        <p>{message.content}</p>
                        {/* <p>{message.timestamp}</p> */}
                    </div>
                </div>
            )) : (<p>sent any message!</p>)
            }

        </div>
    )
}

export default ChatMiddlePart