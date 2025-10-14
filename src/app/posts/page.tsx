// Exemplo: app/posts/page.tsx (Server Component)

const API_URL = 'http://localhost:3002/posts';

async function getPosts() {
  const res = await fetch(API_URL, { 
    // Garante que os dados são frescos, não vindos do cache estático do Next.js
    cache: 'no-store' 
  }); 

  if (!res.ok) {
    // Trate o erro
    throw new Error('Falha ao buscar posts');
  }

  const posts = await res.json();

  return posts.reverse();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id} className="p-4 mb-3 border rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
}