import axios from 'axios'
import { json } from 'body-parser';
import qs from 'qs'
/*export  const getSearc=(term)=>async dispatch=>{
    const response= await axios.get(`
    https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${term}`)
    dispatch({type:"Get_Result",payload:response.data.query.search})}*/
   

   /*export const getNews=(newsToBeSearched)=> async dispatch=>{
        var options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {q: newsToBeSearched, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Strict',mkt:'en-US',count:20,originalImg:true},
            headers: {
              'x-bingapis-sdk': 'true',
              'x-rapidapi-key': '6a7d25eaecmshee44f344abc6669p1ffe03jsnf5b51c7e8f40',
              'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
            }
          };
        const respose=await axios.request(options)
       
      dispatch({type:"Get_Result",payload:respose.data.value})   }*/
     
  
 
  
    export const getNews=(newsToBeSearched)=> async dispatch=>{
     const newsToBeSearche={term:newsToBeSearched}
       
        const respose=await axios.post('/api/searchNew',newsToBeSearche)
        
      dispatch({type:"Get_Result",payload:respose.data.articles})   }

      const searchpics=(inputedText)=>{
        return async function(dispatch){
            const response= await axios.get('https://api.unsplash.com/search/photos',{
                params:{ query: inputedText,per_page:100,orientation:"squarish"},
                headers:{Authorization:"Client-ID 67ef61b0a886f6cd8f31bc76e349a5d73fad8617cb18072479f1a683c19bba97"}
            })
            dispatch({type:"FETCH_PICS",payload:response.data.results})
        }
    }
    
     
    export default searchpics
        


