import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import styled from 'styled-components'

class Resume extends Component {
  state = {
    pageNumber: 1,
  }

  render() {
    const { pageNumber } = this.state

    return (
      <Container>
        <DocumentContainer>
          <Document
            file="../../Resume.pdf"
            onLoadSuccess={this.onDocumentLoad}
            loading="My resume is rendering, thank you for your patience!"
          >
            <Page pageNumber={pageNumber} renderMode="svg" />
          </Document>
        </DocumentContainer>
      </Container>
    )
  }
}

export default Resume

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  height: 400px;
  transform: scale(1.6);
`

const DocumentContainer = styled.div`
  @media (max-width: 800px) {
    transform: scale(0.9);
    margin: -30px 20px;
  }

  @media (max-width: 700px) {
    transform: scale(0.8);
    margin: -30px 20px;
  }
`
