import { TextField } from '@mui/material'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FormProps } from 'src/types/general'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { PostFormInputs } from 'src/types/general'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'
import Loader from 'src/components/ui/loader'
const firestore = getFirestore()
const storage = getStorage()

export default function PostDialogForm({ open, setOpen, fetchData, postId }: FormProps) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PostFormInputs>()

  useEffect(() => {
    if (postId) {
      const loadPost = async () => {
        setLoading(true)
        const postRef = doc(firestore, 'posts', postId)
        const postSnap = await getDoc(postRef)
        if (postSnap.exists()) {
          const postData = postSnap.data() as PostFormInputs
          setValue('title', postData.title)
          setValue('summary', postData.summary)
          setValue('content', postData.content)
          setValue('postDate', postData.postDate.split('/').reverse().join('-'))
        }
        setLoading(false)
      }
      loadPost()
    } else {
      reset()
    }
  }, [postId, setValue, reset, open])

  const onSubmit: SubmitHandler<PostFormInputs> = async (data) => {
    try {
      setLoading(true)
      // Upload image to Firebase Storage
      let imageUrl = ''
      if (data.image && data.image.length > 0) {
        const imageFile = data.image[0]
        const storageRef = ref(storage, `images/${imageFile.name}`)
        await uploadBytes(storageRef, imageFile)
        imageUrl = await getDownloadURL(storageRef)
      }

      const [year, month, day] = data.postDate.split('-')
      const formattedPostDate = `${day}/${month}/${year}`

      // Save post to Firestore
      const postRef = doc(firestore, 'posts', postId || data.title)
      await setDoc(postRef, {
        title: data.title,
        summary: data.summary,
        content: data.content,
        imageUrl: imageUrl,
        postDate: formattedPostDate,
        ...(postId ? {} : { createdAt: new Date() })
      }, { merge: true })

      setLoading(false)
      setOpen(false)
      reset()
      fetchData()
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  useEffect(() => {
    if (!open) {
      reset()
    }
  }, [open])

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
            <form onSubmit={handleSubmit(onSubmit)}>
              {loading && <Loader />}
              <div className="bg-white dark:bg-dark dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <h2 className="text-lg font-bold mb-4">
                  {postId ? t('posts.editPost') : t('posts.createPost')}
                </h2>
                <div className="p-6 rounded-lg">
                  <div className="mb-4">
                    <TextField
                      label={t('posts.title')}
                      fullWidth
                      margin="normal"
                      InputLabelProps={!postId ? {} : { shrink: true }}
                      {...register('title', { required: t('posts.titleRequired') })}
                      error={!!errors.title}
                      helperText={errors.title?.message}
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      label={t('posts.summary')}
                      fullWidth
                      margin="normal"
                      InputLabelProps={!postId ? {} : { shrink: true }}
                      {...register('summary', { required: t('posts.summaryRequired') })}
                      error={!!errors.summary}
                      helperText={errors.summary?.message}
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      label={t('posts.content')}
                      fullWidth
                      margin="normal"
                      InputLabelProps={!postId ? {} : { shrink: true }}
                      multiline
                      rows={4}
                      {...register('content', { required: t('posts.contentRequired') })}
                      error={!!errors.content}
                      helperText={errors.content?.message}
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      label={t('posts.postDate')}
                      type="date"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                      {...register('postDate', { required: t('posts.postDateRequired') })}
                      error={!!errors.postDate}
                      helperText={errors.postDate?.message}
                    />
                  </div>
                  <div className="mb-0">
                    <TextField
                      label={t('posts.image')}
                      type="file"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                      {...register('image', { required: !postId && t('posts.imageRequired') })}
                      error={!!errors.image}
                      helperText={errors.image?.message}
                    />
                  </div>
                </div>
              </div>
              <div className=" dark:bg-dark px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  data-autofocus
                  className="text-sm font-bold text-white bg-primary py-2 px-4 md:px-5 lg:px-4 xl:px-5 hover:shadow-signUp hover:bg-opacity-90 rounded-full transition ease-in-up duration-300"
                >
                  {t('accept')}
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
