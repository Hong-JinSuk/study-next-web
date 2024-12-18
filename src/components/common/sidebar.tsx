import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <aside
      // className={`transition-all duration-500 ${
      //   isCollapsed ? '-translate-x-64' : 'translate-x-0'
      // } flex flex-col h-screen w-64 bg-slate-200`}
      className={`transition-all duration-500 ${
        isCollapsed ? 'w-0' : 'w-64'
      } flex flex-col h-screen bg-slate-200`}
    >
      <header className="w-full py-4 px-5 bg-slate-400">
        <Link href={'/main'}>
          <Image src={logo} alt="" />
        </Link>
      </header>
      <section className="flex-grow overflow-auto">
        <div className="h-[300px] bg-green-100">?</div>
        <div className="h-[300px] bg-green-200">?</div>
        <div className="h-[400px]"></div>
      </section>
      <footer className="w-full p-4 bg-slate-400">footer</footer>
    </aside>
  );
}
