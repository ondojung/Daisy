import React,{useState,useEffect} from "react";
import styled from 'styled-components'
import { Link } from 'react-router';
import util from '../util'

const ProfileBlock=styled.div`
    position:absolute;
    top:45%;
    left:50%;
    transform:translate(-50%,-50%);
`
const ProfileImgBlock=styled.div`
    width:8rem;
    height:8rem;
    background:#e2e2e2;
    border-radius:50%;
    overflow:hidden;
`
const ProfileImg=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const ProfileName=styled.div`
    text-align:center;
    font-size:1.5rem;
    padding:0.5rem;
`
const LoginBtn=styled.div`
    width:5rem;
    padding:0.2rem;
    margin:0 auto;
    text-align:center;
    border:0.1rem solid gray;
    font-size:1.2rem;
    border-radius:1rem;
`
const ChangeWallpaperBtn=styled.div`
    width:4.5rem;
    padding:0.2rem;
    margin:0 auto;
    text-align:center;
    border:0.1rem solid gray;
    font-size:1rem;
    border-radius:1rem;
    position:absolute;
    top:0.5rem;
    right:0.5rem;
`

const avatarList=['anger','embarrassment','joy','anxiety','ennui',
'bingbong','envy','riley',
'disgust','fear','sadness']

function Home(){
    const [avatar,setAvatar] = useState() 
    const [name,setName] = useState() 
    const [bg,setBg] = useState(null) 
    
    useEffect(()=>{
        const initName=util.generateName()
        const initAvatar=util.getRandomElement(avatarList)
        const user = util.initUser(initAvatar,initName,bg)
        setAvatar(user.avatar)
        setName(user.name)
        setBg(user.bg)
    },[])
  return (
      <>
      <ChangeWallpaperBtn>
        배경 변경
      </ChangeWallpaperBtn>
      <ProfileBlock>
        <ProfileImgBlock>
            <ProfileImg src={`/profile/${avatar}.jpg`}/>
        </ProfileImgBlock>
        
        <ProfileName>{name}</ProfileName>
        
        <Link to='/rooms'>
            <LoginBtn>로그인</LoginBtn>
        </Link>
      </ProfileBlock>
      </>
    )
};

export default Home