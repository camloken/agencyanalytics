import React, { useEffect } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import GalleryItems from './GalleryItems'

function GalleryPanel(galleyPanelProps: {
  imageData: [],
  setPreview: () => void,
  setSelectedItem: () => void,
  selectedItem: string,
}) {
  const {
    imageData,
    setPreview,
    setSelectedItem,
    selectedItem,
  } = galleyPanelProps

  const sortedImages: array = imageData.sort((a, b): any => new Date(b.createdAt<Date>) - new Date(a.createdAt<Date>)) // Sorted by date
  const favoriteImages: array = sortedImages.filter((item) => item.favorited<boolean> === true) // Sorted by favorties

  useEffect(() => {
    setSelectedItem(sortedImages[0]<object>)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tabs className="tab-panel">
      <h2 className="m-0">Photos</h2>
      <TabList>
        <Tab onClick={() => setSelectedItem(sortedImages[0]<object>)}>Recently Added</Tab>
        <Tab onClick={() => setSelectedItem(favoriteImages[0]<object>)}>Favorited</Tab>
      </TabList>
      <TabPanel className="grid-wrapper">
        <GalleryItems
          imageData={sortedImages}
          setPreview={setPreview}
          selectedItem={selectedItem}
        />
      </TabPanel>
      <TabPanel className="grid-wrapper">
        <GalleryItems
          imageData={favoriteImages}
          setPreview={setPreview}
          selectedItem={selectedItem}
        />
      </TabPanel>
    </Tabs>
  )
}

export default GalleryPanel