import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { PiMonitorPlayFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false); 
  return (
    <nav className='shadow p-1 px-1'>
      <div className='md:flex justify-between items-center font-semibold sticky'>
      <div className='flex justify-between'>
      <Link to={'/'}><PiMonitorPlayFill size={"40px"}/></Link>
      <div className='md:hidden'>
        <RxHamburgerMenu size={'40px'} onClick={()=>setMenu(!menu)}/>
      </div>
      </div>
      <ul className={`${menu ? 'hidden' :'block'} ${menu ? 'flex': ''} md:flex text-xl mt-3 items-center`}>
        <li className='hover:bg-slate-200 md:mx-5 py-1 sm:p-3 rounded-lg'>Shorts</li>
        <li className='hover:bg-slate-200 md:mx-5 py-1 sm:p-3 rounded-lg'>Videos</li>
        <li className='hover:bg-slate-200 md:mx-5 py-1 sm:p-3 rounded-lg'>About</li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
