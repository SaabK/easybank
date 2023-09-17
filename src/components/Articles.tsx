import { articles } from '../data/data';
import Article from './Article';

function Articles() {
  return (
    <div className="bg-very-light-gray py-16">
      <section className="container flex flex-col gap-8">
        <h1 className="text-center md:text-start text-4xl">Latest Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {
            articles.map((article, index) => (
              <Article key={index} image={article.image} author={article.author} title={article.title} body={article.body} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Articles;