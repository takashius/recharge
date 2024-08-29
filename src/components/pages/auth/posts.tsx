import { useEffect, useState } from 'react'
import Loader from 'src/components/ui/loader'
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid'
import { esES, enUS } from '@mui/x-data-grid/locales'
import Background from 'src/components/layout/background'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'src/context/ThemeContext'
import { pageTitle } from 'src/hooks'
import { Edit, Delete } from '@mui/icons-material'
import { collection, getFirestore, query, getDocs, doc, deleteDoc } from "firebase/firestore"
import PostDialogForm from './postDialogForm'
import { PostFormInputs } from 'src/types/general'
import { DialogConfirm } from 'src/components/ui/dialogConfirm'

export default function Posts() {
  const { loading } = useTheme()
  const { t, i18n } = useTranslation()
  const db = getFirestore()
  const [open, setOpen] = useState<boolean>(false)
  const [loadingData, setLoading] = useState<boolean>(false)
  const [posts, setPosts] = useState<PostFormInputs[]>()
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false)
  const [postToDelete, setPostToDelete] = useState<string | null>(null)
  pageTitle(`${t('title')} - ${t('posts.titlePage')}`)

  const renderButton = (params: any) => {
    const { id } = params.row
    return (
      <div className="flex items-center justify-center h-full">
        <a onClick={() => handleEdit(id)}
          className="text-sm cursor-pointer font-bold text-white bg-primary py-2 px-2 hover:shadow-signUp hover:bg-opacity-50 rounded-full transition ease-in-up duration-300">
          <Edit />
        </a>
        <a onClick={() => { setPostToDelete(id); setDeleteDialogOpen(true) }}
          className="text-sm cursor-pointer font-bold ml-2 text-white bg-red-600 py-2 px-2 hover:shadow-signUp hover:bg-opacity-50 rounded-full transition ease-in-up duration-300">
          <Delete />
        </a>
      </div>
    )
  }

  const handleEdit = (id: string) => {
    setSelectedPostId(id)
    setOpen(true)
  }

  const handleDelete = async () => {
    if (postToDelete) {
      const postRef = doc(db, 'posts', postToDelete)
      setLoading(true)
      setDeleteDialogOpen(false)
      await deleteDoc(postRef)
      setPostToDelete(null)
      fetchData() // Refrescar el listado
    }
  }

  const fetchData = async () => {
    setLoading(true)
    const q = query(collection(db, "posts"))
    const querySnapshot = await getDocs(q)
    const postsData: PostFormInputs[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      postsData.push({
        id: doc.id,
        title: data.title,
        summary: data.summary,
        postDate: data.postDate,
        content: data.content,
        image: data.image,
      })
    })
    setLoading(false)
    setPosts(postsData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns: GridColDef[] = [
    { field: 'title', headerName: t('posts.title'), flex: 1 },
    {
      field: 'postDate',
      headerName: t('posts.postDate'),
      flex: 1,
      type: 'date',
      valueGetter: (value: string) => {
        // console.log('valueGetter', value)
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

  const currentLang = i18n.resolvedLanguage
  const langEsp = esES.components.MuiDataGrid.defaultProps.localeText
  const langEng = enUS.components.MuiDataGrid.defaultProps.localeText

  return (<>
    {loading && <Loader />}
    <PostDialogForm open={open} setOpen={setOpen} fetchData={fetchData} postId={selectedPostId} />
    <DialogConfirm
      open={deleteDialogOpen}
      onClose={() => setDeleteDialogOpen(false)}
      onConfirm={handleDelete}
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
                  {t('posts.titlePage')}
                </h2>
                <a onClick={() => setOpen(true)}
                  className="cursor-pointer text-sm font-bold text-white bg-primary py-2 px-4 md:px-5 lg:px-4 xl:px-5 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition ease-in-up duration-300">
                  {t('posts.new')}
                </a>
              </div>

              <div className="w-full h-screen bg-white dark:bg-transparent">
                <DataGrid
                  columns={columns}
                  rows={posts}
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
  </>)
}

