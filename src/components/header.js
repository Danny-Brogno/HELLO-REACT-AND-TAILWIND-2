import React, { useState, useEffect } from 'react';

export const Header = () => {
  return (
    <header className="bg-[var(--elegant-grey)] text-white">
      <nav className="navbar flex flex-col items-center justify-center text-2xl">
        <h1 className="text-5xl">MOVIE REVIEW APPLICATION</h1>
        <ul className="navbar-links w-full flex justify-around items-center p-4">
          <li>
            <a href="">
              LINK 1
            </a>
          </li>
          <li>
            <a href="">
              LINK 2
            </a>
          </li>
          <li>
            <a href="">
              LINK 3
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;