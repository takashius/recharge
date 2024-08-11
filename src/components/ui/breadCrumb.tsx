import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export default function BreadCrumb({ titlePage }: { titlePage: string }) {
  const { t } = useTranslation()
  return (
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
      <li className="font-medium text-base text-primary">{titlePage}</li>
    </ul>
  )
}
