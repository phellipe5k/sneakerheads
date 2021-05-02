import Sneakers from '../../templates/Sneakers';
import mock from '../../components/Sneaker/mock';
import { motion } from 'framer-motion';
import Axios from 'axios';

export default function SneakersPage({ data }) {
  return (
    <motion.div exit={{opacity: 0}} initial="initial" animate="animate">
    <Sneakers sneaker={ data } />
    </motion.div>
  )
}

export async function getServerSideProps(context) {

  const url = 'https://sneakers-api-app.herokuapp.com';
  if (context.query.search) {
    const { search } = context.query;
    const { data } = await Axios.get(`${url}/search/${search}`);
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
  const { data } = await Axios.get(`${url}/home`);
  return {
    props: { data }, // will be passed to the page component as props
  }
}