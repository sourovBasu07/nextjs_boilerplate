// This is the landing page 

import Button from '@/components/shared/button/Button';
import Link from 'next/link';
import React from 'react'

const Homepage = () => {
    return (
        <div>
            Root Page
            <Link href="/login">
                <Button type='submit' name='Sign In' className='bg-primary2 hover:bg-primary text-base font-medium leading-6' />
            </Link>
        </div>
    )
}

export default Homepage