(function() {
    // Store user's preferred playback rate
    let userPreferredRate = 1.0;
    let isCurrentlyInAd = false;

    /**
     * Update the video playback rate based on whether an ad is playing.
     * Respect user's preferred playback rate when not in an ad.
     */
    function updatePlaybackRate() {
      const video = document.querySelector("video");
      if (!video) {
        return;
      }
  
      // Check for ad using alternative methods.
      const isAdPlaying = video.classList.contains("ad-showing") || document.querySelector(".ad-showing") !== null;
      
      // Store user's preferred rate when we detect they've changed it (and not in an ad)
      if (!isCurrentlyInAd && !isAdPlaying && video.playbackRate !== userPreferredRate) {
        userPreferredRate = video.playbackRate;
      }
      
      // Update our tracking of ad state
      isCurrentlyInAd = isAdPlaying;
      
      // Set appropriate rate based on whether an ad is playing
      const desiredRate = isAdPlaying ? 14.0 : userPreferredRate;
  
      // Only change if necessary.
      if (video.playbackRate !== desiredRate) {
        video.playbackRate = desiredRate;
      }
    }
  
    // Run on page load.
    window.addEventListener("load", updatePlaybackRate);
  
    // Modify the periodic check interval to 300ms for quicker response.
    setInterval(updatePlaybackRate, 300);
  
    // Also observe changes to the <html> element's class list.
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          updatePlaybackRate();
        }
      });
    });
  
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
})();
