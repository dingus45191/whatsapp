import React from 'react'
import  './Sidebar.css'
import {ChatOutlined, DonutLarge, MoreVert} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";

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
        </div>

    )
}

export default Sidebar;
