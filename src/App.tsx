import React, { Fragment,  useState, useEffect, useMemo } from 'react';
import {Service, ICategory, IBooks} from './Types'
import { 
  GlobalStyle,
  PageContainer,
  Nav, 
  NavHeader, 
  NavLeft, 
  NavCenter, 
  NavRight, 
  MainContainer, 
  ContentWrapper, 
  ImageContainer, 
  Image,
  ModalWrapper,
  ModalContainer, 
  ModalContent, 
  ModalHeader, 
  ModalSubHeader, 
  ModalText,
  Row,
  Column,
  Line, 
  Select,
  Footer,
  } from './Styles'
import { Modal, ModalProvider } from './Modal'

import './App.css';

const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;

const App: React.FC = () => {
  const [ result, setResult ] = useState<Service<ICategory>>({
    status: 'loading'
  })
  const [book, setBooks] = useState<string>("hardcover-nonfiction")

  let today = new Date();
  let date = today.getFullYear()+'-'+('0'+(today.getMonth()+1)).slice(-2)+'-'+("0"+today.getDate()).slice(-2)
  
  useMemo(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/${date}/${book}.json?api-key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setResult({ status: 'loaded', payload: response})
        console.log(response)
      })
      .catch(error => setResult({ status: 'error', error}))
  }, [book, date])

  return (
    <Fragment>
      <GlobalStyle/>
      <PageContainer>
          <Nav>
            <NavHeader>
              <NavLeft></NavLeft>
              <NavCenter>NY Times Bestsellers</NavCenter>
              <NavRight></NavRight>
            </NavHeader>
          </Nav>
          <MainContainer>
              <Select value={book} onChange={( e: React.ChangeEvent<HTMLSelectElement>, ): void => setBooks(e.target.value)} >
                <option value="hardcover-nonfiction">Non-Fiction</option>
                <option value="combined-print-and-e-book-nonfiction">Combined Print and E-Book Non-Fiction</option>
                <option value="paperback-nonfiction">Paperback Non-Fiction</option>
                <option value="advice-how-to-and-miscellaneous">Advice, How-to & Misc.</option>
              </Select>
              <Select value={book} onChange={( e: React.ChangeEvent<HTMLSelectElement>, ): void => setBooks(e.target.value)}>
                <option value="hardcover-fiction">Fiction</option>
                <option value="combined-print-and-e-book-fiction">Combined Print and E-Book Fiction</option>
                <option value="trade-fiction-paperback">Paperback Trade Fiction</option>
              </Select >
              <Select value={book} onChange={( e: React.ChangeEvent<HTMLSelectElement>, ): void => setBooks(e.target.value)}>
                <option value="childrens-middle-grade-hardcover">Children's</option>
                <option value="picture-books">Children's Picture Books</option>
                <option value="series-books">Children's Series</option>
                <option value="young-adult-hardcover">Young Adult Hardcover</option>
              </Select >
              <ModalProvider>
                <ContentWrapper>
                  {result.status === 'loaded' && result.payload.results.books.map(idx => (
                  <ImageContainer key={idx.rank}>
                    <Books rank={idx.rank} title={idx.title} author={idx.author} book_image={idx.book_image} description={idx.description} book_review_link={idx.book_review_link}/>
                  </ImageContainer>
                ))}
                </ContentWrapper>
              </ModalProvider>
          </MainContainer>
        <Footer/>
      </PageContainer>
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
            <ModalContainer>
              <Row>
                <Column>
                  <ModalContent>
                    <Image src={book_image} alt={title}/>
                  </ModalContent>
                </Column>
                <Column>
                  <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalSubHeader>By {author}</ModalSubHeader>
                    <ModalSubHeader>NY Times Rank No. {rank}</ModalSubHeader>
                    <ModalText>{description}</ModalText>
                    <ModalText><a href={book_review_link} target="_blank" rel="noopener noreferrer" >Review</a></ModalText>
                  </ModalContent>
                </Column>
              </Row>
              <Line/>
            </ModalContainer>
          </ModalWrapper>
        </Modal>}
    </>
  )
}
export default App;
