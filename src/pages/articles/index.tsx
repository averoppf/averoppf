import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from './articlesData';

export default function ArticlesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'PPF Articles and Guides | Avero - South Sydney Paint Protection Film Specialists';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Knowledge Base</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-michroma leading-tight mb-6">
            PPF Articles and Guides
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Practical, no-nonsense guides on Paint Protection Film, ceramic coating, and vehicle protection - written by Avero, South Sydney PPF specialists.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.slug}
              onClick={() => navigate(`/articles/${article.slug}`)}
              className="group border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:border-black transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="bg-black h-2 w-full" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-[0.15rem] text-gray-400 font-semibold mb-3">
                  {article.category}
                </span>
                <h2 className="text-lg font-bold text-black font-michroma leading-snug mb-3 group-hover:opacity-70 transition-opacity">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                  <span className="text-xs uppercase tracking-[0.15rem] font-semibold text-black group-hover:underline">
                    Read
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black py-16 px-6 mt-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold font-michroma mb-4">Ready to protect your vehicle?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            South Sydney PPF specialists. Premium self-healing film. 10-year warranty. Dust-free workshop.
          </p>
          
            href="/contact"
            className="inline-block bg-white text-black font-michroma text-sm tracking-[0.15rem] px-8 py-4 hover:opacity-80 transition-opacity font-bold"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </div>
  );
}
