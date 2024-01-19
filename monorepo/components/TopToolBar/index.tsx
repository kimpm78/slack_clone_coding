import React from 'react';
import { ResizeTriggers, Separator, Toolbar, TopButton } from './styles';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import AddLinkIcon from '@mui/icons-material/AddLink';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';

const TopToolBar = () => {
  // 機能は未実装
  return (
    <div>
      <Toolbar>
        <div style={{ flexGrow: 1, position: 'relative', margin: '4px' }}>
          <div style={{ width: '0' }}>
            <div style={{ width: '100%', display: 'flex' }}>
              <div>
                <TopButton>
                  <FormatBoldIcon />
                </TopButton>
              </div>
              <TopButton>
                <FormatItalicIcon />
              </TopButton>
              <TopButton>
                <FormatStrikethroughIcon />
              </TopButton>
              <Separator />
              <TopButton>
                <AddLinkIcon />
              </TopButton>
              <Separator />
              <TopButton>
                <FormatListNumberedIcon />
              </TopButton>
              <TopButton>
                <FormatListBulletedIcon />
              </TopButton>
              <Separator />
              <TopButton>
                <FormatAlignLeftIcon />
              </TopButton>
              <Separator />
              <TopButton>
                <CodeIcon />
              </TopButton>
              <TopButton>
                <TerminalIcon />
              </TopButton>
            </div>
          </div>
          <ResizeTriggers>
            <div style={{ background: ' #eee', overflow: 'auto' }}>
              <div style={{ width: '1196px', height: '31px' }}></div>
            </div>
            <div style={{ background: ' #eee', overflow: 'auto' }}></div>
          </ResizeTriggers>
        </div>
      </Toolbar>
    </div>
  );
};

export default TopToolBar;
