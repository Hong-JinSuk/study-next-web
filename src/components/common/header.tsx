import { SidebarIcon } from 'lucide-react';

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <header className="flex items-center justify-between h-[56.95px] w-full bg-rose-50">
      <SidebarIcon
        size={30}
        className="ml-4 cursor-pointer text-gray-500 hover:text-black"
        onClick={toggleSidebar}
      />
      <div className="w-96 bg-yellow-50">
        <div>관리자님</div>
        <div></div>
      </div>
    </header>
  );
}
