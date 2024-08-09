import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid'
import { esES, enUS } from '@mui/x-data-grid/locales'
import Background from 'src/components/layout/background'
import { useTranslation } from 'react-i18next'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useTheme } from 'src/context/ThemeContext'
import { Edit, Delete, Bills } from 'src/components/icons'
import { Link } from 'react-router-dom'

export default function Cards() {
  const { theme } = useTheme()
  const { t, i18n } = useTranslation()

  const renderButton = (value: any) => {
    return (
      <div className="flex items-center justify-center h-full">
        <a href='#' data-id={value}
          className="text-sm font-bold text-white bg-primary py-2 px-2 hover:shadow-signUp hover:bg-opacity-50 rounded-full transition ease-in-up duration-300">
          <Edit />
        </a>
        <Link to={'/user/payments'} data-id={value}
          className="text-sm font-bold ml-2 text-white bg-orange-400 py-2 px-2 hover:shadow-signUp hover:bg-opacity-50 rounded-full transition ease-in-up duration-300">
          <Bills />
        </Link>
        <a href='#' data-id={value}
          className="text-sm font-bold ml-2 text-white bg-red-600 py-2 px-2 hover:shadow-signUp hover:bg-opacity-50 rounded-full transition ease-in-up duration-300">
          <Delete />
        </a>
      </div>
    )
  }


  const columns: GridColDef[] = [
    { field: 'number', headerName: t('cards.table.number'), flex: 1 },
    { field: 'name', headerName: t('cards.table.name'), flex: 1 },
    { field: 'balance', headerName: t('cards.table.balance'), flex: 1 },
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
    },
    {
      field: 'actions',
      headerName: t('cards.table.actions'),
      renderCell: renderButton,
      flex: 1
    }
  ]
  const rows = [
    {
      id: 1,
      number: 'ERGDF354',
      name: 'Pedro Perez',
      balance: '14.587,00',
      date: '17/05/2024'
    },
    {
      id: 2,
      number: 'AS54ER5',
      name: 'Juan Ramirez',
      balance: '14.658,20',
      date: '22/05/2024'
    },
  ]
  const muiTheme = createTheme({ palette: { mode: theme == 'dark' ? 'dark' : 'light' } })
  const currentLang = i18n.resolvedLanguage
  const langEsp = esES.components.MuiDataGrid.defaultProps.localeText
  const langEng = enUS.components.MuiDataGrid.defaultProps.localeText

  return (<>
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
                <a href='#'
                  className="text-sm font-bold text-white bg-primary py-2 px-4 md:px-5 lg:px-4 xl:px-5 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition ease-in-up duration-300">
                  {t('cards.new')}
                </a>
              </div>

              <div className="w-full h-screen bg-white dark:bg-transparent">
                <ThemeProvider theme={muiTheme}>
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
                  />
                </ThemeProvider>
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
