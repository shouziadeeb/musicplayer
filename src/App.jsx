import { MusicPlayerProvider } from './context/MusicPlayerContext';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import './index.css';

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Sidebar />
        <MainContent />
        <AudioPlayer />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
