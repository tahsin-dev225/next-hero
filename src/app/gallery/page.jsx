import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className='min-h-screen px-12 py-14'>
            <h3 className="text-3xl mb-12">Gallery Page</h3>
            <div className="grid grid-cols- gap-4">
                {
                    [1,2,3,4,5]?.map(img =>
                        <Image key={img} src="/image/img1.jfif" className='my-8 ' width={1900} height={900} alt='im'></Image>
                    )
                }
                {/* <img src="/image/img1.jfif" className='w-full' alt="im" />  */}
            </div>
        </div>
    );
};

export default GalleryPage;