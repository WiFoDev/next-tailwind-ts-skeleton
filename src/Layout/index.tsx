import Head from "next/head";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>APP</title>
        <meta content="The next generation app" name="My App" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header className="sticky top-0 z-20 w-full bg-background/50 backdrop-blur-sm">
        <nav className="flex h-16 mx-auto max-w-screen-standar items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          <div className="mr-auto text-xl">My APP</div>
          <ul className="text-lg">Navigation List For The Page</ul>
        </nav>
      </header>
      <main className="flex-1 mx-auto w-full grid max-w-screen-standar pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        {children}
      </main>
      <footer className="relative pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-screen-standar py-6 flex justify-center pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Made with ❤️ by WiFo
        </div>
      </footer>
    </div>
  );
};
