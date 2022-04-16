import React from 'react';
import s from './Posts.module.css'

type PostsPropsType = {
    posts:string[]
}

const Posts = (props: PostsPropsType) => {
    return (
        <div className={s.posts}>
            {props.posts.map(el=>{
                return(
                    <div>
                        {el}
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;