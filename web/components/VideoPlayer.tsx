interface VideoPlayerProps {
  src: string;
  type?: string; // mp4, etc
  className?: string; // tailwind classes
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type = 'video/mp4',
  className = '',
}) => {
  return (
    <video controls className={`w-full ${className}`}>
      <source src={src} type={type} />
    </video>
  );
};

export default VideoPlayer;
