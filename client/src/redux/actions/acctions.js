import  {GET_COUNTRIES ,
         CREATE_ACTIVITY,
         GET_COUNTRIE_BY_NAME,
         CHANGE_PAGE,
         FILTER_COUNTRY_CONTINENT,
         GET_COUNTRIES_BY_ID,
         GET_ACTIVITYS,
         COUNTRY_SELECT,
         FILTER_COUNTRY} from './acctions-types';
import axios from 'axios';



export function  getCountries (){ 
   
       return   async function async(dispatch){
                try {
                       const response = await axios.get('http://localhost:3001/countries');
                       return dispatch({
                             type : GET_COUNTRIES,
                             payload : response.data,
                       })

                } catch (error) {
                     
                     console.log(error);
                }
       }
}

export function  createActivity (activity){
     return  async function async(dispatch){
          try {  
              const response = await axios.post('http://localhost:3001/activities',activity);  
              return  dispatch({
                       type: CREATE_ACTIVITY,
                       payload:response,
                    })
          } catch (error) {
              alert(error.message)
          }

     }

}

export function  getActivity (){
     return async function  async(dispatch){
           const  response = await   axios.get('http://localhost:3001/activities');
           return dispatch ({
               type : GET_ACTIVITYS,
               payload : response.data,
           })

     }
}

export function searchByName (name){
     return async function async(dispatch){
         try {
          const  response = await axios.get(`http://localhost:3001/countries?name=${name}`);
                dispatch({
                     type: GET_COUNTRIE_BY_NAME,
                     payload: response.data,
                      });
       } catch (error) {
          alert(error.message);
         }
     }
}

export function changePage (pageNumber){
     return  {
           type :CHANGE_PAGE,
           payload : pageNumber,
     }
}




export function filterCountryContinent(typeContinet){
     return {
          type: FILTER_COUNTRY_CONTINENT,
          payload : typeContinet,
       }
}

export  function cardId(id){
     return  async function async(dispatch){
          const response = await axios.get(`http://localhost:3001/countries/${id}`);
          if(!response.data){
            console.log(response);
          }

           return dispatch({
               type :GET_COUNTRIES_BY_ID,
               payload : response.data,
           })
     }

}

export function countrySelect(countries){
       return async function async(dispatch){
             dispatch({
               type : COUNTRY_SELECT,
               payload  :  countries,
             }
             )
       }
}

export function filterCountries(countries){
      return async function (dispatch){
             dispatch({
               type :FILTER_COUNTRY,
               payload : countries
             })
      }
}
