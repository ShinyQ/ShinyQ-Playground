import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

interface BlogPostParams {
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState(blogPosts.find(post => post.slug === slug));
  const [relatedPosts, setRelatedPosts] = useState(blogPosts.filter(p => p.slug !== slug).slice(0, 3));
  
  useEffect(() => {
    // Update post when slug changes
    setPost(blogPosts.find(p => p.slug === slug));
    
    // If post is found, find related posts (by matching tags)
    if (post) {
      const related = blogPosts
        .filter(p => 
          p.slug !== slug && 
          p.tags.some(tag => post.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedPosts(related.length ? related : blogPosts.filter(p => p.slug !== slug).slice(0, 3));
    }
  }, [slug, post]);
  
  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout className="bg-background">
      <div className="w-full bg-muted">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
            <div>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
              })}
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readingTime} read</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/blog" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          {/* Related posts */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link key={related.id} to={`/blog/${related.slug}`}>
                  <div className="bg-card rounded-lg overflow-hidden border border-border 
                    hover:border-primary transition-all duration-300">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={related.coverImage} 
                        alt={related.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2 line-clamp-2">{related.title}</h4>
                      <div className="text-xs text-foreground/60">
                        {new Date(related.date).toLocaleDateString('en-US', {
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
