import React from 'react'
import Card from './Card'
import { articles } from '../data/article'
import {  Link } from "react-router-dom";
import slugify from 'slugify';

const Main = () => {
  return (
    <div class="flex flex-wrap justify-center items-center">
          {
            articles.map((article) => {
               return (
                <Link to={`article/${slugify(article.title.toLowerCase(), '-')}`}>
                <Card key={article.id} article={article}/>
                </Link>
               )
            })
          }
    </div>
  )
}

export default Main