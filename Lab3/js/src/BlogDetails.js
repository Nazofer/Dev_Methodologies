import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import styles from "./blog.details.module.scss"

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    })
  }

  return ( 
    <div className={styles.blogDetails}>
      {isPending && <div>Loading...</div>}
      {error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete blog</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;