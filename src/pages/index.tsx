import Head from 'next/head'
import { Rubik } from 'next/font/google'
import { CardPhone } from '@/components'

const rubik = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat ilustration</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
      </Head>

      <div className="w-full h-screen absolute -z-10 top-0 left-0 flex flex-col lg:flex-row justify-between">
        <div className="w-[75%] lg:w-[50%] h-[87%] -translate-x-[35%] lg:-translate-x-[30%] 2xl:-translate-x-[15%] rounded-b-full bg-gradient-to-b from-lightMagenta to-lightViolet" />
        <div className="flex w-full h-full justify-end items-end overflow-hidden">
          <div className="w-[75%] fixed lg:w-[50%] h-[50%] lg:static lg:h-[87%] rounded-t-full translate-x-[35%] lg:translate-x-[28%] 2xl:translate-x-[15%] bg-gray-200" />
        </div>
      </div>

      <main className={rubik.className}>
        <div className="container mx-auto max-w-screen-lg px-2">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-full sm:col-span-5">
              <div className="grid place-content-center my-14 sm:my-0 sm:h-[100vh]">
                <CardPhone />
              </div>
            </div>
            <div className="col-span-full sm:col-span-7">
              <div className="flex items-center justify-center h-full">
                <div className="max-w-[455px] pb-20 sm:pb-0">
                  <h1 className="text-center text-4xl sm:text-start sm:text-4xl font-[600] text-veryDarkDesaturatedViolet mb-6">Simple booking</h1>
                  <p className="px-10 text-center text-base sm:px-0 sm:text-start text-darkGrayishViolet">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="attribution px-10 py-4 lg:absolute lg:bottom-0 lg:right-0 lg:mr-4 lg:mb-4">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend
          Mentor</a>.
        Coded by <a href="https://www.rafael-sequeira-sandoval.dev/es" target="_blank" rel="noopener">Rafael Sequeira Sandoval</a>.
      </footer>
    </>
  )
}