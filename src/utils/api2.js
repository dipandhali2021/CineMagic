// import axios from "axios";


// const BASE_URL="https://vidsrc.to/vapi";



// export const fetchDataFromApi2 = async (url,params)=>{
//     try{
//             const {data} = await axios.get(BASE_URL + url, {
               
//                 params,
//             })
//             console.log(data)
//             return data;
//     } catch (err) {
//         console.log(err);
        


//         return err;
//     }


// }



import axios from "axios";

const BASE_URL = "https://vidsrc.to/vapi";

export const fetchDataFromApi2 = async (url, params) => {
    try {
        const response = await axios.get(BASE_URL + url, {
            params,
        });
        const data = response.data; // Extract data from the response
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};