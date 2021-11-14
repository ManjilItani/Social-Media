import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const[post, setPost] = useState("");
  const[user, setUser] = useState("");


  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://serverless-api.manjilitani3.workers.dev/api/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);
  
  let submit =  (user, post) => {
      
      return posts + user 
  }
  
  const updatePost = evt => setPost(evt.target.value);

  const updateUser = evt => setUser(evt.target.value);

  console.log(`the post is ${post}`);
  console.log(user);

  return (
    <div>
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
            <div key={post.id}>
                <h2>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </h2>
            </div>
            ))}
        </div>
        <div>
            <h1>Make post</h1>
            <form>
                <input autoComplete= "off" autoFocus id="user" onChange={updateUser} placeholder="Username" type="text"></input>
                <br/>
                <input autoComplete= "off" autoFocus id="posts" onChange={updatePost} placeholder="Post!" type="text"></input>
                <br />
                <button onClick={submit} type = "submit">Post!</button>
            </form>
        </div>
    </div>
  );
};

export default Posts;