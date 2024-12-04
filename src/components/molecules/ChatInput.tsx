import React from "react";
import styled from 'styled-components'
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import {ReactComponent as CancelIcon} from "../../assets/icons/xmark.svg";
import {ReactComponent as SendIcon} from "../../assets/icons/send.svg";

const InputBlock=styled.div`
    width:28rem;
    margin:0 auto;
    display:flex;
    padding:0.5rem 0 0.5rem 0;
    position:fixed;
    bottom:0;
    left:50%;
    transform:translate(-50%,0%);
    margin-bottom:env(keyboard-inset-height, 0px);

`
const InputText=styled.div`
    background:#EEEEEF;
    height:2.5rem;
    margin:0 auto;
    text-align:left;
    width:100%;
    margin-left:0.5rem;
    margin-right:0.5rem;
    border-radius:1rem;
`
const Input=styled.input`
    width:100%;
    background:transparent;
    height:100%;
    border:none;
    box-sizing:border-box;
    outline: none;
    font-size:1.1rem;
    padding:0 1rem 0 1rem;
    color:#838388;
`
const AddFileBlock = styled.div`
    width:2.5rem;
    height:2.5rem;
    flex-shrink: 0;
    display:flex;
    align-items:center;
    justify-content:center;
`
const SendBtnBlock = styled.div`
    width:2.5rem;
    height:2.5rem;
    background:#39a1f9;
    flex-shrink: 0;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
`


function ChatInput({onChange,onSubmit,value}){
  return (
      <InputBlock>
        <AddFileBlock>
        
            <PlusIcon width={32} height={32}/>
        
        </AddFileBlock>
          <InputText>
                <Input type='search' placeHolder='Search' onChange={onChange} onKeyDown={(e)=>{
                        if(e.key === "Enter") {
                          onSubmit();
                        }
                }} value={value}></Input>
          </InputText>
        <SendBtnBlock>
            <SendIcon width={24} height={24} fill="#fff" onClick={onSubmit}/>
        </SendBtnBlock>
      </InputBlock>
    )
};

export default ChatInput