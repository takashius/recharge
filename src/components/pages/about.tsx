export default function About() {
  return (
    <>
      <section className="relative z-10 pt-[150px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center mx-[-16px]">
            <div className="w-full md:w-8/12 lg:w-7/12 px-4">
              <div className="max-w-[570px] mb-12 md:mb-0">
                <h1 className="font-bold text-black dark:text-white text-2xl sm:text-3xl mb-5">About Page</h1>
                <p className="font-medium text-base text-body-color leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices.
                  Ut quis dapibus libero.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-5/12 px-4">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <a href="index.html" className="font-medium text-base text-body-color pr-1 hover:text-primary"> Home </a>
                    <span className="block w-2 h-2 border-t-2 border-r-2 border-body-color rotate-45 mr-3"></span>
                  </li>
                  <li className="font-medium text-base text-primary">About page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#paint0_linear_111:578)" />
              <defs>
                <linearGradient id="paint0_linear_111:578" x1="-40.5" y1="117" x2="301.926" y2="-97.1485"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)" />
              <path opacity="0.1" d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)" />
              <defs>
                <linearGradient id="paint0_linear_0:1" x1="644" y1="221" x2="429.946" y2="37.0429"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_0:1" x1="18.3648" y1="166.016" x2="105.377" y2="32.3398"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>


      <section id="about" className="pt-[120px]">
        <div className="container">
          <div className="pb-[100px] border-b border-white border-opacity-[.15]">
            <div className="flex flex-wrap items-center mx-[-16px]">
              <div className="w-full lg:w-1/2 px-4">
                <div className="mb-12 lg:mb-0 max-w-[570px] wow fadeInUp" data-wow-delay=".15s">
                  <h2
                    className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] lg:text-4xl xl:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-6">
                    Crafted for Startup, SaaS and Business Sites.
                  </h2>
                  <p className="font-medium text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed mb-11">
                    The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business
                    applications with interactive panel discussions and roundtables.
                  </p>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full sm:w-1/2 lg:w-full xl:w-1/2 px-3">
                      <p className="flex items-center text-body-color text-lg font-medium mb-5">
                        <span
                          className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-4">
                          <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
                            <path
                              d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </span>
                        Premium quality
                      </p>
                      <p className="flex items-center text-body-color text-lg font-medium mb-5">
                        <span
                          className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-4">
                          <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
                            <path
                              d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </span>
                        No code required
                      </p>
                      <p className="flex items-center text-body-color text-lg font-medium mb-5">
                        <span
                          className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-4">
                          <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
                            <path
                              d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </span>
                        Use for lifetime
                      </p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-full xl:w-1/2 px-3">
                      <p className="flex items-center text-body-color text-lg font-medium mb-5">
                        <span
                          className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-4">
                          <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
                            <path
                              d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </span>
                        Regular updates
                      </p>
                      <p className="flex items-center text-body-color text-lg font-medium mb-5">
                        <span
                          className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-4">
                          <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
                            <path
                              d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </span>
                        Rich documentation
                      </p>
                      <p className="flex items-center text-body-color text-lg font-medium mb-5">
                        <span
                          className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-4">
                          <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
                            <path
                              d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </span>
                        Developer friendly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="text-center lg:text-right wow fadeInUp" data-wow-delay=".2s">
                  <img src="images/about-image.svg" alt="about-image" className="max-w-full mx-auto lg:mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pt-[100px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center mx-[-16px]">
            <div className="w-full lg:w-1/2 px-4">
              <div className="text-center lg:text-left mb-12 lg:mb-0 wow fadeInUp" data-wow-delay=".15s">
                <img src="images/about-image-2.svg" alt="about image" className="max-w-full mx-auto lg:ml-0" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-[470px] wow fadeInUp" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4">Bug free
                    code</h3>
                  <p className="text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4">Premier
                    support</h3>
                  <p className="text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4">Regular
                    updates</h3>
                  <p className="text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed font-medium">
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
