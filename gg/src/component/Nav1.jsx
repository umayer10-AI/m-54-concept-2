"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav1 = () => {

    const p = usePathname()

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "courses",
            path: "/courses"
        },
        {
            name: "Add Course",
            path: "/add-course"
        },
        {
            name: "Dashboard",
            path: "/dashboard"
        },
    ]

    return (
        <div className='flex items-center gap-8'>
            {
                links.map(v => (
                    <Link key={v.name} href={v.path} className='text-sm font-semibold'>
                        {
                            p===v.path? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>
                                {v.name}
                            </Button>
                            : <button>{v.name}</button>
                        }
                    </Link>
                ))
            }
        </div>
    );
};

export default Nav1;