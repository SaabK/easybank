import React from 'react'
import { articles } from '../data/data';
import Article from './Article';

function Articles() {
  return (
    <section>
      <h1>Latest Articles</h1>
      {
        articles.map((article, index) => (
          <Article key={index} image={article.image} author={article.author} title={article.author} body={article.body} />
        ))
      }
    </section>
  )
}

export default Articles;