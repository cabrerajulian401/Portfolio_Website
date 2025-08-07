const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const videos = [
  'public/My Movie 9.mp4',
  'public/Chrome_Portfolio.mp4',
  'public/RealEstate.mp4',
  'public/Web_AI_port.mp4',
  'public/cardmatch-demo.mp4'
];

async function uploadVideo(filePath) {
  const formData = new FormData();
  const fileStream = fs.createReadStream(filePath);
  const fileName = path.basename(filePath);
  
  formData.append('file', fileStream, fileName);
  
  try {
    const response = await fetch('/api/upload-videos', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    console.log(`Uploaded ${fileName}: ${result.url}`);
    return result.url;
  } catch (error) {
    console.error(`Failed to upload ${fileName}:`, error);
    return null;
  }
}

async function uploadAllVideos() {
  console.log('Starting video uploads...');
  
  for (const video of videos) {
    if (fs.existsSync(video)) {
      await uploadVideo(video);
    } else {
      console.log(`File not found: ${video}`);
    }
  }
  
  console.log('Upload complete!');
}

uploadAllVideos(); 