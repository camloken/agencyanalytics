import {
  describe,
  afterEach,
  expect,
  it
} from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PreviewPanel from './PreviewPanel'

// These are not full tests, but just to give a quick example
const props = {
  id: '001002003',
  url: 'www',
  filename: 'custom_name',
  uploadedBy: 'john smith',
  createdAt: '09/10/11',
  lastModified: '10/11/12',
  dimensions: { height: 10, width: 10 },
  resolution: { height: 10, width: 10 },
  sizeInBytes: 9000000,
  favorited: false,
  description: 'this is a test',
  setFavorite: (id: string) => id,
  deleteItem: (id: string) => id,
}

const panel = (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PreviewPanel {...props} />
)

afterEach(async () => {
  await cleanup()
})

describe('GalleryItems Test', () => {
  it('renders the panel', async () => {
    await expect(panel).toBeTruthy()
  })

  it('defines the background image url', async () => {
    render(panel)
    expect(screen.getByTestId('image')).toHaveStyle(`background: url("${props.url}") center center / cover no-repeat`)
  })

  it('the "uploadedBy" information is visible', async () => {
    render(panel)
    await expect(screen.getByText('john smith')).toBeVisible()
  })

  it('the "filename" information is visible', async () => {
    render(panel)
    await expect(screen.getByText('custom_name')).toBeVisible()
  })

  // More to go tests here
})
