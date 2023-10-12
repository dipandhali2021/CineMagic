import { useEffect, useState } from "react";
import { fetchDataFromApi2 } from "../utils/api2";
// const useFetching = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setLoading("loading...");
//         setData(null);
//         setError(null);

//         fetchDataFromApi2(url)
//             .then((res) => {
//                 setLoading(false);
//                 setData(res);
//             })
//             .catch((err) => {
//                 setLoading(false);
//                 setError("Something went wrong!");
//             });
//     }, [url]);

//     return { data, loading, error };
// };
const useFetching = (url, params) => {
    const fetchData = async () => {
        try {
            const data = await fetchDataFromApi2(url, params);
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const data = fetchData();

    return { data };
};
export default useFetching;