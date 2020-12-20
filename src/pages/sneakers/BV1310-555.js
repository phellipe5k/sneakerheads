import SneakerDetail from '../../templates/SneakerDetail';
import mock from '../../templates/SneakerDetail/mock';

export default function SneakerDetailPage({ data }) {
  return (
    <>
    <SneakerDetail sneaker={ data } />
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await mock;
  return {
    props: { data }, // will be passed to the page component as props
  }
}
