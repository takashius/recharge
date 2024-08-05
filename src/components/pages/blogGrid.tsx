export default function BlogGrid() {
  return (
    <>

      <section className="relative z-10 pt-[150px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center mx-[-16px]">
            <div className="w-full md:w-8/12 lg:w-7/12 px-4">
              <div className="max-w-[570px] mb-12 md:mb-0">
                <h1 className="font-bold text-black dark:text-white text-2xl sm:text-3xl mb-5">Blog Grids</h1>
                <p className="font-medium text-base text-bodyColor leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices.
                  Ut quis dapibus libero.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-5/12 px-4">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <a href="index.html" className="font-medium text-base text-bodyColor pr-1 hover:text-primary"> Home </a>
                    <span className="block w-2 h-2 border-t-2 border-r-2 border-body-color rotate-45 mr-3"></span>
                  </li>
                  <li className="font-medium text-base text-primary">Blog Grids</li>
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


      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px] justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".1s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-01.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Best UI components for modern websites
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-01.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Samuyl Joshi </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".15s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Design
                  </span>
                  <img src="images/blog-02.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      9 simple ways to improve your design skills
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-02.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Musharof Chy </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Content Writer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".2s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-03.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Tips to quickly improve your coding speed.
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-03.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Lethium Deo </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".1s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-01.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Best UI components for modern websites
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-01.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Samuyl Joshi </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".15s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Design
                  </span>
                  <img src="images/blog-02.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      9 simple ways to improve your design skills
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-02.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Musharof Chy </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Content Writer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".2s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-03.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Tips to quickly improve your coding speed.
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-03.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Lethium Deo </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".1s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-01.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Best UI components for modern websites
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-01.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Samuyl Joshi </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".15s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Design
                  </span>
                  <img src="images/blog-02.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      9 simple ways to improve your design skills
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-02.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Musharof Chy </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Content Writer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".2s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-03.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Tips to quickly improve your coding speed.
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-03.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Lethium Deo </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".1s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-01.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Best UI components for modern websites
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-01.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Samuyl Joshi </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".15s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Design
                  </span>
                  <img src="images/blog-02.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      9 simple ways to improve your design skills
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-02.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Musharof Chy </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Content Writer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".2s">
                <a href="blog-details.html" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-03.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="blog-details.html"
                      className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
                      Tips to quickly improve your coding speed.
                    </a>
                  </h3>
                  <p
                    className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
                  </p>
                  <div className="flex items-center">
                    <div
                      className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                      <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                        <img src="images/author-03.png" alt="author" className="w-full" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                          By
                          <a href="#"
                            className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Lethium Deo </a>
                        </h4>
                        <p className="text-xs text-bodyColor">Graphic Designer</p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4 className="text-sm font-medium text-dark dark:text-white mb-1">Date</h4>
                      <p className="text-xs text-bodyColor">15 Dec, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px] wow fadeInUp" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center pt-8 justify-center">
                <li className="mx-1">
                  <a href="#"
                    className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] hover:bg-primary hover:bg-opacity-100 transition hover:text-white text-bodyColor px-4 text-sm min-w-[36px] h-9">
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#"
                    className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] hover:bg-primary hover:bg-opacity-100 transition hover:text-white text-bodyColor px-4 text-sm min-w-[36px] h-9">
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#"
                    className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] hover:bg-primary hover:bg-opacity-100 transition hover:text-white text-bodyColor px-4 text-sm min-w-[36px] h-9">
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#"
                    className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] hover:bg-primary hover:bg-opacity-100 transition hover:text-white text-bodyColor px-4 text-sm min-w-[36px] h-9">
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#"
                    className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] text-bodyColor px-4 text-sm min-w-[36px] h-9 cursor-not-allowed">
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#"
                    className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] hover:bg-primary hover:bg-opacity-100 transition hover:text-white text-bodyColor px-4 text-sm min-w-[36px] h-9">
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a href="#"
                    className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] hover:bg-primary hover:bg-opacity-100 transition hover:text-white text-bodyColor px-4 text-sm min-w-[36px] h-9">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
