import { PostFormInputs } from "src/types/general"
import { useTranslation } from 'react-i18next'

export default function PostCard({ post }: { post: PostFormInputs }) {
  const { t } = useTranslation()
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
      <div className="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 wow fadeInUp"
        data-wow-delay=".1s">
        {post.imageUrl &&
          <a href="blog-details.html" className="w-full block relative">
            <img src={post.imageUrl} alt={post.title} className="w-full object-cover h-64" />
          </a>
        }
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <a href="blog-details.html"
              className="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary">
              {post.title}
            </a>
          </h3>
          <p
            className="text-base text-bodyColor font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
            {post.summary}
          </p>
          <div className="flex items-center">
            <div
              className="flex items-center pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
              <div className="max-w-[40px] w-full h-[40px] rounded-full overflow-hidden mr-4">
                <img src="images/favicon.png" alt="author" className="w-full" />
              </div>
              <div className="w-full">
                <h4 className="text-sm font-medium text-dark dark:text-white mb-1">
                  Por
                  <a href="#"
                    className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"> Admin </a>
                </h4>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-sm font-medium text-dark dark:text-white mb-1">{t('cards.table.date')}</h4>
              <p className="text-xs text-bodyColor">{post.postDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
