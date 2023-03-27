import React, {
  useState,
  useEffect
} from 'react'
import useFetch from 'react-fetch-hook'
import GalleryPanel from './components/GalleryPanel'
import PreviewPanel from './components/PreviewPanel'
import './App.css'

function App() {
  const [galleryData, setGalleryData] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const { isLoading, data, error } = useFetch(
    'https://agencyanalytics-api.vercel.app/images.json'
  )

  function setPreview(id) {
    if (galleryData) {
      const selected = galleryData.find((item) => item.id === id)
      setSelectedItem(selected)
    }
  }

  function setFavorite(id) {
    const favItem = galleryData.find((item) => item.id === id)
    favItem.favorited = !favItem.favorited
    setGalleryData([...galleryData, favItem])
    setPreview(id)
  }

  useEffect(() => {
    setGalleryData(data)
    if (selectedItem === null && data) { setSelectedItem(data[0]) }
  }, [data, selectedItem, galleryData])

  return (

    <div className="app">
      {isLoading && <div className="flex-center">One moment please...</div>}
      {error && (
        <div className="flex-center">{`There is a problem fetching the data - ${error}`}</div>
      )}
      {galleryData && (
        <>
          <GalleryPanel
            imageData={galleryData}
            setPreview={(id) => setPreview(id)}
            setSelectedItem={(id) => setSelectedItem(id)}
            selectedItem={selectedItem.id}
          />
          <PreviewPanel
            galleryData={galleryData} // remove
            id={selectedItem.id}
            url={selectedItem.url}
            filename={selectedItem.filename}
            uploadedBy={selectedItem.uploadedBy}
            createdAt={selectedItem.createdAt}
            lastModified={selectedItem.lastModified}
            dimensions={selectedItem.dimensions}
            resolution={selectedItem.resolution}
            sizeInBytes={selectedItem.sizeInBytes}
            favorited={selectedItem.favorited}
            description={selectedItem.description}
            setFavorite={(id) => setFavorite(id)}
          />
        </>
      )}
    </div>
  )
}

export default App
