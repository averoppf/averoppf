import { useNavigate } from 'react-router-dom';

const articlePreviews = [
    {
        slug: 'what-is-ppf',
        category: 'Paint Protection Film',
        title: 'What Is Paint Protection Film? The Complete Guide for Australian Car Owners',
        excerpt: 'Everything you need to know about PPF - what it is, how it works, how long it lasts, and whether it is right for your vehicle.',
        readTime: '8 min read',
    },
    {
        slug: 'ppf-vs-ceramic-coating',
        category: 'Paint Protection',
        title: 'PPF vs Ceramic Coating: Which Does Your Car Actually Need?',
        excerpt: 'Two of the most effective forms of vehicle protection - but they do very different jobs. Here is how to decide what is right for your car.',
        readTime: '7 min read',
    },
    {
        slug: 'is-ppf-worth-it',
        category: 'Worth It?',
        title: 'Is PPF Worth It? What Sydney Car Owners Need to Know',
        excerpt: 'The honest answer to the most common question we hear - including who it makes the most sense for, and when you might be better off without it.',
        readTime: '7 min read',
    },
];

export function ArticlesPreview() {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-black border-gray-900 border-t-1">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-white font-michroma tracking-[0.2rem]">Articles</h2>
                <p className="text-center text-gray-300 mb-12 text-lg">Guides and insights from the Avero team</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {articlePreviews.map((article) => (
                        <div
                            key={article.slug}
                            onClick={() => navigate(`/articles/${article.slug}`)}
                            className="group border border-gray-800 cursor-pointer hover:border-white transition-all duration-300 flex flex-col bg-black p-6"
                        >
                            <span className="text-xs uppercase tracking-[0.2rem] text-gray-500 font-semibold mb-4 font-michroma">
                                {article.category}
                            </span>
                            <h3 className="text-base font-bold text-white font-michroma leading-snug mb-4 group-hover:opacity-70 transition-opacity">
                                {article.title}
                            </h3>
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
                <div className="flex items-center justify-center mt-10">
                    
                        className="text-white border-2 border-white font-michroma text-[0.9rem] tracking-[0.15rem] px-6 py-4 transition-opacity hover:opacity-60 hover:cursor-pointer font-bold"
                        href="/articles"
                    >VIEW ALL ARTICLES</a>
                </div>
            </div>
        </section>
    );
}
