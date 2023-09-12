import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import { Content } from 'antd/es/layout/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CSS Project 1',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Content>{children}</Content>
            </body>
        </html>
    );
}
