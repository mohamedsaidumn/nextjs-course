import classes from "./featured-posts.module.css";
import PostGrid from "../posts/post-grid";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <div>Feature Post</div>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
