import { collection, getDocs, query, getFirestore, QueryDocumentSnapshot, startAfter, limit, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { pageTitle } from 'src/hooks'
import { PostFormInputs } from 'src/types/general'
import Loader from '../ui/loader'
import { useTheme } from 'src/context/ThemeContext'
import { Link } from 'react-router-dom'
import PostCard from '../ui/postCard'

export default function BlogGrid() {
  const { t } = useTranslation()
  const { loading, setIsLoading } = useTheme()
  const db = getFirestore()
  const [posts, setPosts] = useState<PostFormInputs[]>()
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null)
  const [hasMore, setHasMore] = useState(true)

  pageTitle(`${t('title')} - ${t('header.news')}`)

  const fetchData = async (isNextPage: boolean = false) => {
    setIsLoading(true)
    let q;
    if (isNextPage && lastDoc) {
      q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(10))
    } else {
      q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(10))
    }

    const querySnapshot = await getDocs(q)
    const postsData: PostFormInputs[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      postsData.push({
        id: doc.id,
        title: data.title,
        summary: data.summary,
        postDate: data.postDate,
        content: data.content,
        imageUrl: data.imageUrl,
      });
    });

    if (querySnapshot.docs.length < 10) {
      setHasMore(false)
    } else {
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])
    }

    setIsLoading(false)
    setPosts((prevPosts = []) => (isNextPage ? [...prevPosts, ...postsData] : postsData))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {loading && <Loader />}
      <section className="relative z-10 pt-[150px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center mx-[-16px]">
            <div className="w-full md:w-8/12 lg:w-7/12 px-4">
              <div className="max-w-[570px] mb-12 md:mb-0">
                <h1 className="font-bold text-black dark:text-white text-2xl sm:text-3xl mb-5">{t('header.news')}</h1>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-5/12 px-4">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link to='/' className="font-medium text-base text-bodyColor pr-1 hover:text-primary"> {t('header.home')} </Link>
                    <span className="block w-2 h-2 border-t-2 border-r-2 border-body-color rotate-45 mr-3"></span>
                  </li>
                  <li className="font-medium text-base text-primary">{t('title')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#paint0_linear_111:578)" />
              <defs>
                <linearGradient id="paint0_linear_111:578" x1="-40.5" y1="117" x2="301.926" y2="-97.1485"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)" />
              <path opacity="0.1" d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)" />
              <defs>
                <linearGradient id="paint0_linear_0:1" x1="644" y1="221" x2="429.946" y2="37.0429"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_0:1" x1="18.3648" y1="166.016" x2="105.377" y2="32.3398"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px] justify-center">
            {posts && posts.map((post: PostFormInputs) => (
              <PostCard post={post} />
            ))}
          </div>

          <div className="flex flex-wrap mx-[-16px] wow fadeInUp justify-center">
            {hasMore && !loading &&
              <button className="flex items-center justify-center rounded-md bg-body-color bg-opacity-[15%] hover:bg-primary hover:bg-opacity-100 transition hover:text-white text-bodyColor px-4 text-sm min-w-[36px] h-9" onClick={() => fetchData(true)}>
                {t('loadMore')}
              </button>}
          </div>
        </div>
      </section>
    </>
  )
}
