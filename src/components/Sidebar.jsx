import Link from 'next/link';
import {FaXTwitter} from 'react-icons/fa6';
import {HiHome} from 'react-icons/hi';
export default function Sidebar() {
  return (
    <div>
      <Link href='/'>
        <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'/>
      </Link>
    </div>
  )
}
