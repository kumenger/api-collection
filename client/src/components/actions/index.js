import axios from 'axios'

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
        const respose=await axios.get('api/searchNew',{term:newsToBeSearched})
        
      dispatch({type:"Get_Result",payload:respose.data})   }
        


