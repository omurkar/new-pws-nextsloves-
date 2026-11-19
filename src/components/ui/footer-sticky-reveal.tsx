'use client';

import React, { ReactNode } from 'react';

export interface FooterStickyRevealProps {
  children: ReactNode;
  className?: string;
}

export function FooterStickyReveal({ children, className = '' }: FooterStickyRevealProps) {
  return (
    <div className={`relative w-full overflow-visible ${className}`}>
      {children}
    </div>
  );
}

export default FooterStickyReveal;
