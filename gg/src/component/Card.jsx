import React from 'react';
import AllCards from './AllCards';
import { userData } from '@/lib/data';

const Card = async ({search}) => {

    const data = await userData({search})

    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                data.map(v => <AllCards key={v._id} p={v}></AllCards>)
            }
        </div>
    );
};

export default Card;