export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image?: string;
}

export const articles: Article[] = [
  {
    slug: 'what-is-ppf',
    title: 'What Is Paint Protection Film? The Complete Guide for Australian Car Owners',
    excerpt: 'Everything you need to know about PPF - what it is, how it works, how long it lasts, and whether it is right for your vehicle.',
    category: 'Paint Protection Film',
    readTime: '8 min read',
    publishedDate: '2025-06-01',
  },
  {
    slug: 'ppf-vs-ceramic-coating',
    title: 'PPF vs Ceramic Coating: Which Does Your Car Actually Need?',
    excerpt: 'Two of the most effective forms of vehicle protection - but they do very different jobs. Here is how to decide what is right for your car, your budget, and how you drive.',
    category: 'Paint Protection',
    readTime: '7 min read',
    publishedDate: '2025-06-08',
  },
  {
    slug: 'ppf-cost-sydney',
    title: 'How Much Does PPF Cost in Sydney? (2025 Pricing Guide)',
    excerpt: 'What to expect from PPF pricing in Sydney, what drives the cost, and how to make sure you are getting real value - not just the lowest quote.',
    category: 'Pricing Guide',
    readTime: '6 min read',
    publishedDate: '2025-06-15',
  },
  {
    slug: 'ppf-care-guide',
    title: 'How to Care for Your PPF: The Complete Maintenance Guide',
    excerpt: 'PPF is tough - but it still needs the right care to perform at its best and reach its full lifespan. Here is exactly what to do (and what to avoid).',
    category: 'Maintenance',
    readTime: '6 min read',
    publishedDate: '2025-06-22',
  },
  {
    slug: 'is-ppf-worth-it',
    title: 'Is PPF Worth It? What Sydney Car Owners Need to Know',
    excerpt: 'The honest answer to the most common question we hear - including who it makes the most sense for, and when you might be better off without it.',
    category: 'Worth It?',
    readTime: '7 min read',
    publishedDate: '2025-07-01',
  },
  {
    slug: 'self-healing-ppf',
    title: 'Self-Healing PPF: How Does It Actually Work?',
    excerpt: 'Scratches that disappear in sunlight sound like marketing magic. Here is the science behind self-healing Paint Protection Film - and what it can and cannot do.',
    category: 'Technology',
    readTime: '5 min read',
    publishedDate: '2025-07-08',
  },
  {
    slug: 'new-car-ppf',
    title: 'New Car PPF: Why You Should Protect It Before the First Drive',
    excerpt: 'The best time to apply Paint Protection Film is before your car sees a single kilometre on the road. Here is why - and what to do as soon as you take delivery.',
    category: 'New Cars',
    readTime: '6 min read',
    publishedDate: '2025-07-15',
  },
  {
    slug: 'ppf-myths-debunked',
    title: 'Common PPF Myths - Debunked',
    excerpt: 'Paint Protection Film has a lot of misinformation attached to it. Here are the most common myths we hear - and what the reality actually looks like.',
    category: 'Myth vs Reality',
    readTime: '7 min read',
    publishedDate: '2025-07-22',
  },
];
