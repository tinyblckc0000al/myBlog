/*
 * @Author: hillary 781915596@qq.com
 * @Date: 2024-04-28 20:24:30
 * @LastEditTime: 2024-04-28 20:24:46
 * @FilePath: \nextjs-dashboard\app\dashboard\layout.tsx
 * @Description: 
 * Tag：
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}