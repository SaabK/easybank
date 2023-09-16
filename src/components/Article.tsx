import React from 'react'
import { IArticle } from '../types';

function Article({ image, author, title, body }: IArticle) {
  return (
    <div className="flex flex-col">
      <img src={image} className="w-full h-48 object-cover rounded-t-md" />
      <div className="bg-white p-6 rounded-b-md flex flex-col gap-3">
        <span className="text-xs">By {author}</span>
        <h3 className="text-lg leading-tight tracking">{title}</h3>
        <p className="font-light text-sm text-dark-blue/80 line-clamp-4">{body}</p>
      </div>
    </div>
  )
}

export default Article;