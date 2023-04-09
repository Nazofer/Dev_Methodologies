import BlogList from './BlogList';
import styles from './home.module.scss';
import useFetch from './useFetch';

const Home = () => {
 const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  

  return (
    <div className={styles.home}>
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
     {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
    </div>
  );
}

export default Home;
