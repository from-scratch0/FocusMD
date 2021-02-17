import React, { useEffect, useRef } from 'react'
import * as monaco from 'monaco-editor'

interface EditorProps {

}

const Editor: React.FC<EditorProps> = () => {
  // 外层div的ref
  const wrapperRef = useRef<HTMLDivElement>(null)
  // 编辑器实例
  const editorIns = useRef<monaco.editor.IStandaloneCodeEditor>()

  // 一些初始化
  useEffect(() => {
    // 创建编辑器实例
    editorIns.current = monaco.editor.create(wrapperRef.current as HTMLElement, {
      language: 'markdown',
      // 黑色风格
      theme: 'vs-dark',
    })
  }, [])

  return (
    <div className="w-full h-full" ref={wrapperRef} />
  )
}

export default Editor