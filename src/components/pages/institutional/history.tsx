import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { pageTitle } from 'src/hooks'

export default function History() {
  const { t } = useTranslation()
  pageTitle(`${t('title')} - ${t('history.title')}`)

  const GenerateJSX = () => {
    const elements = [];

    for (let i = 1; i <= 46; i++) {
      elements.push(
        <p key={`p${i}`} className="font-medium text-bodyColor text-base sm:text-lg leading-relaxed sm:leading-relaxed mb-11">
          {t(`history.p${i}`)}
        </p>
      );

      // Añadir subtítulos en las posiciones correctas
      if (i === 16) {
        elements.push(
          <h3 key="st1" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st1')}
          </h3>
        );
      } else if (i === 17) {
        elements.push(
          <h3 key="st2" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st2')}
          </h3>
        );
      } else if (i === 20) {
        elements.push(
          <h3 key="st3" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st3')}
          </h3>
        );
        elements.push(
          <h3 key="st4" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st4')}
          </h3>
        );
      } else if (i === 28) {
        elements.push(
          <h3 key="st5" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st5')}
          </h3>
        );
      } else if (i === 31) {
        elements.push(
          <h3 key="st6" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st6')}
          </h3>
        );
      } else if (i === 35) {
        elements.push(
          <h3 key="st7" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st7')}
          </h3>
        );
      } else if (i === 38) {
        elements.push(
          <h3 key="st8" className="font-bold text-black dark:text-white text-lg sm:text-sm my-5">
            {t('history.st8')}
          </h3>
        );
      }
    }

    return elements;
  };
  return (
    <>
      <section className="relative z-10 pt-[150px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center mx-[-16px]">
            <div className="w-full md:w-8/12 lg:w-7/12 px-4">
              <div className="max-w-[570px] mb-12 md:mb-0">
                <h1 className="font-bold text-black dark:text-white text-2xl sm:text-3xl mb-5">{t('history.title')}</h1>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-5/12 px-4">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link to={'/'} className="font-medium text-base text-bodyColor pr-1 hover:text-primary">
                      {t('header.home')}
                    </Link>
                    <span className="block w-2 h-2 border-t-2 border-r-2 border-body-color rotate-45 mr-3"></span>
                  </li>
                  <li className="flex items-center">
                    <a className="font-medium text-base text-bodyColor pr-1 hover:text-primary">
                      {t('header.institutional')}
                    </a>
                    <span className="block w-2 h-2 border-t-2 border-r-2 border-body-color rotate-45 mr-3"></span>
                  </li>
                  <li className="font-medium text-base text-primary">{t('history.title')}</li>
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

      <section className="relative z-10 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center mx-[-16px]">
            <div className="w-full px-4">
              <div className="mb-12 md:mb-0">
                <GenerateJSX />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
