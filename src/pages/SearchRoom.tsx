import React,{useState} from "react";
import styled from 'styled-components'
import SearchInput from '../components/atoms/SearchInput'

const Header = styled.div`
    width:28rem;
    margin:0 auto;
`
const HeaderTitle = styled.div`
    font-size:2rem;
    font-weight:600;
    margin:1rem 0 1rem 0;
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
const RoomName = styled.div`
    font-size:1.2rem;
    font-weight:700;
    flex-grow: 1;
`
const LastMsg = styled.div`
    color:#848488;
`
const UpdatedAt = styled.div`
    font-weight:500;
    font-size:1rem;
    display : flex;
    align-items : center;
`
const TopInfo = styled.div`
    display:flex;
`

const elapsedTime = (date): string => {
    const start = date;
    const end = new Date();
    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return '방금 전';

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${start.toLocaleDateString()}`;
};

function SearchRooms(){
    const [roomList,setRoomList]=useState([
        {name:'놀이방',roomImg:'https://cdn3.iconfinder.com/data/icons/baby-toys-12/100/Horse_rocking_horse_baby-512.png',overview:'놀쟝',update:new Date('2024-11-27')},
        {name:'로비',roomImg:'https://cdn.iconscout.com/icon/premium/png-256-thumb/lobby-3-198640.png',overview:'로비입니다.',update:new Date()},
        {name:'마피아',roomImg:'https://w7.pngwing.com/pngs/969/744/png-transparent-mafia-block-game-android-computer-icons-mafia-game-emblem-logo-thumbnail.png',overview:'다같이 마피아게임 고?',update:new Date()}
        ])
    return (
        <>
        <Header>
          <HeaderTitle>방찾기</HeaderTitle>
        </Header>
        <SearchInput/>
        <RoomListBlock>
            {
                roomList.map(e=>
                    <RoomBlock>
                        <RoomImgBlock>
                            <RoomImg src={e.roomImg}/>
                        </RoomImgBlock>
                        <RoomInfoBlock>
                        
                        <TopInfo>
                        <RoomName>{e.name}</RoomName>
                        
                         <UpdatedAt>
                            {elapsedTime(e.update)}
                         </UpdatedAt>
                         </TopInfo>
                         
                            <LastMsg>{e.overview}</LastMsg>
                        </RoomInfoBlock>
                    </RoomBlock>
                )
            }
        </RoomListBlock>
        </>
    )
};

export default SearchRooms