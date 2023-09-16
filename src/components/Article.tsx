import React from 'react'
import { IArticle } from '../types';

function Article({ image, author, title, body }: IArticle) {
  return (
    <>
      <img src={image} />
      <div>
        <pre>By {author}</pre>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </>
  )
}

export default Article;