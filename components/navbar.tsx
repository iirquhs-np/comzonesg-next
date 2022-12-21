import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setOpen] = useState(false);


  return (
    <nav className={'p-3 bg-zinc-100'}>
      <div className={'hidden sm:flex  xl:max-w-7xl mx-auto justify-between'}>
        <Link href={'/'}>
          <div className={'text-xl'}><strong>COM</strong>ZONE</div>
        </Link>
        <div className={'flex'}>
          <ul className={'flex items-center space-x-3 text-gray-700'}>
            <li><Link href={'/shop'}>Shop</Link></li>
            <li><Link href={'/rewards'}>Rewards</Link></li>
            <li><Link href={'/support'}>Support</Link></li>
          </ul>

          <Link className={'items-center pl-3 py-1'} href={'/cart'}>
            <svg className="w-6 h-6 stroke-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </Link>

          <Link className={'items-center pl-3 py-1'} href={'/account'}>
            <svg className="w-6 h-6 stroke-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </Link>
        </div>
      </div>

      { isOpen ? (
        <div className={'sm:hidden'}>
          <div className={'flex justify-between items-center'}>
            <Link href={'/'}>
              <div className={'text-xl'}><strong>COM</strong>ZONE</div>
            </Link>

            <button onClick={() => setOpen(false)} className={'p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          <ul className={'mt-2 text-gray-700 space-y-3'}>
            <li><Link href={'/shop'}>Shop</Link></li>
            <li><Link href={'/rewards'}>Rewards</Link></li>
            <li><Link href={'/support'}>Support</Link></li>
            <div className={'flex space-x-3'}>
              <li>
                <Link className={'items-center'} href={'/cart'}>
                  <svg className="w-6 h-6 stroke-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link className={'items-center'} href={'/account'}>
                  <svg className="w-6 h-6 stroke-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <>
          <div className={'flex sm:hidden justify-between items-center'}>
            <Link href={'/'}>
              <div className={'text-xl'}><strong>COM</strong>ZONE</div>
            </Link>

            <button onClick={() => setOpen(true)} className={'p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </>
      )}

    </nav>
  );
}