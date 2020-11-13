const axios=require('axios')
const qs = require('qs')
const Router=require('express').Router()
 Router.route('/searchNew').post((req,res)=>{
    newsToBeSearched=req.body.term
  //qs.stringify(newsToBeSearched)
    axios.get(`https://newsapi.org/v2/everything?q=${newsToBeSearched}&apiKey=295bd0f691604b7f94c1404c1d390e9d`).then((response)=>{res.status(200).json(response.data)}).catch((err)=>{res.status(500).json(err.message)})

})
Router.route('/topheadline').get((req,res)=>{

    axios.get( "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=295bd0f691604b7f94c1404c1d390e9d").then((response)=>{res.status(200).json(response.data.articles)}).catch((err)=>{res.status(500).json(err.message)})

})
 Router.route('/starwar').post((req,res)=>{
     const select=req.body.select;
     const numbers=req.body.numbers;
     axios.post(`http://swapi.dev/api/${select}/${numbers}`).then((resp)=>{res.status(200).json(resp.data)}).catch((err)=>{res.status(500).json(err.message)})
 }) 

module.exports=Router