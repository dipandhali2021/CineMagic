
import Navbar from '../../components/Navbar/Navbar'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import BasicDetails from '../../Movie_basic_details/BasicDetails';

//components: navbar,details

const Details = () => {
  
  const {id} = useParams();
  const {data,loading,error} = useFetch(`/movie/${id}`)
  

  return (
    <div>

<Navbar/>
<BasicDetails data={data} loading={loading} error={error} id={id}/>


      
    </div>
  )
}

export default Details