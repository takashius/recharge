import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const items = [
  {
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkMQWJoeevm1PiNDCqGG4IPyiAmEADjG-33CUa_cqTlGFndbHrO-KuqBAnfH8GKn6Iazt3WbhIVEYoKOUvtuSE9ERic4mfZS915jD_rup7-7FjdHSp-gwDEUT8RxstQc-rOVtnv8_g1s1dmwDfI_7hzAz4WYIuK5RIkREdhyFdeHWZJBchh792MWh_/w712-rw/Disen%CC%83o%20sin%20ti%CC%81tulo.webp',
    title: ''
  },
  {
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcmsAlYOWLTTJ-n5zaCAKO4EJiw7HeJpMayye9E8U0OnjqhyphenhyphenDJm-CVlYy8_Yr4-cFrEkZb9R-bvvh3kAUGOrgecGIt1TojcPyzvlL6ph95kXtpkIQWw10qcZxIgju8sMm2egBXeQ99MVD6i6bRsCVpp2zyiqO5myakyWzbOaHM5I5tlW1wtLgB7XlG/w706-rw/87abf3ab-8927-4228-9687-17b080bdd129.webp',
    title: 'CODESA - Reconocimiento a la Excelencia Empresarial en el Rubro Transporte de Pasajeros'
  },
  {
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcuB9ufnbpU00GD6DxfNeZZqvRC4ZH9_RFbvfUL1k7LgwX9_2vYE9okFtuoXmAK4aw9JI0-jP8qnJvo0IQlv86Dxx1KWmARWwWylIBZJYNkrrKcU5yhM_sLcflNBNdN1lgzMeuFE5FB0yn/w706-rw/Tarjeta_eBus.webp',
    title: 'Pásate al prepago, tiene más beneficios!!!'
  },
  {
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKcwqL5agJEMNnxqzKX5kGnsFIgSN6hxk4vtW1e4gu4u5sr9Pp-F1yyF8QxvDN1wcjk0nQ4_QXzOfRXHbAOkip6rszWBM5TDKvKEfC9jpaLkJHZDL1bZ_QhSrkiGsXWTKSLxAGdJGJ9ueR/w706-rw/seguimiento.webp',
    title: 'Seguimiento Satelital.'
  }
]

const ImageSlider = () => {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Paper key={i} className="relative w-full h-screen">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="text-2xl font-bold">{item.title}</h2>
          </div>
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
