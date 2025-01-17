const BlogDetail = ({ blogId }) => {
    const blog = blogsData.find((b) => b.id === parseInt(blogId));
  
    return (
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        <p><strong>Date:</strong> {blog.date}</p>
        <p><strong>Topic:</strong> {blog.topic}</p>
  
        {blog.content.map((section, index) => {
          if (section.type === "text") {
            return <p key={index}>{section.data}</p>;
          } else if (section.type === "image") {
            return (
              <div key={index} className="blog-image">
                <img src={section.data} alt={`Blog section ${index + 1}`} />
                {section.caption && <p className="caption">{section.caption}</p>}
              </div>
            );
          }
        })}
      </div>
    );
  };
  