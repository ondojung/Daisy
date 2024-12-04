import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router';

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

function Home(){
  return (
      <>
      <ChangeWallpaperBtn>
        배경 변경
      </ChangeWallpaperBtn>
      <ProfileBlock>
        <ProfileImgBlock>
            <ProfileImg src='/profile/embarrassment.jpg'/>
        </ProfileImgBlock>
        
        <ProfileName>정온도</ProfileName>
        
        <Link to='/rooms'>
            <LoginBtn>로그인</LoginBtn>
        </Link>
      </ProfileBlock>
      </>
    )
};

export default Home