"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav2 = () => {

    const p = usePathname()

    return (
        <div>
            <Link href={'/login'} className='text-sm font-semibold'>
                {
                    p==='/login' ? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>
                        Login
                    </Button>
                    : <button>Login</button>
                }
            </Link>
            <Link href={'/register'}><Button size='sm' className=' bg-blue-500'>Join Free</Button></Link>
        </div>
    );
};

export default Nav2;