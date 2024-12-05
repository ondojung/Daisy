import React,{useState,useEffect,useRef} from "react";
import styled from 'styled-components'
import SearchInput from '../components/atoms/SearchInput'
import ChatInput from '../components/molecules/ChatInput'
import { Link,useLocation } from 'react-router';
import {ReactComponent as MenuIcon} from "../assets/icons/menu.svg";
import {Socket} from '../util/socket'
import util from '../util'

const Header = styled.div`
    width:28rem;
    margin:0 auto;
    overflow:hidden;
    display:flex;
    position:fixed;
    top:0;
    z-index:200;
    left:50%;
    transform:translate(-50%,0%);
    
`
const HeaderTitle = styled.div`
    font-size:2rem;
    font-weight:600;
    margin:1rem 0 0 0;
`
const ChatLogBlock = styled.div`
    width:28rem;
    margin:0 auto;
    padding-left:3rem;
    padding-right:3rem;
    display:block;
    overflow-y:scroll;
    margin-bottom:8rem;
    padding-top:4rem;
    overflow:scroll;
    
`
const BlueBubbleBlock = styled.div`
    position:relative;
    text-align:right;
    margin-top:1rem;
    color:white;
    text-shadow: 1px 1px 0 #1b96fc;
`
const GrayBubbleBlock = styled.div`
    position:relative;
    margin-top:1rem;
    color:black;
    text-shadow: 1px 1px 0 #f3f3f4;
`
const Bubble = styled.div`
    display:inline-block;
    padding: 12px 18px;
    max-width: 270px;
    min-height: 26px;
    min-width: 14px;
    font-size: 24px;
    line-height: 26px;
    position: relative;
    overflow-wrap: break-word;
    text-align:left;
`
const MenuIconBlock=styled.div`
    margin:1rem 0.5rem 0 0;
    display:flex;
    align-items:center;
`
const ChatLogBlockWrap=styled.div`
    position:absolute;
    height:calc(var(--vh) - env(keyboard-inset-height,270px));
    width: 100%;
    color: #111;
    overflow:auto;
`
const ProfileImgBlock=styled.div`
    width:2.5rem;
    height:2.5rem;
    background:#e2e2e2;
    border-radius:50%;
    float:left;
    margin-right:0.8rem; 
    margin-top:0.3rem;
    overflow:hidden;
    
`
const ProfileImg=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    
`
const NameBlock=styled.div`
    padding-left:0.5rem;
    overflow:hidden;
`
const BubbleInfoBlock=styled.div`
    
`

function ChatLogs(){
    const socket=new Socket()
    const [chatLog,setChatLog]=useState([])
    const location = useLocation();
    const room_id = location.state.id;
    const observe = useRef()
    const io = socket.io
    
    const scrollToBottom=()=>{
        observe.current.scrollTop = observe.current?.scrollHeight +1000;
    }
    
    const [msgData,setMsgData] =useState({
        sender:'',
        avatar:'',
        msg:'',
        roomID:room_id,
        isMe:true
    })
    
    const setVh=()=>{
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    useEffect(()=>{
        const user = util.getUser
        setMsgData({...msgData,
        sender:user.name,
        avatar:user.avatar
        })
        
        setVh()
        window.addEventListener('resize', setVh)
        if ("virtualKeyboard" in navigator) {
             const keybord:any = navigator.virtualKeyboard
             keybord.overlaysContent = true;
        }
        
        io.on('receive_msg', (data) => {
            setChatLog(prev=>[...prev,data])
            
        })
    },[])
    
    const handleSend=()=>{
        socket.emitMsg(msgData)
        setChatLog((prev)=>[...prev,msgData])
        setMsgData({
            ...msgData,
            msg:''
        })
        scrollToBottom()
    }
    
    const handleOnChange=(e)=>{
        setMsgData({
            ...msgData,
            msg:e.target.value
        })
    }
    

    
    return (
        <>
        <Header>
          <MenuIconBlock>
            <Link to='/rooms'>
            <MenuIcon width={36} height={36}/>
            </Link>
          </MenuIconBlock>
          <HeaderTitle>
            마피아
          </HeaderTitle>
        </Header>
        
       
        <ChatLogBlockWrap ref={observe}>
        <ChatLogBlock>
        
            {
            chatLog.map(e=>
                e.isMe?
                <BlueBubbleBlock>
                    <Bubble style={{
                        background: '#39a1f9',
                        borderRadius: '20px 20px 10px 20px'
                    }}>
                    <span>{e.msg}</span>
                    </Bubble>
                </BlueBubbleBlock>
                :<GrayBubbleBlock>
                
                    <ProfileImgBlock>
                        <ProfileImg src={`/profile/${e.avatar}.jpg`}/>
                    </ProfileImgBlock>
                    
                    <BubbleInfoBlock>
                    <NameBlock>{e.sender}</NameBlock>
                    <Bubble style={{
                        background: '#e5e5ea',
                        borderRadius: '20px 20px 20px 20px'
                    }}>
                    <span>{e.msg}</span>
                    </Bubble>
                     </BubbleInfoBlock>
                
                </GrayBubbleBlock>
            )
        }
        
        </ChatLogBlock>
        </ChatLogBlockWrap>
        
        
        
        <ChatInput onChange={handleOnChange} onSubmit={handleSend} value={msgData.msg}/>
        </>
    )
};

export default ChatLogs