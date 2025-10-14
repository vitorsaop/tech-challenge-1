'use client'; // Se estiver usando o App Router, este componente precisará ser Client Component

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3002/posts';

// Tipagem de exemplo
interface Post {
  id: number;
  title: string;
  content: string;
}

export default function PostsPage() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // --- READ: Lógica para buscar os posts (ocorre na montagem do componente) ---
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // --- CREATE: Lógica para criar um novo post ---
  const handleCreate = async (title: string, content: string) => {
    const newPost = { title, content };
    try {
      const response = await axios.post(API_URL, newPost);
      // JSON Server retorna o novo item com ID, atualizamos o estado
      setPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  };

  // --- UPDATE: Lógica para atualizar um post existente ---
  const handleUpdate = async (id: number, newTitle: string, newContent: string) => {
    const updatedPost = { title: newTitle, content: newContent };
    try {
      await axios.patch(`${API_URL}/${id}`, updatedPost);
      // Atualiza o estado localmente para refletir a mudança
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, title: newTitle, content: newContent } : post
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
    }
  };

  // --- DELETE: Lógica para deletar um post ---
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Remove o post do estado localmente
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Erro ao deletar post:", error);
    }
  };


  if (loading) return <div className="text-center p-8 text-xl">Carregando dados mockados...</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <span>Leandro</span>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">CRUD de Posts (Mockado)</h1>

      {/* Exemplo de Componente de Criação (Você criaria um componente separado) */}
      <CreatePostForm onCreate={handleCreate} />

      {/* Lista de Posts */}
      <div className="space-y-4">
        {posts
          .slice()
          .reverse()
          .map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

// Componente simples para a criação (exemplo de estilização com Tailwind)
const CreatePostForm = ({ onCreate }: { onCreate: (title: string, content: string) => void }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      onCreate(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mb-8 border border-blue-200 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">Criar Novo Post</h2>
      <input
        type="text"
        placeholder="Tipo de transação"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
      />
      <textarea
        placeholder="Valor da transação"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        rows={3}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Adicionar Post
      </button>
    </form>
  );
};


// Componente para exibir e editar um post
const PostItem = ({ post, onUpdate, onDelete }: { post: Post, onUpdate: (id: number, title: string, content: string) => void, onDelete: (id: number) => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);

  const handleSave = () => {
    onUpdate(post.id, editTitle, editContent);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border border-gray-100 rounded-lg shadow-sm bg-white">
      {isEditing ? (
        // UI de Edição
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full p-2 mb-2 border border-yellow-300 rounded focus:ring-yellow-500"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 mb-4 border border-yellow-300 rounded focus:ring-yellow-500"
            rows={2}
          />
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded text-sm mr-2 transition duration-200"
          >
            Salvar
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-3 rounded text-sm transition duration-200"
          >
            Cancelar
          </button>
        </div>
      ) : (
        // UI de Visualização
        <div>
          <h2 className="text-xl font-semibold text-gray-700">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.content}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-200"
            >
              Update
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};