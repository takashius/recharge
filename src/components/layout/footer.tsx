import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks"
import { Instagram, Facebook, YouTube } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export default function Footer() {
  const { displayBackToTop, setBackToTop } = useScrollToTop();
  return (
    <>
      <footer className="relative z-10 bg-primary bg-opacity-5 pt-[100px] wow fadeInUp" data-wow-delay=".1s">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-4/12 px-4">
              <div className="mb-16 max-w-[360px]">
                <Link to={'/'} className="inline-block mb-8">
                  <img src="/images/logo_codesa.png" alt="logo" className="w-40" />
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-4/12 px-4 text-center">
              <p className="text-bodyColor text-base font-medium leading-relaxed mb-9">
                © 2024 CODESA All rights reserved
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-4/12 px-4">
              <div className="flex items-end justify-end">
                <IconButton
                  component="a"
                  href="http://www.facebook.com/codesabus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/codesabus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.youtube.com/c/codesa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <YouTube />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg width="55" height="99" viewBox="0 0 55 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask id="mask0_94:899" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="99">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="url(#paint0_radial_94:899)" />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter id="filter0_f_94:899" x="12.4852" y="-15.1763" width="82.7646" height="82.7646"
                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_94:899" />
              </filter>
              <radialGradient id="paint0_radial_94:899" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)">
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)" />
            <rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)" strokeWidth="0.7" />
            <path opacity="0.3" d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)" />
            <path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)" strokeWidth="0.7" />
            <path opacity="0.3" d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)" />
            <path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)" strokeWidth="0.7" />
            <defs>
              <linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>

      <a href="#"
        onClick={() => setBackToTop(true)}
        className={`${displayBackToTop ? 'flex' : 'hidden'} items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-8 left-auto z-[999] hover:shadow-signUp hover:bg-opacity-80 transition duration-300 ease-in-out back-to-top shadow-md`}>
        <span className="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"></span>
      </a>
    </>
  )
}
