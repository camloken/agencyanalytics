import React, {
  useState,
  useEffect
} from 'react'
import useFetch from 'react-fetch-hook'
import GalleryPanel from './components/GalleryPanel'
import PreviewPanel from './components/PreviewPanel'
import './App.css'

type GalleryItem = {
  id: string,
  url: string,
  filename: string,
  uploadedBy: string,
  createdAt: Date,
  lastModified: Date,
  dimensions: { height: number, width: number },
  resolution: { height: number; width: number },
  sizeInBytes: number,
  favorited: boolean,
  description: string,
  imageData: Array<object>,
  setPreview: () => void,
  setSelectedItem: () => void,
  selectedItem: string,
}

function App() {
  const [galleryData, setGalleryData] = useState<Array<GalleryItem> | null>(null)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const { isLoading, data, error } = useFetch(
    'https://agencyanalytics-api.vercel.app/images.json'
  )

  function setPreview(id: string) {
    if (galleryData) {
      const selected = galleryData.find((item) => item.id === id)
      selected && setSelectedItem(selected)
    }
  }

  function setFavorite(id: string) {
    const favItem = galleryData && galleryData.find((item) => item.id === id)
    if (favItem) {
      favItem.favorited = !favItem.favorited
      setGalleryData([...galleryData, favItem])
      setPreview(id)
    }
  }

  function deleteItem(id: string) {
    const idExists = galleryData && galleryData.find((item) => item.id === id)
    if (idExists) {
      const toRemove = galleryData.findIndex((item) => item.id === id)
      const newData = galleryData.splice(toRemove, 1)
      setGalleryData(newData)
    }
  }

  useEffect(() => {
    setGalleryData(data)
    console.log('data', data)
    if (selectedItem === null && data) { setSelectedItem(data[0]) }
  }, [data, selectedItem, galleryData])

  return (

    <div className="app">
      {isLoading && <div className="flex-center">One moment please...</div>}
      {error && (
        <div className="flex-center">{`There is a problem fetching the data - ${error}`}</div>
      )}
      {galleryData && selectedItem && (
        <>
          <GalleryPanel
            imageData={galleryData}
            setPreview={(el: any) => setPreview(el)}
            setSelected={(id: any) => setSelectedItem(id)}
            selectedItem={selectedItem.id}
          />
          <PreviewPanel
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
            description={selectedItem?.description}
            setFavorite={(id: any) => setFavorite(id)}
            deleteItem={(id: any) => deleteItem(id)}
          />
        </>
      )}
    </div>
  )
}

export default App
