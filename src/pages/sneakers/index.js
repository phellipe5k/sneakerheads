import Sneakers from '../../templates/Sneakers';
import mock from '../../components/Sneaker/mock';
import Axios from 'axios';

export default function SneakersPage({ data }) {
  return (
    <Sneakers sneaker={ data } />
  )
}

export async function getServerSideProps(context) {
  const { data } = await Axios.get('https://sneakers-api-app.herokuapp.com/home');
  return {
    props: { data }, // will be passed to the page component as props
  }
}