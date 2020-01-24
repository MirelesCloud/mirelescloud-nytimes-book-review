import React, { Fragment,  useState, useEffect } from 'react';
import {Service, ICategory, IBooks} from './Types'
import { GlobalStyle, MainContainer, ContentWrapper, Container, ImageContainer, Image, ModalWrapper, ModalContent } from './Styles'
import { Modal, ModalProvider } from './Modal'

import './App.css';

const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;

const App: React.FC = () => {
  const [ result, setResult ] = useState<Service<ICategory>>({
    status: 'loading'
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setResult({ status: 'loaded', payload: response})
        console.log(response)
      })
      .catch(error => setResult({ status: 'error', error}))

  }, [])

  return (
    <Fragment>
      <GlobalStyle/>
      <MainContainer>
        <Container>
          <ModalProvider>
            <ContentWrapper>
              {result.status === 'loaded' && result.payload.results.books.map(idx => (
              <ImageContainer key={idx.rank}>
                <Image src={idx.book_image} alt={idx.title} onClick={() => setIsModalOpen(true)}/>
                
              </ImageContainer>
              
            ))}
            </ContentWrapper>
          </ModalProvider>
        </Container>
      </MainContainer>
    </Fragment>
  );
}

const Books: React.FC<IBooks> = ({rank, title, author, book_image}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Image src={book_image} alt={title}/>
      {isModalOpen && <Modal>
          <ModalWrapper>
            <ModalContent>
              <h1>title</h1>
            </ModalContent>
          </ModalWrapper>
        </Modal>}
    </>
    
  )
}
export default App;
