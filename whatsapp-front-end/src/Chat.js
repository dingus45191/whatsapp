import React, {useState} from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
    AttachFile,
    InsertEmoticon, Mic,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";
import axios from "./axios";


function Chat({messages}) {
    let data= Array.from(messages)
    const [input,setInput]= useState('')

    const sendMessage = async (e) =>{
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: 'Mubashir',
            received: true,
            timestamp: new Date().toLocaleTimeString()
        })
        return false
    }

   return(
       <div className="chat">
           <div className="chat__header">
               <Avatar />
               <div className="chat__headerInfo">
                   <h3> Room Name </h3>
                   <p> Last seen at... </p>
               </div>
               <div className="chat__headerRight">
                   <IconButton>
                       <SearchOutlined />
                   </IconButton>
                   <IconButton>
                       <AttachFile />
                   </IconButton>
                   <IconButton>
                       <MoreVert />
                   </IconButton>{" "}
               </div>{" "}
           </div>
           <div className="chat__body">
               {data.map((message)=>{
                   return(
                   <p className={`chat__message ${message.received && "chat__receiver"}`} key={Math.random()*10000}>
                       <span className={"chat__name"}>{message.name}</span>{message.message}
                       <span className={"chat__timestamp"}>{message.timestamp}</span>
                   </p>
                   )
               })}
           </div>




           <div className="chat__footer">
               <InsertEmoticon />
               <form action={'/messages/new'} method={'post'}>
                   <input value={input} type="text" placeholder={"Type a message"} onChange={e=>{
                       setInput(e.target.value)
                   }}/>{" "}
                   <Mic/>
                   <button type="submit" onClick={sendMessage}>Send a message </button>
               </form>
           </div>
       </div>
   )}
export default Chat;
