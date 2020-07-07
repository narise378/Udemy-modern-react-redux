import React from 'react'

const ImageList = (props) => {
  // console.log(props.images)
  // const images = props.images.map((image) => {
  //   return (
  //     <img key={image.id} src={image.urls.regular} alt={image.description} />
  //   )
  // })
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />
  })
  return <div>{images}</div>
}

export default ImageList
