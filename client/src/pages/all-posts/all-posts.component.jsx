import React, {useEffect, useRef, useState} from "react";
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
        Filterby: "categories",
        FilterByValue: ""
    });
    let initialPosts = useRef();
    const [isFiltered, updateFiltered] = useState(false);

    useEffect(() => {
        axios.get("/posts").then(({data}) => {
            initialPosts.current = data;
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
        let field;
        let orderBy = "desc";
        switch(values.Sortby) {
            case "date (latest)":
                field = "created_at";
                break;

            case "date (oldest)":
                field = "created_at";
                orderBy = "asc";
                break;

            case "most views":
                field = "views";
                break;

            case "most likes":
                field = "likes";
                break;
        }
        let tempPosts = _.orderBy(allPosts, [`post.${field}`], [orderBy]);
        if (values.FilterByValue !== "") {
            let filteredTempPosts = tempPosts.filter(post =>
                post.post[values.Filterby].includes(values.FilterByValue)
            );
            updateFiltered(true);
            updatePosts(filteredTempPosts);
        }
        else {
            if (tempPosts && !isFiltered) updatePosts(tempPosts)
            else {
                updatePosts(initialPosts.current);
                updateFiltered(false);
            }
        }
    }

    useEffect(() => {
        updateLoading(false);
    }, [allPosts])

    return (
        <Outer>
            <FilterHolder>
                <Dropdown values={values} handleClick={handleClick} name="Sort by"
                          Options={["Date (Latest)", "Date (Oldest)", "Most Views", "Most Likes"]}/>
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