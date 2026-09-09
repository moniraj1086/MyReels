// MyReels Automated Public Video Stream Engine (Updated Active Feed)
const videoPool = [
    "https://zencdn.net",
    "https://html5demos.com",
    "https://w3.org"
];

function loadAutomatedReels() {
    console.log("Connecting global high-speed public CDN video pipeline...");
    const container = document.querySelector('.reels-container');
    if (!container) return;
    
    videoPool.forEach((videoUrl, index) => {
        const reel = document.createElement('div');
        reel.className = 'reel-viewport';
        reel.innerHTML = `
            <video src="${videoUrl}" loop autoplay muted playsinline style="width: 100%; height: 100vh; object-fit: cover;"></video>
            <div class="video-meta-data">
                <div class="username">@moniraj_boss</div>
                <div class="caption">Streaming live feed content directly into MyReels! 🚀 #Viral #Trending #Reels</div>
            </div>
            <div class="overlay-controllers">
                <button class="action-btn like-active" onclick="alert('Liked!')">❤️</button>
                <button class="action-btn" onclick="alert('Comments opening...')">💬</button>
                <button class="action-btn" onclick="alert('Sharing link...')">🔗</button>
            </div>
        `;
        container.appendChild(reel);
    });
}

document.addEventListener("DOMContentLoaded", loadAutomatedReels);
