import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {useEffect, useState} from "react";
import Pusher from 'pusher-js';
import axios from "./axios";

function App() {
    const [messages,setMessages]= useState([])
    useEffect(()=>{
        axios.get('/messages/sync').then(response =>{
            setMessages(response.data)
        })

    },[])
    useEffect(()=>{
        const pusher = new Pusher('a1594a87ba3826b5f6e3', {
            cluster: 'mt1'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function(data) {
            alert(JSON.stringify(data));
            setMessages(...messages, data)
        });
        return()=>{
            channel.unbind_all()
            channel.unsubscribe()
        }
    },[messages]);


    console.log(messages)
  return (
    <div className="app">
        <div className="app__body">
            <Sidebar/>
            <Chat/>
        </div>

    </div>
  );
}

export default App;
