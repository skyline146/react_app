import React from 'react';

import './post-list.css';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        let classNames = "";
        
        if (itemProps.important) {
            classNames += "list-group-item-active";
        } else {
            classNames += "list-group-item";
        }

        return (
            <li key={id} className={classNames}>
                <PostListItem 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;