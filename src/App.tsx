import React from 'react'
import Editor from './components/editor';


export default () => (
  <div className="h-screen w-screen flex bg-teal-900">
    <div className="main-left flex-1 h-full bg-gray-900 text-white">
      <Editor />
    </div>
    <div className="slider w-1 h-full" />
    <div className="main-right flex-1 h-full bg-white">
      loading
    </div>
  </div>
)
