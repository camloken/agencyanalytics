import {
  describe,
  expect,
  it
} from 'vitest'
// import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PreviewPanel from './PreviewPanel'

// These are not full tests, but just to give a quick example

describe('GalleryItems Test', () => {
  it('renders the panel', async () => {
    await expect(PreviewPanel).toBeTruthy()
  })
  // MORE TESTS TO GO HERE
})
