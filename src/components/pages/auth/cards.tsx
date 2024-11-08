import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid'
import { esES, enUS } from '@mui/x-data-grid/locales'
import Background from 'src/components/layout/background'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'src/context/ThemeContext'
import { Warning, Check, Refresh } from 'src/components/icons'
import { pageTitle } from 'src/hooks'
import { useEffect, useState } from 'react'
import PayCardDialogForm from './payCardDialogForm'
import Loader from 'src/components/ui/loader'

export default function Cards() {
  const [open, setOpen] = useState<boolean>(false)
  const { loading } = useTheme()
  const { t, i18n } = useTranslation()
  pageTitle(`${t('title')} - ${t('cards.title')}`)
  const [loadingData, setLoading] = useState(true)
  const [rows, setRows] = useState<any>([])


  const statusBadge = (params: any) => {
    let borderColor, textColor, icon;

    switch (params.value) {
      case 'Rejected':
        borderColor = 'border-red-500'
        textColor = 'text-red-500'
        icon = <Warning />
        break;
      case 'Accepted':
        borderColor = 'border-green-500'
        textColor = 'text-green-500'
        icon = <Check />
        break;
      case 'In Progress':
        borderColor = 'border-orange-500'
        textColor = 'text-orange-500'
        icon = <Refresh />
        break;
      default:
        borderColor = 'border-gray-500'
        textColor = 'text-gray-500'
    }

    return (
      <span className={`inline-flex items-center px-2 py-1 border ${borderColor} ${textColor} rounded-full text-xs`}>
        {icon} <span className="ml-2">{params.value}</span>
      </span>
    );
  };

  const columns: GridColDef[] = [
    { field: 'transaction', headerName: t('payments.table.transaction'), flex: 1 },
    {
      field: 'status',
      headerName: t('payments.table.status'),
      flex: 1,
      renderCell: statusBadge,
    },
    { field: 'amount', headerName: t('payments.table.amount'), flex: 1 },
    { field: 'via', headerName: t('payments.table.via'), flex: 1 },
    {
      field: 'date',
      headerName: t('cards.table.date'),
      flex: 1,
      type: 'date',
      valueGetter: (value: string) => {
        const [day, month, year] = value.split('/');
        const date = new Date(`${year}-${month}-${day}T00:00:00`);
        const timezoneOffset = date.getTimezoneOffset() * 60000;
        return new Date(date.getTime() + timezoneOffset);
      },
    }
  ]
  useEffect(() => {
    setTimeout(() => {
      setRows(
        [
          {
            id: 1,
            transaction: 'QWE3QW54E6AS87',
            status: 'In Progress',
            amount: '120,00',
            via: 'WEB',
            date: '17/05/2024'
          },
          {
            id: 2,
            transaction: '38R4GSV3DS5REW',
            status: 'Accepted',
            amount: '60,00',
            via: 'TAQUILLA',
            date: '15/06/2024'
          },
          {
            id: 3,
            transaction: '3154SDSDSE8R4S',
            status: 'Rejected',
            amount: '70,00',
            via: 'WEB',
            date: '3/06/2024'
          },
        ]
      )
      setLoading(false)
    }, 2000)
  }, [])

  const currentLang = i18n.resolvedLanguage
  const langEsp = esES.components.MuiDataGrid.defaultProps.localeText
  const langEng = enUS.components.MuiDataGrid.defaultProps.localeText

  return (<>
    {loading && <Loader />}
    <PayCardDialogForm open={open} setOpen={setOpen} />
    <section id="contact" className="pt-[120px] pb-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div
              className="relative z-10 rounded-md bg-primary bg-opacity-[3%] dark:bg-opacity-10 p-8 sm:p-11 lg:p-8 xl:p-11 mb-5 wow fadeInUp"
              data-wow-delay=".2s">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-bold text-black dark:text-white text-2xl sm:text-3xl lg:text-2xl xl:text-3xl">
                  {t('cards.title')}
                </h2>
                <a onClick={() => setOpen(true)}
                  className="cursor-pointer text-sm font-bold text-white bg-primary py-2 px-4 md:px-5 lg:px-4 xl:px-5 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition ease-in-up duration-300">
                  {t('cards.new')}
                </a>
              </div>

              <div className="w-full h-screen bg-white dark:bg-transparent">
                <DataGrid
                  columns={columns}
                  rows={rows}
                  localeText={currentLang === 'es' ? langEsp : langEng}
                  disableColumnSelector
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                    },
                  }}
                  loading={loadingData}
                />
              </div>

              <Background />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
