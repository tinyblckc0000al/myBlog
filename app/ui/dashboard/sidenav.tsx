/*
 * @Author: hillary 781915596@qq.com
 * @Date: 2024-04-27 22:48:25
 * @LastEditTime: 2024-04-28 22:45:12
 * @FilePath: \nextjs-dashboard\app\ui\dashboard\sidenav.tsx
 * @Description: 
 * Tag：
 */
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-sky-50 p-4 md:h-30"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <div className="text-sky-700 text-lg font-bord" >熊猫芥末的博客</div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
