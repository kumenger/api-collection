import axios from 'axios'


     
  
 
  
    export const getNews=(newsToBeSearched)=> async dispatch=>{
     const newsToBeSearche={term:newsToBeSearched}
       
        const respose=await axios.get(`https://newsapi.org/v2/everything?q=${newsToBeSearched}&apiKey=295bd0f691604b7f94c1404c1d390e9d`)
        
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
        


