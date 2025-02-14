import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

const blogPosts = [
  {
    title: "The Future of Digital Design",
    excerpt:
      "Exploring upcoming trends and innovations in the digital design landscape.",
    date: "Feb 10, 2024",
    category: "Design Trends",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
  },
  {
    title: "Creating Effective Brand Strategies",
    excerpt:
      "Key insights into developing successful brand strategies in today's market.",
    date: "Feb 8, 2024",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800",
  },
  {
    title: "UX Design Best Practices",
    excerpt:
      "Essential principles for creating user-friendly digital experiences.",
    date: "Feb 5, 2024",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest thoughts and insights on design, technology, and
            creative innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="px-0">
                    Read More →
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
