import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog"; 

const LatestBlogs = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              From My Blog
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/blog">
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
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
                  <div className="text-xs text-foreground/60">
                    {new Date(post.date).toLocaleDateString('en-US', {
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
    </section>
  );
};

export default LatestBlogs;
