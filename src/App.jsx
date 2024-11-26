import './App.css';
import ScreenRecordingApp from './components/ScreenRecordingApp';
import VideoProcessingPlatform from './components/VideoProcessingPlatform';
import WebmVideoPlayer from './components/Webm';
import WebmDurationFixUseCases from './components/WebmDurationFixUseCases';

function App() {
  return (
    <div>
      <WebmVideoPlayer />
      <ScreenRecordingApp/>
      <VideoProcessingPlatform/>
      <WebmDurationFixUseCases/>
    </div>
  );
}

export default App;
