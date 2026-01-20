import React, { useState, useEffect, useCallback } from 'react';

export const Header = () => {
  return (
    <div className="bg-[var(--elegant-grey)] text-white">
      <div className="header flex flex-col items-center justify-center text-2xl">
        <h1 className="text-5xl">MOVIE REVIEW APPLICATION</h1>
      </div>
    </div>
  )
}