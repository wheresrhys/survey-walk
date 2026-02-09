'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// import { HSTabs } from "flyonui/flyonui";

// declare global {
//   interface Window {
//     HSTabs: typeof HSTabs;
//   }
// }

// export { };


async function loadFlyonUI() {
  return import('flyonui/flyonui');
}

export default function LoadFlyonUI() {
  const path = usePathname();

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        console.log('aaaaa')
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [path]);

  return null;
}
