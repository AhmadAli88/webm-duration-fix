import  { useState, useRef } from 'react';
import WebmDurationFix from 'webm-duration-fix';

// Screen Recording Use Case
const ScreenRecordingApp = () => {
  const [recordings, setRecordings] = useState([]);
  const mediaRecorderRef = useRef(null);

  const startScreenRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ 
        video: true, 
        audio: true 
      });

      mediaRecorderRef.current = new MediaRecorder(stream, { 
        mimeType: 'video/webm' 
      });
      
      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
      
      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        
        try {
          // Fix duration metadata for the recorded WebM
          const fixedBlob = await WebmDurationFix(blob);
          const fixedUrl = URL.createObjectURL(fixedBlob);
          
          setRecordings(prev => [...prev, {
            url: fixedUrl,
            timestamp: new Date().toLocaleString()
          }]);
        } catch (error) {
          console.error('Error fixing recording:', error);
        }
      };

      mediaRecorderRef.current.start();
    } catch (error) {
      console.error('Recording error:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Screen Recording App</h2>
      <button 
        onClick={startScreenRecording}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Start Recording
      </button>
      
      {recordings.map((recording, index) => (
        <div key={index} className="mt-4">
          <video 
            src={recording.url} 
            controls 
            className="max-w-full"
          />
          <p className="text-sm">Recorded at: {recording.timestamp}</p>
        </div>
      ))}
    </div>
  );
};
export default ScreenRecordingApp;