
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  );
  
  // Filter posts by search term and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-10">
          <div className="text-sm text-primary font-mono mb-2">
            // thoughts and insights
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Articles, tutorials, and thoughts on software development, architecture, 
            and engineering practices.
          </p>
        </div>
        
        <div className="mb-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Search */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-foreground/60 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          
          {/* Tags filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors
                ${!selectedTag 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-foreground/70 hover:bg-muted/80'}`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors
                  ${selectedTag === tag 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground/70 hover:bg-muted/80'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <div className="bg-card rounded-lg overflow-hidden border border-border h-full 
                hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-foreground/70 text-sm mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-foreground/60">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Read more <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl mb-2">No posts found</h3>
            <p className="text-foreground/70">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
