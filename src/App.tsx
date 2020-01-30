import React, { Fragment,  useState, useEffect, useMemo } from 'react';
import {Service, ICategory, IBooks} from './Types'
import { GlobalStyle, Nav, NavHeader, NavLeft, NavCenter, NavRight, MainContainer, ContentWrapper, Container, ImageContainer, Image, ModalWrapper, ModalContent, ModalHeader, ModalSubHeader, ModalText, Line, Select } from './Styles'
import { Modal, ModalProvider } from './Modal'

import './App.css';

const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;

const App: React.FC = () => {
  const [ result, setResult ] = useState<Service<ICategory>>({
    status: 'loading'
  })
  const [book, setBooks] = useState<string>("nonfiction")
  const [select] = useState([
    {label: "Fiction", value: "fiction"},
    {label: "Non-Fiction", value: "nonfiction"}
  ])
  console.log(select)

  useMemo(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-${book}.json?api-key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setResult({ status: 'loaded', payload: response})
        console.log(response)
      })
      .catch(error => setResult({ status: 'error', error}))

  }, [book])



  return (
    <Fragment>
      <GlobalStyle/>
      <Nav>
        <NavHeader>
          <NavLeft>MirelesCloud</NavLeft>
          <NavCenter></NavCenter>
          <NavRight>NY Times Bestsellers</NavRight>
        </NavHeader>
      </Nav>
      <MainContainer>
        <Container>
          <select>
            {select.map(item => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
          <Select value={book} onChange={( e: React.ChangeEvent<HTMLSelectElement>, ): void => setBooks(e.target.value)} >
            
            <option value="nonfiction">Non-Fiction</option>
            <option value="fiction">Fiction</option>
          </Select>
          <ModalProvider>
            <ContentWrapper>
              {result.status === 'loaded' && result.payload.results.books.map(idx => (
              <ImageContainer key={idx.rank}>
                <Books rank={idx.rank} title={idx.title} author={idx.author} book_image={idx.book_image} description={idx.description} book_review_link={idx.book_review_link}/>
              </ImageContainer>
            ))}
            </ContentWrapper>
          </ModalProvider>
        </Container>
      </MainContainer>
    </Fragment>
  );
}

const Books: React.FC<IBooks> = ({rank, title, author, book_image, description, book_review_link}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Image src={book_image} alt={title} onClick={() => setIsModalOpen(true)}/>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
          <ModalWrapper>
            <ModalContent>
              <Image src={book_image} alt={title}/>
              <ModalHeader>{title}</ModalHeader>
              <ModalSubHeader>By {author}</ModalSubHeader>
              <ModalSubHeader>NY Times Rank {rank}</ModalSubHeader>
              <ModalText>{description}</ModalText>
              <ModalText><a href={book_review_link} target="_blank" rel="noopener noreferrer" >Review</a></ModalText>
              <Line/>
            </ModalContent>
          </ModalWrapper>
        </Modal>}
    </>
    
  )
}
export default App;
