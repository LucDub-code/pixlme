// import { Jersey_10 } from 'next/font/google'

// const jersey = Jersey_10({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div className='min-h-screen grid grid-cols-5'>

      <div className='col-span-3 flex items-center justify-center bg-linear-to-t
       from-mauve from-0%
       via-pink via-20%
       to-yellow to-70%
       '>

      </div>

      <div className='col-span-2 flex items-center justify-center'>
        <p>FORM</p>
      </div>

    </div>
  );
}
