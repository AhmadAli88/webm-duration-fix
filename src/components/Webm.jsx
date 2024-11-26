import  { useRef, useState } from 'react';
import WebmDurationFix from 'webm-duration-fix';

const WebmVideoPlayer = () => {
  const [fixedVideoSrc, setFixedVideoSrc] = useState(null);
  const originalVideoRef = useRef(null);
  const fixedVideoRef = useRef(null);

  const handleFixDuration = async () => {
    try {
      // Get the original video file
      const originalFile = originalVideoRef.current.files[0];
      
      // Apply webm-duration-fix
      const fixedBlob = await WebmDurationFix(originalFile);
      
      // Create a URL for the fixed video
      const fixedVideoUrl = URL.createObjectURL(fixedBlob);
      setFixedVideoSrc(fixedVideoUrl);
    } catch (error) {
      console.error('Error fixing WebM duration:', error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">WebM Duration Fix Demo</h2>
      
      <input 
        type="file" 
        ref={originalVideoRef} 
        accept=".webm"
        className="mb-4 block"
      />
      
      <button 
        onClick={handleFixDuration}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Fix WebM Duration
      </button>
      
      {fixedVideoSrc && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Fixed Video</h3>
          <video 
            ref={fixedVideoRef}
            src={fixedVideoSrc}
            controls
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default WebmVideoPlayer;