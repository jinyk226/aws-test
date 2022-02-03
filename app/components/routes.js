import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UploadFile from './uploadFile'
import ColorThief from './colorThief'
import styled from 'styled-components'

const MainDiv = styled.div`
  padding: 3em
`

function routes() {
  return (
    <Router>
      <MainDiv>
        <Routes>
          <Route path='/' element={<UploadFile />} />
          <Route path='/color-thief' element={<ColorThief />} />
        </Routes>
      </MainDiv>
    </Router>
    );
}

export default routes;
