

import styles from './SlideUp.module.css'
import React,{useState,useEffect} from 'react';
import styled from 'styled-components'


type SlideProps={
    setModalOpen:any
    isOpen:any
    children:any
    title:string
    handler:any
}

export default function SlideUp({setModalOpen,isOpen,children,title,handler}:SlideProps){
    
      
    return(
        <div className={`${styles.container} ${isOpen?styles.open:styles.closeModal}`}>
           {children}
        </div>
        )
}