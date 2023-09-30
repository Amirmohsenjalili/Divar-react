import React from 'react';

// img
import notfound from 'src/assets/images/notfound.png';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={notfound} alt="notfound img" className='h-72 w-52'/>
            <div className='my-12 text-3xl text-gray-500'>این راه به جایی نمی‌رسد!</div>
            <div className='mb-4 text-gray-400'>به نظر آدرس را اشتباه وارد کرده‌اید.</div>
            <div className='text-gray-400'>برای پیدا کردن مسیر درست می‌توانید <Link to='/' className='text-red-800'>بر روی صفحهٔ اول دیوار</Link> بزنید.</div>
        </div>
    );
};

export default NotFound;