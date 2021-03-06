// @flow

import React from 'react'
import ReactDocumentTitle from 'react-document-title'
import type { Link } from '../types'
import ItemList from '../components/ItemList'

const PostsPage = ({ posts }: { posts: Array<Link> }) => (
  <div>
    <ReactDocumentTitle title="Scott Luptowski | Posts" />

    <ItemList
      header={
        <p>
          Here are some links to posts I've written about software development:
        </p>
      }
      links={posts}
    />
  </div>
)

export default PostsPage
