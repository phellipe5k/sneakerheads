import SneakerDetail from '../../templates/SneakerDetail';
import Axios from 'axios';
import { useRouter } from 'next/router';
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
    <>
    <SneakerDetail sneaker={ data } colors={colors} luminosity={luminosity()} />
    </>
  )
}
/*
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { data } = await fetch(`https://sneakers-api-app.herokuapp.com/id/${}`)
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}*/

export async function getServerSideProps(context) {
  const { id } = context.query;
  const url = 'https://sneakers-api-app.herokuapp.com';
  const { data } = await Axios.get(`${url}/id/${ id }/prices`)
  return {
    props: { data }, // will be passed to the page component as props
  }
}