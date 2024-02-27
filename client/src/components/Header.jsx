import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header className='bg-slate-200 shadow-md'>
         <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <Link to='/'>
               <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                  <span className='text-slate-500'>Real</span>
                  <span className='text-slate-700'>Estate</span>
               </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
               <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
               <FaSearch className='text-slate-600'></FaSearch>
            </form>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                     <span className="sr-only">Open main menu</span>
                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
               </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
               <ul className='flex gap-4'>
                  <Link to="/">
                     <li className='text-slate-7000 hover:underline'>Home</li>
                  </Link>
                  <Link to="/about">
                     <li className='text-slate-7000 hover:underline'>About</li>
                  </Link>
                  <Link to="/sign-in">
                     <li className='text-slate-7000 hover:underline'>Sign in</li>
                  </Link>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default Header;