import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/utils/authOptions';
import VideoPlayer from '@/components/VideoPlayer';

export default async function VideoPage() {
  // check for valid session
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login page if no session is found
    redirect('/login');
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-black">
      <VideoPlayer src="src.sc" />
    </div>
  );
}
