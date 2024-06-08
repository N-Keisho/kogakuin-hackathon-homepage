import Image from 'next/image';

const Loading = () => {
    return (
        <>
            <div className='flex justify-center items-center w-screen h-screen'>
                <Image src="/img/logo/icon.png" alt="loading" width={30} height={30} className='m-3 animate-spin' />
                <h1 className="text-2xl font-bold text-center animate-pulse">Loading</h1>
            </div>
        </>
    );
}

export default Loading;