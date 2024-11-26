import ScreenRecordingApp from './ScreenRecordingApp';
import VideoProcessingPlatform from './VideoProcessingPlatform';

// Composite Component to Show Multiple Use Cases
const WebmDurationFixUseCases = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        WebM Duration Fix Use Cases
      </h1>

      <div className='grid md:grid-cols-2 gap-8'>
        <div className='border p-4 rounded'>
          <ScreenRecordingApp />
        </div>
        <div className='border p-4 rounded'>
          <VideoProcessingPlatform />
        </div>
      </div>
    </div>
  );
};

export default WebmDurationFixUseCases;
