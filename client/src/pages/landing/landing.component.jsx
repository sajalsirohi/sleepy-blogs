import React, { useEffect, useState } from "react";
import { LandingContainer, Title, CreatePostBtn } from "./landing.styles";

import {AwesomeButton} from "react-awesome-button";

import CatLayout from "../../components/categories-layout/categories-layout.component";
import TagLayout from "../../components/tags-layout/tags-layout.component";
import PostPreviewLayout from "../../components/posts-preview-layout/post-preview-layout.component";
import AboutUs from "../../components/aboutus/aboutus.component";

import Loader from "react-loader-spinner";
import axios from "axios";

import {withRouter} from "react-router";

const LandingPage = ({history}) => {
  const [posts, updatePosts] = useState([]);
  const [categories, updateCategories] = useState([]);
  const [tags, updateTags] = useState([]);
  const [showLoader, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/landingPage").then(({ data }) => {
      setLoading(false);
      updatePosts(data.post);
      updateCategories(data.categories.slice(0, 6));
      updateTags(data.tags.filter(tag => tag !== ''));
    });
  }, []);

  return (
    <LandingContainer>
      <AboutUs />
      <Title>Recent Posts</Title>
      <Loader
          type="ThreeDots"
          color="#802639"
          height={50}
          width={50}
          timeout={30000}
          visible={showLoader}
        />
      <PostPreviewLayout posts={posts} />
      <Title>Browse by cateogries</Title>
      <Loader
          type="ThreeDots"
          color="#802639"
          height={50}
          width={50}
          timeout={30000}
          visible={showLoader}
        />
      <CatLayout categories={categories} />
      <Title>Search by Tags</Title>
      <Loader
          type="ThreeDots"
          color="#802639"
          height={50}
          width={50}
          timeout={30000}
          visible={showLoader}
        />
      <TagLayout tags={tags} />
        <CreatePostBtn>
            <AwesomeButton type="primary" onPress={() => history.push("/posts")}>
                See all blogs
            </AwesomeButton>
        </CreatePostBtn >
    </LandingContainer>

  );
};

export default withRouter(LandingPage);
