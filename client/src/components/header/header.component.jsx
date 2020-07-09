import React, {useState, useEffect} from "react";
import "./header.styles.scss";
import axios from "axios";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {logoutUser} from "../../redux/user/user.action"
import {isUserLoggedIn} from "../../redux/user/user.selectors";
import ReactLogo from "../../assets/sleep.svg";
import {withRouter} from "react-router";

const Header = ({isUserLoggedIn, logoutUser, history}) => {
    const [searchByValue, updateSearchBy] = useState("Search By");
    const [searchFor, updateSearchFor] = useState("");
    const [searchResult, updateSearchResult] = useState([]);
    var searched = true;

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            axios({
                url: "/search",
                method: "post",
                params: {
                    searchFor: searchFor,
                    searchBy: searchByValue,
                },
            }).then((res) => {
                searched = true;
                let temp = [];
                for (const [key, value] of Object.entries(res.data)) {
                    if (key === "title") {
                        temp.push({
                            [key]: value.map(({title}) => title),
                        });
                    } else
                        temp.push({
                            [key]: value,
                        });
                }
                updateSearchResult(temp);
            });
        }, 1000);
        return () => clearTimeout(timeOutId);
    }, [searchFor]);

    function handleClick(e) {
        e.preventDefault();
        updateSearchBy(e.target.getAttribute("value"));
    }

    function handleChange(e) {
        if (e.target.value === "") searched = false;
        updateSearchFor(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(searchFor);
        axios({
            url: "/search",
            method: "post",
            params: {
                searchFor: searchFor,
                searchBy: searchByValue,
            },
        }).then((res) => {
            searched = true;
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href={isUserLoggedIn ? "/user" : "/"}>
                <img src={ReactLogo} alt="logo"/>
                Sleepy Stories
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        {
                            isUserLoggedIn ?
                                <div className="nav-link" onClick={() => {
                                    history.push("/");
                                    logoutUser();
                                }}>
                                    Logout
                                </div>
                                :
                                <a className="nav-link" href="/signup">
                                    Sign In
                                </a>
                        }
                    </li>
                </ul>
                <form
                    className="form-inline my-2 my-lg-0"
                    onSubmit={(e) => handleSubmit(e)}
                >
          <span className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
              {searchByValue}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                  className="dropdown-item"
                  href="#"
                  value="Tags"
                  onClick={handleClick}
              >
                Tags
              </a>
              <a
                  className="dropdown-item"
                  href="#"
                  value="Title"
                  onClick={handleClick}
              >
                Title
              </a>
              <a
                  className="dropdown-item"
                  href="#"
                  value="Categories"
                  onClick={handleClick}
              >
                Categories
              </a>
            </div>
          </span>
                    <div className="input-cont">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchFor}
                            onChange={handleChange}
                        />
                        {searched && (
                            <div className="search-results">
                                {searchResult.map((result) => (
                                    <div className="result-container">
                                        <div className="result-category">
                                            {Object.keys(result)[0]}
                                        </div>
                                        {result[Object.keys(result)[0]].map((resultItem) => (
                                            <div className="result-item">{resultItem}</div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        class="btn redbutton my-2 my-sm-0"
                        type="submit"
                        name="searchFor"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

const mapStateToProps = createStructuredSelector({
    isUserLoggedIn: isUserLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
