import React from 'react'
import  './Sidebar.css'
import {ChatOutlined, DonutLarge, MoreVert, SearchOutlined} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className={'sidebar'}>
            <div className="sidebar__header">
                <Avatar src={'https://avatars3.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4'}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                      <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <ChatOutlined/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                     <SearchOutlined/>
                    <input type="text" placeholder={'Search or Start new chat.'}/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>

    )
}

export default Sidebar;
