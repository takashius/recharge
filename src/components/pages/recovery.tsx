import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { pageTitle } from 'src/hooks'
import { auth } from 'src/credentials'
import { sendPasswordResetEmail } from 'firebase/auth';
import Loader from '../ui/loader'
import ErrorAlert from '../ui/errorAlert'
import { useTheme } from 'src/context/ThemeContext'
import { useState } from 'react';

export default function Recovery() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  pageTitle(`${t('title')} - ${t('signIn.title')}`)
  const { loading, setIsLoading } = useTheme();

  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      await sendPasswordResetEmail(auth, email)
      navigate('/signIn')
      setIsLoading(false)
    } catch (error: any) {
      setIsLoading(false)
      setError(error.message)
    }
  };

  return (
    <>
      {loading && <Loader />}
      <section className="relative overflow-hidden z-10 pt-[180px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="max-w-[500px] mx-auto bg-primary bg-opacity-5 dark:bg-dark rounded-md p-12 sm:p-[60px]">
                <h3 className="font-bold text-black dark:text-white text-2xl sm:text-3xl mb-3 text-center">
                  {t('recovery.title')}
                </h3>
                <p className="font-medium text-base text-bodyColor mb-11 text-center">
                  {t('recovery.subTitle')}
                </p>
                {error &&
                  <div className='mb-5'>
                    <ErrorAlert message={error} />
                  </div>
                }
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-3"> {t('signIn.form.username')} </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder={t('signIn.form.usernamePlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary" />
                  </div>
                  <div className="mb-6">
                    <button
                      type='submit'
                      className="w-full flex items-center justify-center text-base font-medium text-white bg-primary py-4 px-9 hover:shadow-signUp hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md">
                      {t('accept')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[-1]">
          <svg width="1440" height="969" viewBox="0 0 1440 969" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_95:1005" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1440"
              height="969">
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path opacity="0.1" d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)" />
              <path opacity="0.1" d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_95:1005" x1="1178.4" y1="151.853" x2="780.959" y2="453.581"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_95:1005" x1="160.5" y1="220" x2="1099.45" y2="1192.04"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  )
}
