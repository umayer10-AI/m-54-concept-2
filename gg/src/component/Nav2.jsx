"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav2 = () => {

    const p = usePathname()
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(session)

    return (
        <div>
            {
                user? <div>
                        <Button onClick={async() => await authClient.signOut()} variant='danger-soft'>Log Out</Button>
                      </div>
                    : <div className='flex items-center gap-5'>
                        <Link href={'/login'} className='font-semibold'>
                            {
                                p==='/login' ? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>
                                    Login
                                </Button>
                                : <button>Login</button>
                            }
                        </Link>
                        <Link href={'/signup'}><Button size='sm' className=' bg-blue-500'>Join Free</Button></Link>
                    </div>
            }
            
            
        </div>
    );
};

export default Nav2;