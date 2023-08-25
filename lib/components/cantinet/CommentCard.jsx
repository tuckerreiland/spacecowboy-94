'use client';

import React from 'react';

// Takes in a post ID as params

const CommentCard = ({comment}) => {

    const [visible, setVisible] = React.useState(false);

	return (
        <div className="ml-4 pl-2 border-l-2 py-2">
            <h3>{comment.user}</h3>
            <div>{comment.body}</div>
            {comment.comments.length>0? 
                <div>
                {/* TODO: break this off into a component */}
                {comment.comments.length>1?
                    <button
                        onClick={()=>(visible?setVisible(false):setVisible(true))}
                    >
                        Show {comment.comments.length} replies
                    </button>
                :
                    <button
                        onClick={()=>(visible?setVisible(false):setVisible(true))}
                    >
                        Show {comment.comments.length} reply
                    </button>
                }
                {visible?
                    <div>
                        {comment.comments.map((comment)=>{
                            return(
                                <CommentCard comment={comment}/>
                            )
                        })}
                    </div>
                :
                    null
                }
                </div>
            :
             null
            }
            
        </div>
	)
  }

export default CommentCard;