import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = (): JSX.Element => {
  return (
    <nav className='flex items-center justify-between flex-wrap main-header p-6'>
      <div className='flex items-center flex-shrink-0 font-color-branding-white mr-6'>
        <div className='inline-block text-2xl font-bold px-4 py-2 leading-none border rounded font-color-branding-white border-white'>
          ISCI
        </div>
      </div>
      <div className='block md:hidden'>
        <button className='flex items-center px-3 py-2 border rounded font-color-branding-white focus:outline-none'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow md:flex md:items-center md:w-auto md:w-auto hidden'>
        <div className='text-sm md:flex-grow'>
          <NavLink
            exact
            activeClassName='font-color-branding-pink'
            to='/'
            className='block mt-4 md:inline-block md:mt-0 text-teal-200 ml-4 mr-6 text-lg font-semibold font-color-branding-white'>
            {' '}
            INICIO
          </NavLink>
          <NavLink
            activeClassName='font-color-branding-pink'
            to='/curses'
            className='block mt-4 md:inline-block md:mt-0 ml-4 mr-6 text-lg font-semibold font-color-branding-white'>
            {' '}
            CURSOS
          </NavLink>
          <NavLink
            activeClassName='font-color-branding-pink'
            to='/level'
            className='block mt-4 md:inline-block md:mt-0 ml-4 text-lg font-semibold font-color-branding-white'>
            {' '}
            TEST DE NIVEL
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
