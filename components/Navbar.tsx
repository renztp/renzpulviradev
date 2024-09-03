import Image from 'next/image';
import apps_icon from '../assets/mdi_apps.svg'
import shutdown_icon from '../assets/mdi_shutdown.svg'
import Link from 'next/link';

function closeWindow() {
  window.close();
}

export const Navbar = (props : {}) => {
  return (
    <div className='flex justify-between py-1 px-2 border-[3px] border-neutral-800 rounded-lg mt-3 mb-6 w-shadow'>
      {/* <Image src={apps_icon} alt={''} width={24} height={24}/>*/}
      <div className="time">11:37 PM</div>
      <div>
        <Link className='mr-3' href="/">About Me</Link>
        <Link className='mr-3' href="/blog">Blog</Link>
        <Link href="/dotfiles">Dotfiles</Link>
      </div>
      <Image src={shutdown_icon} alt={''} width={24} height={24}/>
    </div>
  )
}

