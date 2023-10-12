import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import BasicDetails from "../../components/Movie_basic_details/BasicDetails"



const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading, error } = useFetch(`/${mediaType}/${id}`);

  return (
    <div>
      <Navbar />
      <BasicDetails data={data} loading={loading} error={error} id={id} />
    </div>
  );
};

export default Details;
