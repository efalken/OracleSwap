import ChatBox from '3box-chatbox-react';

const ChatBoxPlug = ({ handleLogin, box, ethereum, myAddress, currentUser3BoxProfile, adminEthAddr }) => (
  <ChatBox
    // required
    spaceName="mySpaceName"
    threadName="myThreadName"


    // Required props for context A) & B)
    box={box}
    currentUserAddr={myAddress}

    // Required prop for context B)
    // loginFunction={handleLogin}

    // Required prop for context C)
    // ethereum={ethereum}

    // optional
    mute={false}
    popupChat
    showEmoji
    colorTheme="#181F21"
    // currentUser3BoxProfile={currentUser3BoxProfile}
    // userProfileURL={address => `https://mywebsite.com/user/${address}`}
    // spaceOpts={}
    // threadOpts={}
    agentProfile={{
      chatName: "3Box",
        imageUrl: "https://imgur.com/RXJO8FD"
        }}
/>
);
