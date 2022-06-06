// Generates screenshot of video src url
export const getVideoScreenshotUrl = async (
  url: string,
  count = 1,
): Promise<string | string[]> => new Promise((resolve) => {
  const res: string[] = [];
  const video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;

  const getScreen = () => {
    const ratio = video.videoWidth / video.videoHeight;
    const width = video.videoWidth - 100;
    const height = width / ratio;
    canvas.width = width;
    canvas.height = height;

    requestAnimationFrame(() => {
      context.fillRect(0, 0, width, height);
      context.drawImage(video, 0, 0, width, height);
      video.removeEventListener("loadeddata", getScreen);
      const img = canvas.toDataURL("image/jpeg");
      res.push(img)
      if (res.length > count - 1) {
        video.removeEventListener("timeupdate", getScreen);
        resolve(count === 1 ? res[0] : res)
      } else {
        if (res.length === 1) video.addEventListener("timeupdate", getScreen);
        video.currentTime = (video.duration * res.length) / count;
      }
    });
  }
  video.addEventListener("loadeddata", getScreen);

  video.src = url;
});
