import React from 'react';
import Title from "../shared/Title";
import Header from "./Header";
import { Grid } from "@mui/material";
import ChatList from '../specific/ChatList';
import { sampleChats } from '../../constants/SampleData';
import Profile from '../specific/Profile';
const AppLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid 
            item 
            sm={4} 
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
          <ChatList chats={sampleChats} chatId={1}
          newMessagesAlert={[
            {
               chatId:"1",
               count:0,
            } 
          ]}
          onlineUsers={["1","2"]}/>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={8} 
            md={5} 
            lg={6} 
            height={"100%"} 
            bgcolor="primary.main"
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)"
            }}
          >
            <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
