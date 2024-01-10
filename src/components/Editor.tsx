import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import { Button } from '@nextui-org/react';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('# Hello Editor');

  const addNewContent = async () => {
    
  }

  return <div>
        <MdEditor modelValue={text} onChange={setText} />;
        <Button >Create New Content</Button>
  </div>
  
};