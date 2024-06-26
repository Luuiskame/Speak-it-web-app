import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// web sockets


//components
import Searchbar from '../Home/components/navbar/components/Searchbar/Searchbar';
import ChatPreview from './ChatPreview/ChatPreview';

//styles 
import styles from './Chats.module.css'

//redux
import { useGetChatsByUserIdQuery } from '../../redux/apiSlices/chatsAPI';
import { setChats, setUsersBasicInfo } from '../../redux/slices/chatSlice';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Chats = () => {
  const [participantsId, setParticipantsId] = useState([])
  
  //we gonna keep track of the users 
  const currentUserId = useSelector((state)=> state.userReducer.user?.id)
  const userChats = useSelector((state)=> state.chatsReducer.chats)
  console.log(`current user id: ${currentUserId}`)
  console.log(userChats)

  const dispatch = useDispatch()
  const { data: chats, isLoading, error } = useGetChatsByUserIdQuery(currentUserId)
  console.log(chats)

  useEffect(()=>{
    dispatch(setChats(chats))
    
    const arr = []

    chats?.map((chat)=>{
      arr.push(chat.renderChatInfo)
    })
    dispatch(setUsersBasicInfo(arr))
  },[chats, dispatch])

  useEffect(()=>{
    const arr = []

    chats?.map((chat)=> {
      arr.push(chat.participants)
    })
    setParticipantsId([...arr])
  },[])

  return (
    <div className={styles.chatMainContainer}>
      
      <div className={styles.searchBox}>
      {/* <Searchbar/> */}
      </div>

      <div className={styles.friendsContainer}>
        Friends 
      </div>

      {chats?.length > 0  ? chats.map((chat)=> (
        <ChatPreview
        key={chat.id}
        chatId={chat.id}
        lastMessageProp={chat.lastMessage?.content}
        userPic={chat.participantsInfo[0]?.profilePicture}
        username={chat.participantsInfo[0]?.username}
        name={chat.participantsInfo[0]?.name}

        //we might need this in the future: 
        participantsId={participantsId}
        />

      )) : <p>no chats yet</p> }    
      {/* ste the height as 10dvh like the cards => containerClassname is the class that wraps all skeletons*/}
      { isLoading ? <Skeleton containerClassName={styles.skeletonContainer} height='10dvh' width='100%' count={3}/>: null}
      {error ? <p className={styles.loadingText}>{error}</p> : null}
    </div>
  );
};

export default Chats