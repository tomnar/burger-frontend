import { useState } from 'react';
import Uppy, { UppyFile } from '@uppy/core';
import { DragDrop } from '@uppy/react';
import ThumbnailGenerator from '@uppy/thumbnail-generator';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 18rem;
  width: 18rem;
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

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
    <Wrapper>
      {!preview && <DragDrop uppy={uppy}></DragDrop>}
      {preview && <Image src={preview} alt="Image Preview"></Image>}
    </Wrapper>
  )
}