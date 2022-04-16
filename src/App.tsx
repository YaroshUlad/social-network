import React from 'react';
import './App.css';
import {SideBar} from "./Components/SideBar/SideBar";
import {Content} from "./Components/Content/Content";

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
            <header className="App-header">
                <div className={'logoApp'}>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFfJJKXQDLtvVxx9A4CMVl15h5X6UYQ___LJqe9sORZWAixxT7IJ1ITX2nADUtMeQJe8&usqp=CAU'}
                        alt={'Logo'}/>
                </div>
                <span className={'networkTitle'}>Social Network</span>
            </header>
            <div className={'bodyWrapper'}>
                <SideBar/>
                <Content data={props.data}/>
            </div>
        </div>
    );
}

export default App;
