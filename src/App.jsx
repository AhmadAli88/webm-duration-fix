import './App.css';
import ScreenRecordingApp from './components/ScreenRecordingApp';
import VideoProcessingPlatform from './components/VideoProcessingPlatform';
import WebmVideoPlayer from './components/Webm';

function App() {
  return (
    <div>
      <WebmVideoPlayer />
      <ScreenRecordingApp/>
      <VideoProcessingPlatform/>
    </div>
  );
}

export default App;
