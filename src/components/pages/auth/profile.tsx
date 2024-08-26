import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Container,
  IconButton,
  Box,
  Typography,
  Snackbar
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/es'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import EditIcon from '@mui/icons-material/Edit'
import { useTranslation } from 'react-i18next'
import Background from 'src/components/layout/background'
import { useTheme } from 'src/context/ThemeContext'
import { useAuth } from 'src/context/AuthContext'
import Loader from 'src/components/ui/loader'
import { updatePassword, updateProfile, EmailAuthProvider, reauthenticateWithCredential, linkWithCredential } from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, storage } from 'src/credentials'
import {
  getFirestore,
  query,
  where,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  collection
} from "firebase/firestore"
import ErrorAlert from 'src/components/ui/errorAlert'

interface UserData {
  [key: string]: any;
  name: string;
  lastName: string;
  idCard: string;
  birthDate: string;
  phone: string;
  uid?: string;
  id?: string;
}

export default function Profile() {
  const { t } = useTranslation()
  const { theme, loading, setIsLoading } = useTheme()
  const { currentUser } = useAuth()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [providerId, setProviderId] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const db = getFirestore()
  const navigate = useNavigate()

  const [userData, setUserData] = useState<UserData | null>(null)

  const handlePhotoChange = async (e: any) => {
    try {
      setIsLoading(true)
      const user = auth.currentUser
      if (user) {
        const archivo = e.target.files[0]
        const refArchivo = ref(storage, `user/${archivo.name}`)
        await uploadBytes(refArchivo, archivo)
        const url = await getDownloadURL(refArchivo)
        updateProfile(user, {
          photoURL: url
        })
        setOpen(true)
        setSuccess('Imagen guardada')
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setBirthDate(date.format('DD/MM/YYYY'));
    } else {
      setBirthDate('');
    }
  }

  const reauthenticateUser = async (password: string) => {
    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(user.email!, password)
      try {
        await reauthenticateWithCredential(user, credential)
        return true
      } catch (error: any) {
        setError(error.message)
        return false
      }
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const checkLinkedAccounts = () => {
    const user = auth.currentUser;
    if (user) {
      if (user.providerData.length > 1) {
        setProviderId('ambos')
      } else {
        setProviderId(user.providerData[0].providerId)
      }
    }
  }

  const linkEmailPassword = async (password: string) => {
    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(user.email!, password);
      try {
        await linkWithCredential(user, credential)
        return true
      } catch (error: any) {
        setError(error.message)
        return false
      }
    }
  }

  const updateUserPassword = async (newPassword: string) => {
    try {
      if (newPassword != '') {
        setIsLoading(true)
        if (auth.currentUser) {
          await updatePassword(auth.currentUser, newPassword)
          setSuccess('Contraseña actualizada corretamente')
          setOpen(true)
        } else {
          setError('No esta logueado correctamente')
        }
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false);
    }
  }

  const handlePasswordChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)
    if (newPassword === '' || !newPassword) {
      setError('Los campos son obligatorios')
    } else if (newPassword === confirmNewPassword) {
      const authCorrect = await reauthenticateUser(currentPassword)
      if (authCorrect)
        await updateUserPassword(newPassword)
    } else {
      setError('Las contraseñas no coinciden')
    }
    setIsLoading(false)
  }

  const handlePasswordNew = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setIsLoading(true)
      if (newPassword === '' || !newPassword) {
        setError('Los campos son obligatorios')
      } else if (newPassword === confirmNewPassword) {
        await linkEmailPassword(newPassword)
        await auth.signOut()
        navigate('/signIn')
        setSuccess('Contraseña establecida corretamente')
        setOpen(true)
      } else {
        setError('Las contraseñas no coinciden')
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data: UserData = {
        name: firstName,
        lastName,
        idCard: idNumber,
        birthDate: birthDate ? birthDate.toString() : '',
        phone: phoneNumber
      }
      setIsLoading(true)
      if (userData) {
        await updateDoc(doc(db, "users", userData.id!), data)
      } else {
        data.uid = currentUser?.uid
        await addDoc(collection(db, "users"), data);
      }
      const user = auth.currentUser
      if (user)
        updateProfile(user, { displayName: `${firstName} ${lastName}` })
      setIsLoading(false)
      setSuccess('Perfil actualizado corretamente')
      setOpen(true)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true)
        if (currentUser) {
          const q = query(collection(db, 'users'), where('uid', '==', currentUser.uid))
          const querySnapshot = await getDocs(q)
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0]
            const userData = userDoc.data() as UserData
            userData.id = userDoc.id
            setUserData(userData)
          } else {
            console.log('No such document!')
          }
        }
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    };
    setFirstName(currentUser?.displayName ? currentUser.displayName : '')
    fetchUserData()
    checkLinkedAccounts()
  }, [])

  useEffect(() => {
    if (userData) {
      setFirstName(userData.name)
      setLastName(userData.lastName)
      setIdNumber(userData.idCard)
      setBirthDate(userData.birthDate)
      setPhoneNumber(userData.phone)
    }
  }, [userData])

  const muiTheme = createTheme({ palette: { mode: theme == 'dark' ? 'dark' : 'light' } })

  return (<>
    {loading && <Loader />}
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={success}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
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
              </div>

              <div className="w-full h-screen bg-transparent">
                <ThemeProvider theme={muiTheme}>
                  <Container component="main" maxWidth="xl">
                    <div className="flex flex-col items-center mt-9">
                      <Box position="relative" marginBottom={5} display="inline-block">
                        <Avatar
                          sx={{ width: 100, height: 100 }}
                          src={currentUser?.photoURL ? currentUser.photoURL : ''}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            bgcolor: 'white',
                            '&:hover': {
                              bgcolor: 'white',
                            },
                          }}
                        >
                          <input hidden accept="image/*" type="file" onChange={handlePhotoChange} />
                          <EditIcon />
                        </IconButton>
                      </Box>
                      {error &&
                        <div className='mb-5'>
                          <ErrorAlert message={error} />
                        </div>
                      }
                      <div className="w-full mt-3">
                        <Grid container spacing={2} marginBottom={4}>
                          <Grid item xs={12} md={5}>
                            <form onSubmit={handleSubmit}>
                              <Grid container spacing={2}>
                                <Typography variant="h4" component="h2" className='text-dark dark:text-white text-center w-full'>
                                  Datos Personales
                                </Typography>
                                <Grid item xs={12} sm={6}>
                                  <TextField
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    autoFocus
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <TextField
                                    name="lastName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellido"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="idNumber"
                                    label="Cédula de Identidad"
                                    name="idNumber"
                                    value={idNumber}
                                    onChange={(e) => setIdNumber(e.target.value)}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                                    <DatePicker
                                      className='w-full'
                                      format="DD/MM/YYYY"
                                      label="Fecha de nacimiento"
                                      value={birthDate ? dayjs(birthDate, 'DD/MM/YYYY') : null}
                                      onChange={handleDateChange}
                                    />
                                  </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12}>
                                  <TextField
                                    variant="outlined"
                                    type='tel'
                                    accessKey='number'
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Número de Teléfono"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    autoComplete="off"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                  />
                                </Grid>
                              </Grid>

                              <div className='w-full text-center mt-9'>
                                <Button
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                >
                                  Guardar Cambios
                                </Button>
                              </div>
                            </form>
                          </Grid>
                          <Grid item xs={12} md={2}></Grid>
                          <Grid item xs={12} md={5}>
                            {(providerId === 'ambos' || providerId === 'password') &&
                              <form onSubmit={handlePasswordChange}>
                                <Grid container spacing={2}>
                                  <Typography variant="h4" component="h2" className='text-dark dark:text-white text-center w-full'>
                                    Cambiar Contraseña
                                  </Typography>
                                  <Grid item xs={12}>
                                    <TextField
                                      variant="outlined"
                                      fullWidth
                                      autoComplete='off'
                                      name="currentPassword"
                                      label="Contraseña Actual"
                                      type="password"
                                      id="currentPassword"
                                      value={currentPassword}
                                      onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <TextField
                                      variant="outlined"
                                      fullWidth
                                      name="newPassword"
                                      autoComplete='off'
                                      label="Nueva Contraseña"
                                      type="password"
                                      id="newPassword"
                                      value={newPassword}
                                      onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <TextField
                                      variant="outlined"
                                      fullWidth
                                      name="confirmNewPassword"
                                      autoComplete='off'
                                      label="Confirmar Nueva Contraseña"
                                      type="password"
                                      id="confirmNewPassword"
                                      value={confirmNewPassword}
                                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    />
                                  </Grid>
                                </Grid>
                                <div className='w-full text-center mt-9'>
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                  >
                                    Cambiar contraseña
                                  </Button>
                                </div>
                              </form>
                            }
                            {(providerId === 'google.com') &&
                              <form onSubmit={handlePasswordNew}>
                                <Grid container spacing={2}>
                                  <Typography variant="h4" component="h2" className='text-dark dark:text-white text-center w-full'>
                                    Establecer Contraseña
                                  </Typography>
                                  <Grid item xs={12}>
                                    <TextField
                                      variant="outlined"
                                      fullWidth
                                      name="newPassword"
                                      autoComplete='off'
                                      label="Nueva Contraseña"
                                      type="password"
                                      id="newPassword"
                                      value={newPassword}
                                      onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <TextField
                                      variant="outlined"
                                      fullWidth
                                      name="confirmNewPassword"
                                      autoComplete='off'
                                      label="Confirmar Nueva Contraseña"
                                      type="password"
                                      id="confirmNewPassword"
                                      value={confirmNewPassword}
                                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    />
                                  </Grid>
                                </Grid>
                                <div className='w-full text-center mt-9'>
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                  >
                                    Guardar
                                  </Button>
                                </div>
                              </form>
                            }
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Container>
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
