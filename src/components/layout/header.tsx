import { Link } from 'react-router-dom'
import FlagEsp from '../icons/flagEsp'
import FlagUsa from '../icons/flagUsa'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import DarkToggler from '../ui/darkToggler'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [isEsp, setIsEsp] = useState(false)
  const [navToggle, setNavToggle] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null);

  const changeLanguage = () => {
    setIsEsp(!isEsp);
    i18n.changeLanguage(isEsp ? 'es' : 'en');
  };

  const handleClickOutside = (event: { target: any }) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center">
      <div className="container">
        <div className="flex mx-[-16px] items-center justify-between relative">
          <div className="px-4 w-60 max-w-full">
            <Link to={'/'} className="w-full block py-8 header-logo">
              <img src="/images/logo_codesa.png" alt="logo" className="w-full" />
            </Link>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div ref={navRef}>
              <button
                id="navbarToggler"
                aria-label="Mobile Menu"
                onClick={() => setNavToggle(!navToggle)}
                className={`${navToggle && 'navbarTogglerActive'} block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary08 px-3 py-[6px] rounded-lg`}
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`${!navToggle && 'hidden'} absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none`}
              >
                <ul className="block lg:flex">
                  <li className="relative group">
                    <Link
                      to={'/'}
                      className="menu-scroll text-base dark:text-white text-dark group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"
                    >
                      {t('header.home')}
                    </Link>
                  </li>
                  <li className="relative group">
                    <a
                      href="#"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      {t('header.schedules')}
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      {t('header.tours')}
                    </a>
                  </li>
                  <li className="relative group">
                    <Link
                      to={'/news'}
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      {t('header.news')}
                    </Link>
                  </li>
                  <li className="relative group submenu-item">
                    <a
                      href="#"
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                      className="text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:translate-y-[-50%] after:mt-[-2px]"
                    >
                      {t('header.institutional')}
                    </a>
                    <div
                      className={`submenu ${!submenuOpen && 'hidden'} relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-md lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white dark:bg-dark transition-[top] duration-300`}
                    >
                      <Link
                        to={'/institutional/history'}
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        {t('header.history')}
                      </Link>
                      <Link
                        to={'/institutional/philosophy'}
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        {t('header.philosophy')}
                      </Link>
                      <Link
                        to={'/'}
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        {t('header.authorities')}
                      </Link>
                      <Link
                        to={'/institutional/infrastructure'}
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        {t('header.infrastructure')}
                      </Link>
                      <Link
                        to={'/institutional/gallery'}
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        {t('header.gallery')}
                      </Link>
                      <Link
                        to={'/'}
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        {t('header.videos')}
                      </Link>
                    </div>
                  </li>
                  <li className="relative group lg:hidden">
                    <Link
                      to={'/signIn'}
                      className="menu-scroll mt-2 text-base group-hover:opacity-70 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 bg-primary text-white rounded-md px-4 py-2"
                    >
                      {t('signIn.button')}
                    </Link>
                  </li>
                  <li className="relative group lg:hidden">
                    <Link
                      to={'/signUp'}
                      className="menu-scroll mt-4 text-base group-hover:opacity-70 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 bg-primary text-white rounded-md px-4 py-2"
                    >
                      {t('signUp.button')}
                    </Link>
                  </li>

                </ul>
              </nav>
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <Link
                to={'/signIn'}
                className="hidden md:block text-base font-bold text-dark dark:text-white hover:opacity-70 py-3 px-7"
              >
                {t('signIn.button')}
              </Link>
              <Link
                to={'/signUp'}
                className="hidden md:block text-base font-bold text-white bg-primary py-3 px-8 md:px-9 lg:px-6 xl:px-9 hover:shadow-signUp hover:bg-opacity-90 rounded-md transition ease-in-up duration-300"
              >
                {t('signUp.button')}
              </Link>
              <div>
                <DarkToggler />
              </div>
              <div>
                <label
                  htmlFor="langToggler"
                  className="cursor-pointer w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gray-2 dark:bg-dark-bg text-black dark:text-white"
                >
                  <input
                    type="checkbox"
                    name="langToggler"
                    id="langToggler"
                    onClick={changeLanguage}
                    className="sr-only"
                    aria-label="langToggler"
                  />
                  <FlagUsa className={isEsp ? '' : 'hidden'} />
                  <FlagEsp className={isEsp ? 'hidden' : ''} />
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
