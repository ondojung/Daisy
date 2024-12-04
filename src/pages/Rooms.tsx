import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import SearchInput from '../components/atoms/SearchInput'
import { Link } from 'react-router';
import {ReactComponent as BubbleIcon} from "../assets/icons/bubble.svg";
import {ReactComponent as PlusIcon} from "../assets/icons/plus-thin.svg";
import SlideUp from '../components/atoms/SlideUp'
import AddRoomModal from '../components/templates/AddRoomModal'
import Database from '../database'
import {Socket} from '../util/socket'

const Header = styled.div`
    width:28rem;
    margin:0 auto;
    overflow:hidden;
`
const HeaderTitle = styled.div`
    font-size:2rem;
    font-weight:600;
    margin:1rem 0 0 0;
    float:left;
`
const RoomListBlock = styled.div`
    width:28rem;
    margin:0 auto;
    margin-top:1rem;
`
const RoomBlock = styled.div`
    padding:0.5rem 0 0.5rem 0;
    border-top:0.1rem solid #e2e2e2;
    display:flex;
`
const RoomImgBlock = styled.div`
    flex-shrink: 0;
    width:4rem;
    height:4rem;
    background:#e2e2e2;
    border-radius:50%;
    overflow:hidden;
`
const RoomImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const RoomInfoBlock = styled.div`
    flex-grow: 1;
    width:100%;
    margin-left:0.8rem;
`
const RoomName= styled.div`
    font-size:1.2rem;
    font-weight:700;
`
const LastMsg= styled.div`
    color:#848488;
`
const SearchRoomBtn = styled.div`
    width:2.5rem;
    height:2.5rem;
    float:right;
    margin-top:1rem;
    margin-left:0.5rem;
`
const SearchRoomBtnImg = styled.img`
    width:100%;
    height:100%;
`

function Rooms(){
    const DB = new Database()
    const navigate = useNavigate();
    const [roomList,setRoomList]=useState([])
    const socket=new Socket()
    
    const getRooms=async()=>{
        const data = await DB.getAllRoom()
        setRoomList(data)
    }
    useEffect(()=>{
        getRooms()
    },[])
    
    const [addRoom,setAddRoom]=useState(false)
    const handleAddRoom=()=>{
        setAddRoom(false)
    }
    const handleJoinRoom=(_id)=>{
        socket.joinRoom(_id)
        navigate('/chat_logs',{ state: { id: _id } });
        
    }
    
    return (
        <>
        <Header>
          <HeaderTitle>채팅</HeaderTitle>
          
          <SearchRoomBtn>
                <PlusIcon width={40} height={40} onClick={()=>setAddRoom(true)}/>
          </SearchRoomBtn>
          
          <Link to='/search_room'>
              <SearchRoomBtn>
                <BubbleIcon width={40} height={40}/>
              </SearchRoomBtn>
          </Link>
          
        </Header>
        <SearchInput/>
        <RoomListBlock>
            {
                roomList.map(e=>
                    <RoomBlock onClick={()=>handleJoinRoom(e.id)}>
                        <RoomImgBlock>
                            <RoomImg src={e.icon}/>
                        </RoomImgBlock>
                        <RoomInfoBlock>
                            <RoomName>{e.name}</RoomName>
                            <LastMsg>안녕</LastMsg>
                        </RoomInfoBlock>
                    </RoomBlock>
                    
                )
            }
        </RoomListBlock>
        <SlideUp setModalOpen={setAddRoom} isOpen={addRoom} children={<AddRoomModal setModalOpen={setAddRoom}/>} title='새로운 채팅방' handler={handleAddRoom}/>
        
        </>
    )
};

export default Rooms