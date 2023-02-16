import React from "react";

const NewsItems = (props) => {

    let { title, description, imageUrl,newsUrl } = props;
    return (
        <>
            <div className="card mt-3" >
                <img src={imageUrl} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
            </div>
        </>
    )
}

export default NewsItems;
