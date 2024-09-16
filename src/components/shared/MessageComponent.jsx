import { Box, Typography } from '@mui/material';
import React from 'react'
import { memo } from 'react'
import { lightblue } from '../../constants/color';
import moment from 'moment';
import { fileFormat } from '../../lib/feature';
import RenderAttachment from './RenderAttachment';
const MessageComponent = (message,user,) => {
const {sender,content,attachments=[],createdAt}=message;
const timeAgo=moment(createdAt).fromNow();
const sameSender=sender?._id===user?._id;
  return (
    <div 
    style={{
        alignSelf:sameSender?"flex-end":"flex-start",
        backgroundColor:"white",
        color:"balck",
        borderRadius:"5px",
        padding:"0.5rem",
        width:"fit content",
    }}>
     {!sameSender&&<Typography color={lightblue}>{sender.name}</Typography>}
     {content&&<Typography>{content}</Typography>}
     {
        attachments.length>0 && attachments.map((attachment,index)=>{
const url=attachment.url;
const file=fileFormat(url);
return <Box key={index}>
    <a href={url}
    target="_blank" 
    download 
    style={{
        color:"black",

    }}>
     {RenderAttachment(file,url)}   
    </a>
</Box>
        })
     }
     <Typography variant="caption" color={"text.Secondary"}>{timeAgo}</Typography>
    </div>
  )
}

export default memo(MessageComponent)
