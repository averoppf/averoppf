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
    <div className="bg-black min-h-screen">
      <div className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2rem] text-gray-400 mb-4 font-michroma">Knowledge Base</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-michroma leading-tight mb-6 text-white">
            PPF Articles and Guides
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Practical, no-nonsense guides on Paint Protection Film, ceramic coating, and vehicle protection - written by Avero, South Sydney PPF specialists.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              onClick={() => navigate(`/articles/${article.slug}`)}
              className="group border border-gray-800 cursor-pointer hover:border-white transition-all duration-300 flex flex-col bg-black p-6"
            >
              <span className="text-xs uppercase tracking-[0.2rem] text-gray-500 font-semibold mb-4 font-michroma">
                {article.category}
              </span>
              <h2 className="text-base font-bold text-white font-michroma leading-snug mb-4 group-hover:opacity-70 transition-opacity">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                <span className="text-xs text-gray-600">{article.readTime}</span>
                <span className="text-xs uppercase tracking-[0.2rem] font-semibold text-white font-michroma group-hover:opacity-60">
                  Read
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold font-michroma mb-4">Ready to protect your vehicle?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            South Sydney PPF specialists. Premium self-healing film. 10-year warranty. Dust-free workshop.
          </p>
          <a href="/contact" className="inline-block bg-white text-black font-michroma text-sm tracking-[0.15rem] px-8 py-4 hover:opacity-80 transition-opacity font-bold">
            GET A QUOTE
          </a>
        </div>
      </div>
    </div>
  );
}
