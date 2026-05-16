import React from 'react';
import AllCards from './AllCards';
import { userData } from '@/lib/data';

const Card = async () => {

    const data = await userData()

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                data.map(v => <AllCards key={v._id} p={v}></AllCards>)
            }
        </div>
    );
};

export default Card;