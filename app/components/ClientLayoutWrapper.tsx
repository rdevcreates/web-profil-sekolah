'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hideLayout =
    pathname === "/pages/auth/login" ||
    pathname === "/register" ||
    pathname.startsWith("/pages/admin");

  if (!isMounted) return null;

  return (
    <>
      {!hideLayout && <Header />}
      <main className="min-h-screen w-full">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
