import { CheckCircle2 } from 'lucide-react';
import React, { useContext, useState, useEffect } from 'react';
import { CompletedChapterContext } from '../../../../../_context/CompletedChapterContext';
import { markChapterCompleted } from './../../../../../_services/index';
import './video-player.css'; // Assuming video-player.css is in the same directory as FullVideoPlayer.js


function FullVideoPlayer({ activeChapter }) {
  const { completedChapter, setCompletedChapter } = useContext(CompletedChapterContext);
  const [videoId, setVideoId] = useState('');

  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId === chapterId);
  };

  const _markChapterCompleted = async () => {
    // ... (rest of your code for marking chapter completed)
  };

  useEffect(() => {
    const fetchVideoId = async () => {
      if (activeChapter) {
        try {
          const videoId = activeChapter?.videoId;
          if (videoId) {
            const previewUrl = constructGoogleDrivePreviewUrl(videoId);
            setVideoId(previewUrl);
          } else {
            console.error('Video URL not found in activeChapter.video');
            // Handle missing video gracefully (e.g., display default video or message)
          }
        } catch (error) {
          console.error('Error fetching video URL:', error);
          // Handle errors gracefully (e.g., display error message)
        }
      }
    };

    fetchVideoId();
  }, [activeChapter]);

  function constructGoogleDrivePreviewUrl(videoId) {
    return `https://drive.google.com/file/d/${videoId}/preview`;
  }

  return activeChapter && (
    <div className="p-5">
      {videoId ? (
        <iframe
          width="100%" // Use width: 100% for responsiveness
          height="56.25%" // Maintain aspect ratio (16:9)
          src={videoId}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Chapter Video"
          className="aspect-ratio-16x9" // Add aspect ratio class for styling
        />
      ) : (
        <div className="text-center p-5">
          {/* Display message for missing video or error */}
          <p>Video not available at this time.</p>
        </div>
      )}
      <div className="p-5 border rounded-lg mt-5 flex justify-between items-center">
        <h2 className="text-[20px] font-medium">{activeChapter.name}</h2>
        {!isChapterCompleted(activeChapter.chapterNumber) ? (
          <button
            className="bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-800"
            onClick={_markChapterCompleted}
          >
            <CheckCircle2 />
            <h2>Mark as Completed</h2>
          </button>
        ) : null}
      </div>
    </div>
  );
}


export default FullVideoPlayer