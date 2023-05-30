import { useState } from 'react';
import Uppy, { UppyFile } from '@uppy/core';
import { DragDrop } from '@uppy/react';
import ThumbnailGenerator from '@uppy/thumbnail-generator';

type UploadProps = {
  onChange: (file: UppyFile) => void;
}
export default function Upload({ onChange }: UploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const uppy = new Uppy().use(ThumbnailGenerator).on('thumbnail:generated', (file, preview) => {
    onChange(file);
    setPreview(preview);
  });

  return (
    <>
      <DragDrop uppy={uppy}></DragDrop>
      {preview && <img src={preview} alt="Image Preview"></img>}
    </>
  )
}