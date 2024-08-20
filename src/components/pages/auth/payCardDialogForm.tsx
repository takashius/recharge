import React, { useRef, useState } from 'react';
import { TextField, MenuItem, Checkbox, FormControlLabel, InputAdornment, createTheme, ThemeProvider, Grid } from '@mui/material'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useTheme } from 'src/context/ThemeContext'
import { useTranslation } from 'react-i18next'
import { Paypal, Visa, MasterCard, Amex, Discover } from 'src/components/icons'
import CreditCardIcon from '@mui/icons-material/CreditCard'

interface Card {
  id: string
  name: string
  balance: number
}

interface RecargaTarjetaFormProps {
  cards: Card[]
  open: boolean
  setOpen: any
}

export default function PayCardDialogForm({ cards, open, setOpen }: RecargaTarjetaFormProps) {
  const [selectedCard, setSelectedCard] = useState<string>('')
  const [reloadAmount, setReloadAmount] = useState<string>('')
  const [paymentMethod, setPaymentMethod] = useState<string>('')
  const [cardHolderName, setCardHolderName] = useState<string>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [expiryDate, setExpiryDate] = useState<string>('')
  const [cvv, setCvv] = useState<string>('')
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false)
  const { theme } = useTheme()
  const { t } = useTranslation()

  const muiTheme = createTheme({ palette: { mode: theme == 'dark' ? 'dark' : 'light' } })

  const expiryDateRef = useRef<HTMLInputElement>(null)
  const cvvRef = useRef<HTMLInputElement>(null)

  const handleReload = (event: React.FormEvent) => {
    event.preventDefault()
    // Logic to handle reload
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '') // Remove non-numeric characters
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim() // Add space every 4 digits
    setCardNumber(formattedValue.slice(0, 19)) // Limit to 19 characters (16 digits + 3 spaces)
    if (formattedValue.length === 19 && expiryDateRef.current) {
      expiryDateRef.current.focus()
    }
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '') // Remove non-numeric characters
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4) // Add slash after the first two digits
    }
    setExpiryDate(value.slice(0, 5)) // Limit to 5 characters (MM/YY)
    if (value.length === 5 && cvvRef.current) {
      cvvRef.current.focus()
    }
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '') // Remove non-numeric characters
    setCvv(value.slice(0, 3)) // Limit to 3 characters
  }

  const getCardTypeIcon = () => {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '')
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumberWithoutSpaces)) { // Visa
      return <Visa />
    } else if (/^5[1-5][0-9]{14}$/.test(cardNumberWithoutSpaces)) {// MasterCard
      return <MasterCard />
    } else if (/^3[47][0-9]{13}$/.test(cardNumberWithoutSpaces)) {// Amex
      return <Amex />
    } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cardNumberWithoutSpaces)) { //Discover
      return <Discover />
    } else {
      return <CreditCardIcon />
    }
  }

  const getPaymentMethodIcon = () => {
    if (paymentMethod === 'creditCard') {
      return <CreditCardIcon />
    } else if (paymentMethod === 'paypal') {
      return <Paypal />
    } else {
      return null
    }
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-dark text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white dark:bg-dark dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <ThemeProvider theme={muiTheme}>
                <form onSubmit={handleReload} className="p-6 rounded-lg">
                  <div className="mb-4">
                    <TextField
                      select
                      label={t('formPay.selectedCard')}
                      value={selectedCard}
                      onChange={(e) => setSelectedCard(e.target.value)}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ className: 'text-white' }}
                      InputProps={{ className: 'text-white border-white' }}
                      SelectProps={{ MenuProps: { PaperProps: { className: 'bg-gray-700 text-white' } } }}
                    >
                      {cards.map((card) => (
                        <MenuItem key={card.id} value={card.id} className="bg-gray-700 text-white">
                          {card.name} - {t('formPay.balance')}: ${card.balance}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>

                  <div className="mb-4">
                    <TextField
                      label={t('formPay.amount')}
                      value={reloadAmount}
                      onChange={(e) => setReloadAmount(e.target.value)}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ className: 'text-white' }}
                      InputProps={{ className: 'text-white border-white' }}
                    />
                  </div>

                  <div className="mb-4">
                    <TextField
                      select
                      label={t('formPay.method')}
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ className: 'text-white' }}
                      InputProps={{
                        className: 'text-white border-white',
                        endAdornment: (
                          <InputAdornment position="end">
                            {getPaymentMethodIcon()}
                          </InputAdornment>
                        ),
                      }}
                      SelectProps={{ MenuProps: { PaperProps: { className: 'bg-gray-700 text-white' } } }}
                    >
                      <MenuItem value="creditCard" className="bg-gray-700 text-white">{t('formPay.creditCard')}</MenuItem>
                      <MenuItem value="paypal" className="bg-gray-700 text-white">PayPal</MenuItem>
                      {/* Add more payment methods as needed */}
                    </TextField>
                  </div>

                  {paymentMethod === 'creditCard' && (
                    <>
                      <div className="mb-4">
                        <TextField
                          label={t('formPay.holderName')}
                          value={cardHolderName}
                          onChange={(e) => setCardHolderName(e.target.value)}
                          fullWidth
                          margin="normal"
                          InputLabelProps={{ className: 'text-white' }}
                          InputProps={{ className: 'text-white border-white' }}
                        />
                      </div>
                      <div className="mb-4">
                        <TextField
                          label={t('formPay.cardNumber')}
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          fullWidth
                          margin="normal"
                          InputLabelProps={{ className: 'text-white' }}
                          InputProps={{
                            className: 'text-white border-white',
                            endAdornment: (
                              <InputAdornment position="end">
                                {getCardTypeIcon()}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <Grid container spacing={2}>
                          <Grid item xs={7}>
                            <TextField
                              label={t('formPay.expiryDate')}
                              value={expiryDate}
                              onChange={handleExpiryDateChange}
                              fullWidth
                              margin="normal"
                              inputRef={expiryDateRef}
                              InputLabelProps={{ className: 'text-white' }}
                              InputProps={{ className: 'text-white border-white' }}
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <TextField
                              label="CVV"
                              value={cvv}
                              onChange={handleCvvChange}
                              fullWidth
                              margin="normal"
                              inputRef={cvvRef}
                              InputLabelProps={{ className: 'text-white' }}
                              InputProps={{ className: 'text-white border-white' }}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </>
                  )}

                  <div className="mb-4">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                        />
                      }
                      label={t('formPay.termsAndConditions')}
                      className="dark:text-white"
                    />
                  </div>
                </form>
              </ThemeProvider>
            </div>
            <div className=" dark:bg-dark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="text-sm font-bold text-white bg-primary py-2 px-4 md:px-5 lg:px-4 xl:px-5 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition ease-in-up duration-300"
              >
                {t('accept')}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
