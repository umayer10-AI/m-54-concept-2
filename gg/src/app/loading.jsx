import { Spinner } from '@heroui/react';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" />
            </div>
        </div>
    );
};

export default Loading;