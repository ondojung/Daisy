import React from "react";
import styled from 'styled-components'

const InputText=styled.div`
    background:#EEEEEF;
    width:28rem;
    height:3rem;
    margin:0 auto;
    margin-top:1rem;
    border-radius:1rem;
    text-align:left;
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

function SearchBar(){
  return (
      <InputText>
            <Input type='search' placeHolder='Search'></Input>
    </InputText>
    )
};

export default SearchBar