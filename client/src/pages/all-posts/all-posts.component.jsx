import React, {useEffect, useState} from "react";
import PostPreviewLayout from "../../components/posts-preview-layout/post-preview-layout.component";
import axios from "axios";
import Loader from "react-loader-spinner";
import {Outer, FilterHolder, SearchCont} from "./all-posts.styles";
import Dropdown from "../../components/dropdown/dropdown.component";
import FormInput from "../../components/form-input/form-input.component";
import {AwesomeButton} from "react-awesome-button";
import _ from "lodash";

const AllPostPage = () => {
    const [allPosts, updatePosts] = useState([]);
    const [showLoader, updateLoading] = useState(true);
    const [values, updateValues] = useState({
        Sortby: "date (latest)",
        Filterby: "categories"
    });

    useEffect(() => {
        axios.get("/posts").then(({data}) => {
            updatePosts(data);
        });
    }, []);

    function handleClick(e, option) {
        let fieldName = e.target.getAttribute("name").replace(/\s/g,'')
        updateValues({
            ...values,
            [fieldName]: option.toLowerCase()
        });
    }

    function handleChange(e) {
        updateValues({
            ...values,
            [e.target.getAttribute("name")]: e.target.value.toLowerCase()
        })
    }

    function handleSubmit(){
        let tempPosts = _.sortBy(allPosts, "display_name");
        console.log("These posts", tempPosts);
        updatePosts(tempPosts);
    }

    useEffect(() => {
        updateLoading(false);
    }, [allPosts])

    return (
        <Outer>
            <FilterHolder>
                <Dropdown values={values} handleClick={handleClick} name="Sort by"
                          Options={["Date (Oldest)", "Date (Latest)", "Most Views", "Most Likes"]}/>
                <Dropdown values={values} handleClick={handleClick} name="Filter by"
                          Options={["Categories", "Tags", "Title"]}/>
                <SearchCont>
                    <FormInput placeholder="Filter by..." name="FilterByValue" onChange={handleChange}/>
                </SearchCont>
                <AwesomeButton onPress={handleSubmit}>Submit</AwesomeButton>

            </FilterHolder>
            <Loader
                type="ThreeDots"
                color="#802639"
                height={50}
                width={50}
                timeout={30000}
                visible={showLoader}
            />
            <PostPreviewLayout posts={allPosts}/>
        </Outer>

    )
}

export default AllPostPage;