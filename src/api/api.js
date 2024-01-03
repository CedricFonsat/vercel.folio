import { articles } from "../data/article"

const getArticles = articles;

const getArticle = (articleId) => {
 return articles.filter((article) => {
   return article.id == articleId
 });
}


export {getArticle, getArticles}