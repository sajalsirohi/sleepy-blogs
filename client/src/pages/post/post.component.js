import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Comments from "../../components/comments/comments.component";
import {
    Outer,
    Title,
    TextSection,
    LoadContainer,
    TopSection,
    CatAndTag,
    CatAndTagCont,
    Tag,
    NoComments,
    BtnContainer,
    LikesContainer
} from "./post.styles";
import Loader from "react-loader-spinner";
import AuthorDetails from "../../components/author-details/author-details.component";
import LikeBtn from "../../components/buttons/like-button/like-button.component";
import ShareBtn from "../../components/buttons/share/share.component";
import InputComment from "../../components/input-comment/input-comment.component";

const PostPage = ({match: {url}}) => {
    const [showComment, updateShowComment] = useState(false);
    const [post, updatePost] = useState();
    const [comments, updateComments] = useState();
    const [authorDetails, updateAuthor] = useState([]);
    const [showLoader, updateLoader] = useState(true);
    useEffect(() => {
        axios.get(url).then(({data: {post, comments, author_details}}) => {
            updatePost(post);
            updateAuthor(author_details);
            updateComments(comments);
            updateLoader(false);
        });
    }, []);
    return (
        <Outer>
            <LoadContainer>
                <Loader
                    type="ThreeDots"
                    color="#802639"
                    height={50}
                    width={50}
                    timeout={30000}
                    visible={showLoader}
                />
            </LoadContainer>
            {!showLoader && (
                <div>
                    <Title>{post.title}</Title>
                    <TopSection>
                        <AuthorDetails authorDetails={authorDetails}/>
                        <div>{post.created_at.substring(0, 10)}</div>
                    </TopSection>
                    <Tag>Categories</Tag>
                    <CatAndTagCont>
                        {post.categories.map((category) => (
                            <CatAndTag>{category}</CatAndTag>
                        ))}
                    </CatAndTagCont>
                    <Tag>Tags</Tag>
                    <CatAndTagCont>
                        {post.tags.map((tag) => (
                            <CatAndTag>{tag}</CatAndTag>
                        ))}
                    </CatAndTagCont>
                    <TextSection>{post.content}</TextSection>
                    <BtnContainer>
                        <LikeBtn url={url}/>
                        <LikesContainer>
                            {post.likes}
                        </LikesContainer>

                        <ShareBtn/>
                        <AwesomeButton
                            ripple
                            type="primary"
                            onPress={() => updateShowComment(!showComment)}
                        >
                            Comment
                        </AwesomeButton>
                    </BtnContainer>

                    <Tag>Comments</Tag>
                    {showComment && <InputComment post_id={post._id}/>}
                    {comments.length > 0 ? (
                        comments.map((comment) => <Comments comment={comment}/>)
                    ) : (
                        <NoComments>No Comments</NoComments>
                    )}
                </div>
            )}
        </Outer>
    );
};

export default withRouter(PostPage);
