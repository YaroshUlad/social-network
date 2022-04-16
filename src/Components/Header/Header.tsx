import React from "react";

export const Header = () => {
    return (
        <header className="App-header">
            <div className={'logoApp'}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFfJJKXQDLtvVxx9A4CMVl15h5X6UYQ___LJqe9sORZWAixxT7IJ1ITX2nADUtMeQJe8&usqp=CAU'}
                    alt={'Logo'}/>
            </div>
            <span className={'networkTitle'}>Social Network</span>
        </header>
    )
}