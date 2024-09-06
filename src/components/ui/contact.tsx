import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { Button, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, reset } = useForm<ContactFormInputs>()
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogMessage, setDialogMessage] = useState('')

  const onSubmit = (data: ContactFormInputs) => {
    const emailData: Record<string, unknown> = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    setLoading(true)
    emailjs.send('service_epk88mp', 'template_ljepdw2', emailData, 'dw4jKVZF2HjTVw-Y9')
      .then(() => {
        setDialogMessage('Email enviado con éxito')
        setOpenDialog(true)
        reset();
      })
      .catch((error: any) => {
        console.error('FAILED...', error)
        setDialogMessage('Error al enviar el email')
        setOpenDialog(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (<>
    <div className="w-full min-h-96 lg:w-8/12 px-4 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-dark z-50">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      )}
      <div
        className="bg-primary/5 bg-opacity-[3%] dark:bg-dark rounded-md p-11 mb-12 lg:mb-5 sm:p-[55px] lg:p-11 xl:p-[55px] h-full"
        data-wow-delay=".15s
        ">
        <h2 className="font-bold text-black dark:text-white text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3">
          {t('home.contact.title')}
        </h2>
        <p className="text-bodyColor text-base font-medium mb-12">
          {t('home.contact.subTitle')}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-8">
                <label htmlFor="name" className="block text-sm font-medium text-dark dark:text-white mb-3">
                  {t('home.contact.form.name')}
                </label>
                <input type="text" {...register('name', { required: true })} placeholder={t('home.contact.form.namePlaceholder')}
                  className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-8">
                <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-3">
                  {t('home.contact.form.email')}
                </label>
                <input type="email" {...register('email', { required: true })} placeholder={t('home.contact.form.emailPlaceholder')}
                  className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary" />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-dark dark:text-white mb-3">
                  {t('home.contact.form.message')}
                </label>
                <textarea {...register('message', { required: true })} placeholder={t('home.contact.form.messagePlaceholder')}
                  className="w-full border border-transparent dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-bodyColor text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary resize-none"></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <button type='submit'
                className="text-base font-medium text-white bg-primary py-4 px-9 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out">
                {t('home.contact.form.submit')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={() => setOpenSnackbar(false)}
      message="Email enviado con éxito"
    />

    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
    >
      <DialogTitle>Notificación</DialogTitle>
      <DialogContent>
        <p>{dialogMessage}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}
