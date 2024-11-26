import { useRef, useState } from "react";
import WebmDurationFix from 'webm-duration-fix';
// Video Editing Platform Use Case
const VideoProcessingPlatform = () => {
  const fileInputRef = useRef(null);
  const [processedVideos, setProcessedVideos] = useState([]);

  const handleVideoProcessing = async () => {
    const files = fileInputRef.current.files;
    const processedList = [];

    for (let file of files) {
      if (file.type === 'video/webm') {
        try {
          // Fix duration for WebM files before processing
          const fixedBlob = await WebmDurationFix(file);
          const fixedUrl = URL.createObjectURL(fixedBlob);

          processedList.push({
            originalName: file.name,
            fixedUrl: fixedUrl,
          });
        } catch (error) {
          console.error(`Error processing ${file.name}:`, error);
        }
      }
    }

    setProcessedVideos(processedList);
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Video Processing Platform</h2>
      <input
        type='file'
        ref={fileInputRef}
        multiple
        accept='.webm'
        className='mb-4'
      />
      <button
        onClick={handleVideoProcessing}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Process Videos
      </button>

      {processedVideos.map((video, index) => (
        <div key={index} className='mt-4'>
          <h3 className='font-semibold'>Processed: {video.originalName}</h3>
          <video src={video.fixedUrl} controls className='max-w-full' />
        </div>
      ))}
    </div>
  );
};

export default VideoProcessingPlatform;
