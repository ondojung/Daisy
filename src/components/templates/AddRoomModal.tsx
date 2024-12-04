import React from 'react';
import styled from 'styled-components'
import Database from '../../database'
import axios from 'axios'

const RoomImgBlock=styled.div`
    width:8rem;
    height:8rem;
    background:#e2e2e2;
    border-radius:2rem;
    margin:0 auto;
    margin-top:3rem;
    overflow:hidden;
`
const RoomImg=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const RoomTitleBlock=styled.div`
    width:28rem;
    height:3rem;
    margin:0 auto;
    margin-top:1rem;
`
const RoomTitle=styled.input`
    width:100%;
    height:100%;
    border:0.1rem solid #e2e2e2;
    outline:none;
    background:transparent;
    box-sizing: border-box;
    border-radius:1rem;
    font-size:1.2rem;
`
const RoomOverviewBlock=styled.div`
    width:28rem;
    height:8rem;
    margin:0 auto;
    margin-top:1rem;
`
const IsPrivateBlock=styled.div`
    width:28rem;
    margin:0 auto;
    margin-top:1rem;
    display:flex;
    height:3rem;
    gap:1rem;
`
const IsPrivateBtn=styled.div`
    flex: 1 1 auto;
    border:0.1rem solid gray;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.2rem;
    border-radius:1rem;
`
const RoomOverview=styled.textarea`
    width:100%;
    height:100%;
    border:0.1rem solid #e2e2e2;
    outline:none;
    background:transparent;
    box-sizing: border-box;
    border-radius:1rem;
    font-size:1.2rem;
`
const Header = styled.div`
    width:100%;
    padding:0.5rem 0 0.5rem 0;
    background:#FAFAFC;
    overflow:hidden;
    text-align:center;
    font-size:1.2rem;
    font-weight:700;
`
const CancelBtn=styled.div`
    float:left;
    margin-left:0.5rem;
    color:#FE3B29;
`
const AddBtn=styled.div`
    float:right;
    margin-right:0.5rem;
    color:#FE3B29;
`

export default function AddRoomModal({setModalOpen}){
    
    const DB=new Database()
    
    const handleClose=()=>{
        setModalOpen(false)
    }
    const handleAdd=async ()=>{
        const data = {
                        name: '똥 마려운 방',
                        icon: '/profile/envy.jpg',
                        overview: '똥하루에 3번이상 싸는 사람만',
                        isPrivate:false
                    }
        const res = await axios.post('/api/room/add', data,null);
        alert('새로운 방이 추가되었습니다.')
        
        await DB.addRoom({
            id:res.data?.message,
            name:'똥 마려운 방',
            icon:'/profile/envy.jpg'
        })
        
        setModalOpen(false)
    }
    
    
    return(
        <>
            <Header>
             새로운 채팅방
            <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
            <AddBtn onClick={handleAdd}>완료</AddBtn>
            </Header>
            
            <RoomImgBlock>
                <RoomImg/>
            </RoomImgBlock>
            
            <RoomTitleBlock>
                <RoomTitle/>
            </RoomTitleBlock>
            
            <RoomOverviewBlock>
                <RoomOverview/>
            </RoomOverviewBlock>
            
            <IsPrivateBlock>
                <IsPrivateBtn>공개</IsPrivateBtn>
                <IsPrivateBtn>비공개</IsPrivateBtn>
            </IsPrivateBlock>
        </>
        )
}