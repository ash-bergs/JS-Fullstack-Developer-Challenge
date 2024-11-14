import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import VideoPlayer from '@/components/VideoPlayer';

export default async function VideoPage() {
  // check for valid session
  const session = await getServerSession(authOptions);
  // instantiate session
  console.log(session);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-black">
      <VideoPlayer src="src.sc" />
    </div>
  );
}
