// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';

// // Map of links to display in the side navigation.
// // Depending on the size of the application, this would be stored in a database.
// const links = [
//   { name: 'Home', href: '/dashboard', icon: HomeIcon },
//   {
//     name: 'Invoices',
//     href: '/dashboard/invoices',
//     icon: DocumentDuplicateIcon,
//   },
//   { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
// ];

// export default function NavLinks() {
//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <a
//             key={link.name}
//             href={link.href}
//             className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{link.name}</p>
//           </a>
//         );
//       })}
//     </>
//   );
// }
'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  MusicalNoteIcon,
  ChartPieIcon,
  ChartBarIcon,
  PencilSquareIcon,
  PencilIcon,
  BookmarkSlashIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// ...
const links = [
  {name:'主页', href:'/dashboard',icon:HomeIcon},
  {name:'我的日志', href:'/dashboard/Customer',icon:BookOpenIcon},
  {name:'我的统计', href:'/dashboard/Invoices',icon:ChartBarIcon},
]
export default function NavLinks() {
  
  const pathname = usePathname();
  console.log('pathname: ', pathname);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-yellow-50 hover:text-green-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-50 text-sky-700': pathname === link.href,
              },
            )}
          >
              <div className={clsx({"h-0 w-0 border-b-[5px] border-t-transparent border-b-transparent border-l-[8px] border-t-[5px] border-l-green-400": pathname === link.href})} ></div>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
