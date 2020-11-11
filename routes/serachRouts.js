const axios=require('axios')
const Router=require('express').Router()
 Router.route('/searchNew').get((req,res)=>{
    const newsToBeSearched=req.body.term
    axios.get('http://newsapi.org/v2/everything?' +
    `q=${newsToBeSearched}&` +
    'sortBy=popularity&' +
    'apiKey=295bd0f691604b7f94c1404c1d390e9d').then((response)=>{res.status(200).json(response.data.articles)}).catch((err)=>{res.status(500).json(err.message)})

})
Router.route('/topheadline').get((req,res)=>{

    axios.get( "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=295bd0f691604b7f94c1404c1d390e9d").then((response)=>{res.status(200).json(response.data.articles)}).catch((err)=>{res.status(500).json(err.message)})

})
   

module.exports=Router