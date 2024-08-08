import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { esES, enUS } from '@mui/x-data-grid/locales'
import { useDemoData } from '@mui/x-data-grid-generator'
import Background from '../../layout/background'
import { useTranslation } from 'react-i18next'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useTheme } from 'src/context/ThemeContext'

export default function Cards() {
  const { theme } = useTheme()
  const { i18n } = useTranslation()
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 16,
    maxColumns: 6,
  });
  const muiTheme = createTheme({
    palette: {
      mode: theme == 'dark' ? 'dark' : 'light',
    },
  });
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


              <div className="w-full h-screen bg-white dark:bg-transparent">
                <ThemeProvider theme={muiTheme}>
                  <DataGrid
                    {...data}
                    localeText={currentLang === 'es' ? langEsp : langEng}
                    disableColumnFilter
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
