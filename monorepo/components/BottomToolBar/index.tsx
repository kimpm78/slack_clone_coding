import React, { FC } from 'react';
import { BottomButton, Separator } from './styles';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import FolderOffOutlinedIcon from '@mui/icons-material/FolderOffOutlined';

const BottomToolBar: FC = () => {
  return (
    <div role="toolbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ alignItems: 'center', display: 'flex', paddingLeft: '0', paddingRight: '0', margin: '4px' }}>
        <BottomButton>
          <AddCircleIcon />
        </BottomButton>
        <BottomButton>
          <TextFormatIcon />
        </BottomButton>
        <BottomButton>
          <SentimentSatisfiedAltIcon />
        </BottomButton>
        <BottomButton>
          <AlternateEmailOutlinedIcon />
        </BottomButton>
        <Separator />
        <BottomButton>
          <VideoCallOutlinedIcon />
        </BottomButton>
        <BottomButton>
          <KeyboardVoiceOutlinedIcon />
        </BottomButton>
        <Separator />
        <BottomButton>
          <FolderOffOutlinedIcon />
        </BottomButton>
      </div>
    </div>
  );
};

export default BottomToolBar;
