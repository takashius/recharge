import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative overflow-hidden z-10 pt-[180px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="max-w-[500px] mx-auto bg-primary bg-opacity-5 dark:bg-dark rounded-md p-12 sm:p-[60px]">
                <h3 className="font-bold text-black dark:text-white text-2xl sm:text-3xl mb-3 text-center">
                  {t('signIn.title')}
                </h3>
                <p className="font-medium text-base text-bodyColor mb-11 text-center">
                  {t('signIn.subTitle')}
                </p>

                <form>
                  <div className="mb-8">
                    <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-3"> {t('signIn.form.username')} </label>
                    <input type="email" name="email" placeholder={t('signIn.form.usernamePlaceholder')}
                      className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary" />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="password" className="block text-sm font-medium text-dark dark:text-white mb-3"> {t('signIn.form.password')} </label>
                    <input type="password" name="password" placeholder={t('signIn.form.passwordPlaceholder')}
                      className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <label htmlFor="checkboxLabel"
                        className="flex items-center cursor-pointer text-bodyColor text-sm font-medium select-none">
                        <div className="relative">
                          <input type="checkbox" id="checkboxLabel" className="sr-only" />
                          <div
                            className="box flex items-center justify-center w-5 h-5 rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10 mr-4">
                            <span className="opacity-0">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" strokeWidth="0.4" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        {t('signIn.keepMeIn')}
                      </label>
                    </div>
                    <div>
                      <a href="#" className="text-primary text-sm font-medium hover:underline">
                        {t('signIn.forgotPass')}
                      </a>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button
                      className="w-full flex items-center justify-center text-base font-medium text-white bg-primary py-4 px-9 hover:shadow-signUp hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md">
                      {t('signIn.button')}
                    </button>
                  </div>
                </form>
                <p className="font-medium text-base text-bodyColor text-center">
                  {t('signIn.notAccount')}
                  <Link to="/signUp" className="text-primary hover:underline"> {t('signIn.register')} </Link>
                </p>
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
