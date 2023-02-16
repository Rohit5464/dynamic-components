import React from 'react'

const Body = (props) => {
    // console.log(props.bodyData.description);
  return (

    <section class="py-5">
  <div class="container">
    <h1 class="fw-light">{props.bodyData.title }</h1>
    <p class="lead">{props.bodyData.description }</p>
  </div>
</section>
  )
}

export default Body