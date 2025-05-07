import { MusicPlayerProvider } from './context/MusicPlayerContext';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AudioPlayer from './components/AudioPlayer';
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
