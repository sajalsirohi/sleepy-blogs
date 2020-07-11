import React, {useState} from "react";
import { Outer, NameHolder } from "./dropdown.styles"

const Dropdown = ({handleClick, name, Options}) => {
    const [sortOption, updateOption] = useState(Options[0]);
    return (
        <Outer>
            <NameHolder>
                {name}
            </NameHolder>
            <div className="btn-group">
                <button type="button" className="btn btn-info">{sortOption}</button>
                <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    {
                        Options.map(option => <a name={name} className="dropdown-item" href="#"
                                                 onClick={(e)=> {
                                                     updateOption(option);
                                                     handleClick(e, option)
                                                 }}>{option}</a>)
                    }
                </div>
            </div>
        </Outer>

    )
}

export default Dropdown;