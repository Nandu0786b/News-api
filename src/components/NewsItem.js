import React from 'react'
const NewsItem = (props)=>{
    let {imageurl,title,description,newsUrl,author,date,source}=props
    return ( 
      <div className='my-3'>
        <div className="card" >
        {/* it will show just on the top of card */}
         <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
        {source}
          <span className="visually-hidden"></span> 
        </span> 
          {/* <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'

          }}>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
          {source}
            <span className="visually-hidden"></span>
          </span> */}
          {/* </div> */}
                <img src={imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author? "Private":author} updated {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
      
    )
  }

export default NewsItem