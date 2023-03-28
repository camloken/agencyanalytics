import React, { useEffect } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import GalleryItems from './GalleryItems'

function GalleryPanel(galleyPanelProps: {
  imageData: Array<any>,
  setPreview: (id: string) => void,
  setSelected: (el: any) => void,
  selectedItem: string,
}) {
  const {
    imageData,
    setPreview,
    setSelected,
    selectedItem,
  } = galleyPanelProps

  // Sorted by date
  const sortedImages: Array<{ createdAt: string, favorited: boolean }> =
  imageData.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
  // Sorted by favorties
  const favoriteImages: Array<{ favorited: boolean }> =
  sortedImages.filter((item) => item.favorited === true)

  useEffect(() => {
    setSelected(sortedImages[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tabs className="tab-panel">
      <h2 className="m-0">Photos</h2>
      <TabList>
        <Tab onClick={() => setSelected(sortedImages[0])}>Recently Added</Tab>
        <Tab onClick={() => setSelected(favoriteImages[0])}>Favorited</Tab>
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