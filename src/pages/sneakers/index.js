import Sneakers from '../../templates/Sneakers';
import mock from '../../components/Sneaker/mock';

export default function SneakersPage({ data }) {
  return (
    <Sneakers sneaker={ data } />
  )
}

export async function getServerSideProps(context) {
  const data = await mock;
  return {
    props: { data }, // will be passed to the page component as props
  }
}