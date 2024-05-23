import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex justify-center items-center flex-col">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section
            className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Night"
              src="/backgrounds.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:flex lg:justify-center lg:items-center lg:w-full lg:h-full">
              <div className="text-center p-12">
                <a className="block text-white" href="/">
                  <span className="sr-only">Home</span>
                </a>

                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Welcome to MyUNI
                </h2>

                <p className="mt-4 leading-relaxed text-white/90">
                  Now You can Learn, Track your progress inside this application.
                </p>
              </div>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                
                  <span className="sr-only">Home</span>
                  <svg
                    className="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    
                  </svg>

                  <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Welcome to MyUNI
                  </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                Now you can learn, track your progress inside this application.
                </p>
              </div>
              {/* <Image src ='/tubegurujicourse.png'
    width={200} height={100}
    className="m-5"
    /> */}
             {/* Aralık bırakmak için buraya bir `mt` sınıfı eklendi */}
              <div className="mt-5"></div>
        <SignIn />
      </div>
    </main>
  </div>
</section>
  </div>

  )
}