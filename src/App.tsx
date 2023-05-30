import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@uppy/core/dist/style.min.css';
import styled from 'styled-components';
import { SpeedDial, SpeedDialIcon } from '@mui/material';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Uppy from '@uppy/core';
import { DragDrop } from '@uppy/react';
import ThumbnailGenerator from '@uppy/thumbnail-generator';
import Map from './Map';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const MapWrapper = styled(Map)`
  height: 800px;
  width: 100%;
`;

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function App() {
  const [preview, setPreview] = useState<string | null>(null);
  const uppy = new Uppy().use(ThumbnailGenerator).on('thumbnail:generated', (file, preview) => {
    console.log(file, preview);
    setPreview(preview);
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>This is a title</Title>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DragDrop uppy={uppy} onDrop={e => console.log(e)} />
        {preview && <img src={preview}></img>}
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </header>
      <MapWrapper></MapWrapper>
    </div>
  );
}

export default App;
