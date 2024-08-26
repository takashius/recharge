import { Link, useNavigate } from 'react-router-dom'
import FlagEsp from '../icons/flagEsp'
import FlagUsa from '../icons/flagUsa'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import DarkToggler from '../ui/darkToggler'
import { useAuth } from 'src/context/AuthContext'
import UserMenu from '../ui/userMenu'
import { Alert, Snackbar } from '@mui/material'
import { useTheme } from 'src/context/ThemeContext'
import { sendEmailVerification } from 'firebase/auth'

export default function Header() {
  const { t, i18n } = useTranslation()
  const { currentUser } = useAuth()
  const [isEsp, setIsEsp] = useState(false)
  const [navToggle, setNavToggle] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState<string>('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { setIsLoading } = useTheme()

  const changeLanguage = () => {
    setIsEsp(!isEsp);
    i18n.changeLanguage(isEsp ? 'es' : 'en')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOutside = (event: { target: any }) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavToggle(false);
    }
  };

  useEffect(() => {
    console.log('currentUser', currentUser?.emailVerified)
    if (!currentUser) {
      navigate('/signIn')
    }
  }, [currentUser])

  const handleSendVerificationEmail = () => {
    if (currentUser) {
      setIsLoading(true)
      sendEmailVerification(currentUser)
        .then(() => {
          setOpen(true)
          setMessage(t('firebase.sendEmailSuccessful'))
        })
        .catch((error) => {
          setOpen(true)
          setMessage(`${t('firebase.sendEmailError')} ${error.message}`)
        }).finally(() => {
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <div className="container">
        <div className="flex mx-[-16px] items-center justify-between relative">
          <div className="px-4 w-60 max-w-full">
            <Link to={'/'} className="w-full block py-8 header-logo">
              <img src="/images/logo_codesa.png" alt="logo" className="w-full" />
            </Link>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div ref={navRef}>
              <button id="navbarToggler" aria-label="Mobile Menu"
                onClick={() => setNavToggle(!navToggle)}
                className={`${navToggle && 'navbarTogglerActive'} block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary08 px-3 py-[6px] rounded-lg`}>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
              </button>
              <nav id="navbarCollapse"
                className={`${!navToggle && 'hidden'} absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none`}>
                <ul className="block lg:flex">
                  <li className="relative group">
                    <Link to={'/user/cards'}
                      className="menu-scroll text-base  dark:text-white text-dark group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0">
                      {t('header.home')}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              {!currentUser?.emailVerified &&
                <Alert severity="warning" className='cursor-pointer' onClick={handleSendVerificationEmail}>
                  {t('firebase.invalidEmail')}
                </Alert>
              }
              <UserMenu />
              <div>
                <DarkToggler />
              </div>
              <div>
                <label htmlFor="langToggler"
                  className="cursor-pointer w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gray-2 dark:bg-dark-bg text-black dark:text-white">
                  <input type="checkbox" name="langToggler" id="langToggler" onClick={changeLanguage} className="sr-only" aria-label="langToggler" />
                  <FlagUsa className={isEsp ? '' : 'hidden'} />
                  <FlagEsp className={isEsp ? 'hidden' : ''} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
