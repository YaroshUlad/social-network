import React from 'react';
import './App.css';
import {SideBar} from "./Components/SideBar/SideBar";
import {Content} from "./Components/Content/Content";
import {Header} from "./Components/Header/Header";
import {ActionType, StateType} from "./Redux/state";




export type AppPropsType = {
    data: StateType
    dispatch: (action: ActionType)=> void
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <div className={'bodyWrapper'}>
                <SideBar/>
                <Content data={props.data} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default App;
