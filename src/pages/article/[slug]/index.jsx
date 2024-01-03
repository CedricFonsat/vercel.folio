import React from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '../../../api/api';

const Index = () => {
    const { slug } = useParams()
    // const article = getArticle(Number(slug));

    // console.log(article,'rrrr');

  return (
    <div>
        <p className="text-3xl font-bold underline">
        Page article / sous dossier / slug : {slug}
        </p>

{/* <h1>{article[0].title}</h1>

<div className='max-w-[300px]'>
<img src={article[0].foreground} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
</div>
     */}
    </div>
  )
}

export default Index