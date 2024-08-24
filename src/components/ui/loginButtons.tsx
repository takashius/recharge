import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export default function LoginButtons() {
  const { t } = useTranslation()
  return (
    <>
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
    </>
  )
}
