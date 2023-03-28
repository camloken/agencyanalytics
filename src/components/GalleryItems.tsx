import React from 'react'

type GridItem = {
  id: string,
  url: string,
  filename: string,
  sizeInBytes: number,
}

type GalleryItemProps = {
  imageData: Array<object>,
  setPreview: (id: string) => void,
  selectedItem: string,
}

function GalleryItems(galleyItemProps: GalleryItemProps) {
  const {
    imageData,
    setPreview,
    selectedItem,
  } = galleyItemProps

  const items = imageData.map((item: GridItem) => {
    const {
      id,
      url,
      filename,
      sizeInBytes
    } = item
    const activeClassName: string = ((id) === selectedItem) ? 'image active' : 'image'
    return (
      <section className="grid-item" key={`${id}${Math.random()}`}>
        <div
          className={activeClassName}
          style={{ background: `url(${url}) center center / cover no-repeat` }}
          onClick={() => setPreview(id)}
          role="presentation"
        />
        <p title={filename}><b>{filename}</b></p>
        <p className="text-light">{`${((sizeInBytes) / 1000000).toFixed(1)} MB`}</p>
      </section>
    )
  })
  // Items below must be wrapped to avoid Typescript build error
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{items}</>
}

export default GalleryItems
