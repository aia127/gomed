import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import ChatMain from './components/ChatMain';
import { MessagesProvider } from './contexts/MessagesContext';
import './styles/App.css';

function App() {
  return (
    <MessagesProvider>
      <div className="hero is-fullheight has-text-white is-unselectable is-size-6">
        <div className="hero-body">
          <div className="container">

            <ChatHeader title="Medical Diagnosis Chatbot - WebSocket Chat" />
            <ChatMain />
            <ChatFooter />

          </div>
        </div>
      </div>
    </MessagesProvider>
  );
}

export default App;
