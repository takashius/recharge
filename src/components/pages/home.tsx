import { useTranslation } from 'react-i18next'
import {
  DirectionsBus as BusIcon,
  Map as MapIcon,
  Notifications as NotificationsIcon,
  ConfirmationNumber as TicketIcon,
  People as PeopleIcon,
  Security as SecurityIcon
} from '@mui/icons-material'
import ImageSlider from '../ui/ImageSlider'
import { pageTitle } from 'src/hooks'

export default function Home() {
  const { t } = useTranslation()
  pageTitle(t('title'))

  return (
    <>
      <section id="home"
        className="relative overflow-hidden z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center wow fadeInUp" data-wow-delay=".2s">
                <h1
                  className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight my-10">
                  {t('home.cta.title')}
                </h1>
                <p
                  className="font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-bodyColor dark:text-white dark:opacity-90 mb-16">
                  {t('home.cta.subTitle')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 z-[-1]">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
            <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)" />
            <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)" />
            <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)" />
            <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)" />
            <defs>
              <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.159" x2="184.521" y2="448.882"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_25:217" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint6_linear_25:217" x1="118.524" y1="29.2497" x2="166.965" y2="338.63"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1]">
          <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)" />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)" />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)" />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)" />
            <circle opacity="0.8" cx="214.505" cy="60.5054" r="49.7205" transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)" />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint1_linear_25:218" x1="156.389" y1="69.2405" x2="156.389" y2="212.24"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint2_linear_25:218" x1="125.389" y1="69.2405" x2="125.389" y2="212.24"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint3_linear_25:218" x1="93.8507" y1="67.2674" x2="89.9278" y2="210.214"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint4_linear_25:218" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint5_radial_25:218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)">
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>

      </section>

      <section id="features" className="bg-primary08/5 bg-opacity-[3%] pt-[120px] pb-[50px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center mb-[100px] wow fadeInUp" data-wow-delay=".1s">
                <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">{t('home.features.title')}</h2>
                <p className="text-bodyColor text-base md:text-lg leading-relaxed md:leading-relaxed">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
                  in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-[70px] wow fadeInUp" data-wow-delay=".15s">
                <div
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary">
                  <BusIcon fontSize="large" className="text-primary" />
                </div>
                <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5">
                  {t('home.features.routesTitle')}
                </h3>
                <p className="text-bodyColor text-base leading-relaxed font-medium pr-[10px]">
                  {t('home.features.routesDescription')}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-[70px] wow fadeInUp" data-wow-delay=".2s">
                <div
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary">
                  <MapIcon fontSize="large" className="text-primary" />
                </div>
                <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5">
                  {t('home.features.trackingTitle')}
                </h3>
                <p className="text-bodyColor text-base leading-relaxed font-medium pr-[10px]">
                  {t('home.features.trackingDescription')}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-[70px] wow fadeInUp" data-wow-delay=".25s">
                <div
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary">
                  <NotificationsIcon fontSize="large" className="text-primary" />
                </div>
                <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5">
                  {t('home.features.notificationsTitle')}
                </h3>
                <p className="text-bodyColor text-base leading-relaxed font-medium pr-[10px]">
                  {t('home.features.notificationsDescription')}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-[70px] wow fadeInUp" data-wow-delay=".1s">
                <div
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary">
                  <TicketIcon fontSize="large" className="text-primary" />
                </div>
                <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5">
                  {t('home.features.ratesTitle')}
                </h3>
                <p className="text-bodyColor text-base leading-relaxed font-medium pr-[10px]">
                  {t('home.features.ratesDescription')}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-[70px] wow fadeInUp" data-wow-delay=".15s">
                <div
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary">
                  <PeopleIcon fontSize="large" className="text-primary" />
                </div>
                <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5">
                  {t('home.features.serviceTitle')}
                </h3>
                <p className="text-bodyColor text-base leading-relaxed font-medium pr-[10px]">
                  {t('home.features.serviceDescription')}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-[70px] wow fadeInUp" data-wow-delay=".2s">
                <div
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 mb-10 text-primary">
                  <SecurityIcon fontSize="large" className="text-primary" />
                </div>
                <h3 className="font-bold text-black dark:text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-5">
                  {t('home.features.security')}
                </h3>
                <p className="text-bodyColor text-base leading-relaxed font-medium pr-[10px]">
                  {t('home.features.securityDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-[120px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center mb-20 wow fadeInUp" data-wow-delay=".1s">
                <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
                  {t('home.video')}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] rounded-md overflow-hidden wow fadeInUp" data-wow-delay=".15s">
                <div className="relative items-center justify-center">
                  <iframe width="770" height="400" src="https://www.youtube.com/embed/Ji44xiupvTg?si=kxaAxN7YmRXyl8V8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[-1]">
          <img src="images/shape.svg" alt="shape" className="w-full" />
        </div>
      </section>

      <section className="relative z-10 pt-[120px] pb-20 bg-primary/5 bg-opacity-[3%]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center mb-[100px] wow fadeInUp" data-wow-delay=".1s">
                <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
                  {t('home.testimonials')}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="shadow-one bg-white dark:bg-[#1D2144] rounded-md p-8 lg:px-5 xl:px-8 mb-10 wow fadeInUp"
                data-wow-delay=".1s">
                <div className="flex items-center mb-5">
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                </div>
                <p
                  className="text-base text-bodyColor dark:text-white leading-relaxed pb-8 border-b border-body-color dark:border-white border-opacity-10 dark:border-opacity-10 mb-8">
                  “Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a
                  community.
                </p>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden max-w-[50px] w-full h-[50px] mr-4">
                    <img src="images/auth-01.png" alt="image" />
                  </div>
                  <div className="w-full">
                    <h5 className="text-lg lg:text-base xl:text-lg text-dark dark:text-white font-semibold mb-1">Musharof Chy
                    </h5>
                    <p className="text-sm text-bodyColor">Founder @TailGrids</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="shadow-one bg-white dark:bg-[#1D2144] rounded-md p-8 lg:px-5 xl:px-8 mb-10 wow fadeInUp"
                data-wow-delay=".15s">
                <div className="flex items-center mb-5">
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                </div>
                <p
                  className="text-base text-bodyColor dark:text-white leading-relaxed pb-8 border-b border-body-color dark:border-white border-opacity-10 dark:border-opacity-10 mb-8">
                  “Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a
                  community.
                </p>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden max-w-[50px] w-full h-[50px] mr-4">
                    <img src="images/auth-02.png" alt="image" />
                  </div>
                  <div className="w-full">
                    <h5 className="text-lg lg:text-base xl:text-lg text-dark dark:text-white font-semibold mb-1">Devid Weilium
                    </h5>
                    <p className="text-sm text-bodyColor">Founder @UIdeck</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="shadow-one bg-white dark:bg-[#1D2144] rounded-md p-8 lg:px-5 xl:px-8 mb-10 wow fadeInUp"
                data-wow-delay=".2s">
                <div className="flex items-center mb-5">
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                  <span className="text-yellow mr-1 block">
                    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
                      <path
                        d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
                    </svg>
                  </span>
                </div>
                <p
                  className="text-base text-bodyColor dark:text-white leading-relaxed pb-8 border-b border-body-color dark:border-white border-opacity-10 dark:border-opacity-10 mb-8">
                  “Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a
                  community.
                </p>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden max-w-[50px] w-full h-[50px] mr-4">
                    <img src="images/auth-03.png" alt="image" />
                  </div>
                  <div className="w-full">
                    <h5 className="text-lg lg:text-base xl:text-lg text-dark dark:text-white font-semibold mb-1">Lethium Frenci
                    </h5>
                    <p className="text-sm text-bodyColor">Founder @Lineicons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-0 z-[-1]">
          <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.3" x="422.819" y="-70.8145" width="196" height="541.607" rx="2"
              transform="rotate(51.2997 422.819 -70.8145)" fill="url(#paint0_linear_83:2)" />
            <rect opacity="0.3" x="426.568" y="144.886" width="59.7544" height="541.607" rx="2"
              transform="rotate(51.2997 426.568 144.886)" fill="url(#paint1_linear_83:2)" />
            <defs>
              <linearGradient id="paint0_linear_83:2" x1="517.152" y1="-251.373" x2="517.152" y2="459.865"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_83:2" x1="455.327" y1="-35.673" x2="455.327" y2="675.565"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-5 z-[-1]">
          <svg width="279" height="106" viewBox="0 0 279 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path
                d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
                stroke="url(#paint0_linear_72:302)" />
              <path
                d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
                stroke="url(#paint1_linear_72:302)" />
              <path
                d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
                stroke="url(#paint2_linear_72:302)" />
              <path
                d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
                stroke="url(#paint3_linear_72:302)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_72:302" x1="256.267" y1="53.6717" x2="-40.8688" y2="8.15715"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint1_linear_72:302" x1="256.267" y1="42.6717" x2="-40.8688" y2="-2.84285"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint2_linear_72:302" x1="256.267" y1="64.6717" x2="-40.8688" y2="19.1572"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint3_linear_72:302" x1="256.267" y1="76.6717" x2="-40.8688" y2="31.1572"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section id="pricing" className="relative z-10 pt-[120px] pb-20">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[655px] text-center mb-[100px] wow fadeInUp" data-wow-delay=".1s">
                <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
                  {t('home.slider.title')}
                </h2>
                <p className="text-bodyColor text-base md:text-lg leading-relaxed md:leading-relaxed max-w-[570px] mx-auto">
                  {t('home.slider.subTitle')}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <ImageSlider />
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 z-[-1]">
          <svg width="239" height="601" viewBox="0 0 239 601" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.3" x="-184.451" y="600.973" width="196" height="541.607" rx="2"
              transform="rotate(-128.7 -184.451 600.973)" fill="url(#paint0_linear_93:235)" />
            <rect opacity="0.3" x="-188.201" y="385.272" width="59.7544" height="541.607" rx="2"
              transform="rotate(-128.7 -188.201 385.272)" fill="url(#paint1_linear_93:235)" />
            <defs>
              <linearGradient id="paint0_linear_93:235" x1="-90.1184" y1="420.414" x2="-90.1184" y2="1131.65"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_93:235" x1="-159.441" y1="204.714" x2="-159.441" y2="915.952"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section id="blog" className="bg-primary/5 bg-opacity-5 pt-[120px] pb-20">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center mb-[100px] wow fadeInUp" data-wow-delay=".1s">
                <h2 className="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-[45px] mb-4">
                  {t('home.news.title')}
                </h2>
                <p className="text-bodyColor text-base md:text-lg leading-relaxed md:leading-relaxed">
                  {t('home.news.subTitle')}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px] justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
              <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
                data-wow-delay=".1s">
                <a href="#" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-01.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="#"
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
                <a href="#" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Design
                  </span>
                  <img src="images/blog-02.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="#"
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
                <a href="#" className="w-full block relative">
                  <span
                    className="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white">
                    Computer
                  </span>
                  <img src="images/blog-03.jpg" alt="image" className="w-full" />
                </a>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                  <h3>
                    <a href="#"
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
        </div>
      </section>

      <section id="contact" className="pt-[120px] pb-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full lg:w-8/12 px-4">
              <div
                className="bg-primary/5 bg-opacity-[3%] dark:bg-dark rounded-md p-11 mb-12 lg:mb-5 sm:p-[55px] lg:p-11 xl:p-[55px] wow fadeInUp"
                data-wow-delay=".15s
              ">
                <h2 className="font-bold text-black dark:text-white text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3">
                  {t('home.contact.title')}
                </h2>
                <p className="text-bodyColor text-base font-medium mb-12">
                  {t('home.contact.subTitle')}
                </p>
                <form>
                  <div className="flex flex-wrap mx-[-16px]">
                    <div className="w-full md:w-1/2 px-4">
                      <div className="mb-8">
                        <label htmlFor="name" className="block text-sm font-medium text-dark dark:text-white mb-3">
                          {t('home.contact.form.name')}
                        </label>
                        <input type="text" placeholder={t('home.contact.form.namePlaceholder')}
                          className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                      <div className="mb-8">
                        <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-3">
                          {t('home.contact.form.email')}
                        </label>
                        <input type="email" placeholder={t('home.contact.form.emailPlaceholder')}
                          className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary" />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label htmlFor="message" className="block text-sm font-medium text-dark dark:text-white mb-3">
                          {t('home.contact.form.message')}
                        </label>
                        <textarea name="message" placeholder={t('home.contact.form.messagePlaceholder')}
                          className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary resize-none"></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <a href="#"
                        className="text-base font-medium text-white bg-primary py-4 px-9 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out">
                        {t('home.contact.form.submit')}
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div
                className="relative z-10 rounded-md bg-primary/5 bg-opacity-[3%] dark:bg-opacity-10 p-8 sm:p-11 lg:p-8 xl:p-11 mb-5 wow fadeInUp"
                data-wow-delay=".2s
              ">
                <h3 className="text-black dark:text-white font-bold text-2xl leading-tight mb-4">
                  {t('home.subscribe.title')}
                </h3>
                <p
                  className="font-medium text-base text-bodyColor leading-relaxed pb-11 mb-11 border-b border-body-color border-opacity-25 dark:border-white dark:border-opacity-25">
                  {t('home.subscribe.subTitle')}
                </p>
                <form>
                  <input type="text" name="name" placeholder={t('home.contact.form.namePlaceholder')}
                    className="w-full border border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 dark:bg-[#242B51] rounded-md py-3 px-6 font-medium text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary focus:border-opacity-100 mb-4" />
                  <input type="email" name="email" placeholder={t('home.contact.form.emailPlaceholder')}
                    className="w-full border border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 dark:bg-[#242B51] rounded-md py-3 px-6 font-medium text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary focus:border-opacity-100 mb-4" />
                  <input type="submit" value="Subscribe"
                    className="w-full border border-primary bg-primary rounded-md py-3 px-6 font-medium text-white text-base text-center outline-none cursor-pointer focus-visible:shadow-none hover:shadow-signUp hover:bg-opacity-80 transition duration-80 ease-in-out mb-4" />
                  <p className="text-base text-bodyColor text-center font-medium leading-relaxed">
                    {t('home.subscribe.note')}
                  </p>
                </form>
                <div className="absolute top-0 left-0 z-[-1]">
                  <svg width="370" height="596" viewBox="0 0 370 596" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_88:141" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="370"
                      height="596">
                      <rect width="370" height="596" rx="2" fill="#1D2144" />
                    </mask>
                    <g mask="url(#mask0_88:141)">
                      <path opacity="0.15" d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
                        fill="url(#paint0_linear_88:141)" />
                      <path opacity="0.15" d="M20.7137 501.422L44.6431 474.241L6 470.624L20.7137 501.422Z"
                        fill="url(#paint1_linear_88:141)" />
                      <path opacity="0.1"
                        d="M331.676 198.309C344.398 204.636 359.168 194.704 358.107 180.536C357.12 167.363 342.941 159.531 331.265 165.71C318.077 172.69 318.317 191.664 331.676 198.309Z"
                        fill="url(#paint2_linear_88:141)" />
                      <g opacity="0.3">
                        <path
                          d="M209 89.9999C216 77.3332 235.7 50.7999 258.5 45.9999C287 39.9999 303 41.9999 314 30.4999C325 18.9999 334 -3.50014 357 -3.50014C380 -3.50014 395 4.99986 408.5 -8.50014C422 -22.0001 418.5 -46.0001 452 -37.5001C478.8 -30.7001 515.167 -45 530 -53"
                          stroke="url(#paint3_linear_88:141)" />
                        <path
                          d="M251 64.9999C258 52.3332 277.7 25.7999 300.5 20.9999C329 14.9999 345 16.9999 356 5.49986C367 -6.00014 376 -28.5001 399 -28.5001C422 -28.5001 437 -20.0001 450.5 -33.5001C464 -47.0001 460.5 -71.0001 494 -62.5001C520.8 -55.7001 557.167 -70 572 -78"
                          stroke="url(#paint4_linear_88:141)" />
                        <path
                          d="M212 73.9999C219 61.3332 238.7 34.7999 261.5 29.9999C290 23.9999 306 25.9999 317 14.4999C328 2.99986 337 -19.5001 360 -19.5001C383 -19.5001 398 -11.0001 411.5 -24.5001C425 -38.0001 421.5 -62.0001 455 -53.5001C481.8 -46.7001 518.167 -61 533 -69"
                          stroke="url(#paint5_linear_88:141)" />
                        <path
                          d="M249 40.9999C256 28.3332 275.7 1.79986 298.5 -3.00014C327 -9.00014 343 -7.00014 354 -18.5001C365 -30.0001 374 -52.5001 397 -52.5001C420 -52.5001 435 -44.0001 448.5 -57.5001C462 -71.0001 458.5 -95.0001 492 -86.5001C518.8 -79.7001 555.167 -94 570 -102"
                          stroke="url(#paint6_linear_88:141)" />
                      </g>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_88:141" x1="13.4497" y1="63.5059" x2="81.144" y2="41.5072"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_88:141" x1="28.1579" y1="501.301" x2="8.69936" y2="464.391"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_88:141" x1="338" y1="167" x2="349.488" y2="200.004"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="paint3_linear_88:141" x1="369.5" y1="-53" x2="369.5" y2="89.9999"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="paint4_linear_88:141" x1="411.5" y1="-78" x2="411.5" y2="64.9999"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="paint5_linear_88:141" x1="372.5" y1="-69" x2="372.5" y2="73.9999"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="paint6_linear_88:141" x1="409.5" y1="-102" x2="409.5" y2="40.9999"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
