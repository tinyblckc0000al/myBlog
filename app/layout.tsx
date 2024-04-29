/*
 * @Author: hillary 781915596@qq.com
 * @Date: 2024-04-27 22:48:25
 * @LastEditTime: 2024-04-27 23:50:14
 * @FilePath: \nextjs-dashboard\app\layout.tsx
 * @Description: 
 * Tag：
 */
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
