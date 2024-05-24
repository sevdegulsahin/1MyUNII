import React, { useEffect } from 'react';
import SearchBar from './../_components/SearchBar';
import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import { AlignLeft, LogIn } from 'lucide-react'; // LogIn simgesi için lucide-react ekledik
import SideBarNav from './SideBarNav';

function Header({ toggleSideBar }) {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {}, [user]);

    return (
        <div className="md:ml-64 p-6 border-b flex items-center justify-between">
            <AlignLeft className="md:hidden" onClick={() => toggleSideBar(true)} />
            <SearchBar />
            {!user ? (
                <button
                    onClick={() => router.push('/sign-in')}
                    className="flex items-center space-x-2 text-red-600" // Kırmızı renk sınıfı eklendi
                >
                    <LogIn size={16} style={{ color: '#bd0000' }} /> {/* Küçük boyut için size=16 */}
                    <span className="text-black">Login</span> {/* Siyah renk sınıfı eklendi */}
                </button>
            ) : (
                <UserButton />
            )}
        </div>
    );
}

export default Header;
