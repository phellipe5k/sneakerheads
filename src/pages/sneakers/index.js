import Sneakers from '../../templates/Sneakers';
import mock from '../../components/Sneaker/mock';
import Axios from 'axios';

export default function SneakersPage({ data }) {
  return (
    <Sneakers sneaker={ data } />
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