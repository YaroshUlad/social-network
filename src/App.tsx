import React from 'react';
import './App.css';
import {SideBar} from "./Components/SideBar/SideBar";
import {Content} from "./Components/Content/Content";
import {Header} from "./Components/Header/Header";

export type DialogsPageType = {
    dialogs:string[]
    messages:string[]
}

export type DataType = {
    posts:string[]
    dialogsPage:DialogsPageType
}

export type AppPropsType = {
    data: DataType
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <div className={'bodyWrapper'}>
                <SideBar/>
                <Content data={props.data}/>
            </div>
        </div>
    );
}

export default App;
