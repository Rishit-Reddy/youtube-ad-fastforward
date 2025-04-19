(function() {
    /**
     * Update the video playback rate based on whether an ad is playing.
     * Add debugging logs to verify ad detection and playback rate changes.
     */
    function updatePlaybackRate() {
      const video = document.querySelector("video");
      if (!video) {
        return;
      }
  
      // Check for ad using alternative methods.
      const isAdPlaying = video.classList.contains("ad-showing") || document.querySelector(".ad-showing") !== null;
      const desiredRate = isAdPlaying ? 14.0 : 1.0;
  
      // Only change if necessary.
      if (video.playbackRate !== desiredRate) {
        video.playbackRate = desiredRate;
      }
    }
  
    // Run on page load.
    window.addEventListener("load", updatePlaybackRate);
  
    // Modify the periodic check interval to 300ms for quicker response.
    setInterval(updatePlaybackRate, 300);
  
    // Also observe changes to the <html> element’s class list.
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          updatePlaybackRate();
        }
      });
    });
  
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  })();
