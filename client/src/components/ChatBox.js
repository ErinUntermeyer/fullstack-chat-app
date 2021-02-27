import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_CHAT_API_KEY);

client.connectUser(
  {
    id: 'erin',
    name: 'Erin',
    image: 'kitty.jpg',
  },
  client.devToken('erin'),
);

const channel = client.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Testing Stream Chat',
});

const ChatBox = () => (
  <Chat client={client} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatBox