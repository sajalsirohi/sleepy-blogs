import React, {useEffect, useState} from "react";
import {Outer, NoUser, BtnHolder, CatAndTag, CatAndTagCont} from "../create-post/create-post.styles";
import {AwesomeButton} from "react-awesome-button";
import {selectCurrentUser, isUserLoggedIn} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import TextField from "../../components/textfield-input/textfield-input.component";

const CreatePostPage = ({currentUser, isSessionActive}) => {
    const [data, updateData] = useState({
        title: "",
        content: "",
        categories: "",
        tags: ""
    });
    const [categories, updateCats] = useState([]);
    const [tags, updateTags] = useState([]);

    function handleChange(e) {
        updateData({
            ...data,
            [e.target.getAttribute("name")]: e.target.value,
        });
    }

    useEffect(() => {
        if (data.categories) updateCats(data.categories.split(", "))
    }, [data.categories])

    useEffect(() => {
        if (data.tags) updateCats(data.tags.split(", "))
    }, [data.tags])

    function handleSubmit(){
        console.log({
            ...data,
            categories: categories,
            tags: tags,
        })
    }

    return (
        <div>
            {
                !isSessionActive ? <NoUser>You have to be logged in to create a post.</NoUser>
                    :
                    <Outer>
                        <TextField name="title" Label="Title of your post" onChange={handleChange}/>
                        <TextField name="content" Label="Your sleepy post :D" blog onChange={handleChange}/>
                        <TextField name="categories" Label="Categories? (eg: 'scary, tech')" onChange={handleChange}/>
                        <CatAndTagCont>
                            {
                                categories.map(category => <CatAndTag>{category}</CatAndTag>)
                            }
                        </CatAndTagCont>
                        <TextField name="tags" Label="Tags if any? (eg: 'delhi, night')" onChange={handleChange}/>
                        <CatAndTagCont>
                            {
                                tags.map(tag => <CatAndTag>{tag}</CatAndTag>)
                            }
                        </CatAndTagCont>
                        <BtnHolder>
                            <AwesomeButton onPress={handleSubmit}>Submit</AwesomeButton>
                        </BtnHolder>
                    </Outer>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isSessionActive: isUserLoggedIn
})

export default connect(mapStateToProps)(CreatePostPage);