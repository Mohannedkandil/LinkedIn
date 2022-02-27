import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SharetOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendtOutlinedIcon from '@material-ui/icons/SendOutlined'

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Mohanad Kandil</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post__body">
                <p>Message goes here</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={SharetOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendtOutlinedIcon} title="Send" color="gray" />

            </div>
        </div>
    )
}

export default Post