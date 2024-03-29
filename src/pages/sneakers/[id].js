import SneakerDetail from '../../templates/SneakerDetail';
import Axios from 'axios';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useImageColor from 'use-image-color';

export default function SneakerDetailPage({ data }) {
  const { colors } = useImageColor(data.thumbnail, { cors: true, colors: 5 });
  const router = useRouter();
  const luminosity = () => {
    if(colors) {
      const hex = colors[1];
      const nib = hex.split(''); 
      const r = parseInt(nib[1]+nib[2],16);
      const g = parseInt(nib[3]+nib[4],16);
      const b = parseInt(nib[5]+nib[6],16);
      const luminosidade = ( r * 299 + g * 587 + b * 114) / 1000;
      if (luminosidade > 235) {
        const hex = colors[0];
        const nib = hex.split(''); 
        const r = parseInt(nib[1]+nib[2],16);
        const g = parseInt(nib[3]+nib[4],16);
        const b = parseInt(nib[5]+nib[6],16);
        const luminosidade = ( r * 299 + g * 587 + b * 114) / 1000;
        return luminosidade >=128 ? 'light0' : 'dark0';
      }
      return luminosidade >=128 ? 'light1' : 'dark1';
    }
  }
  return (
    <motion.div exit={{opacity: 0}} initial="initial" animate="animate">
    <SneakerDetail sneaker={ data } colors={colors} luminosity={luminosity()} />
    </motion.div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const url = process.env.NEXT_APP_API_URL || 'http://localhost:3001';
  const { data } = await Axios.get(`${url}/id/${ id }/prices`)
  console.log('data: ', data)
  return {
    props: { data }, // will be passed to the page component as props
  }
}