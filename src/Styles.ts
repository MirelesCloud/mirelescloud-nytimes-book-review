import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
/* Header */
export const Nav = styled.div`
    background-color: #f7f7f5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

export const NavHeader = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`

export const NavLeft = styled.div`
    width: 33.333%;
    text-align: left;
    font-size: 2em;
    font-weight: 300;

    @media (max-width: 378px) {
        font-size: 1.5em;
      }
`

export const NavCenter = styled.div`
    wdith; 33.333%;
    text-align: center;
    font-size: 2em;
    font-weight: 300;
    @media (max-width: 378px) {
        font-size: 1.5em;
      }
`

export const NavRight = styled.div`
    width: 33.333%;
    text-align: right;
    font-size: 30px;
    font-weight: 300;
`

/* Body */

export const MainContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`

export const ContentWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`
export const Container = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px, auto;
`

export const ImageContainer = styled.div`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(20% - 20px);
    margin: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    @media (max-width: 992px) {
      flex-basis: calc( 33.333% - 20px);
    }

    @media (max-width: 600px) {
      flex-basis: calc(50% - 20px)
    }

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2);
    }
`

export const InfoImage = styled.div`
  padding: 5px 10px;
`

export const Image = styled.img`
    cursor: pointer;
    width: 100%;
`

export const InfoDetails = styled.div`
  display: flex;
`

export const InfoDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
`

export const InfoDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`

export const InfoHeader = styled.h6``;

export const InfoText = styled.p`
  padding: 0px;
  margin: 3px;

`

/* Dropdown */
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
`
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover ${DropdownContent} {
    display: block;
  }
`

export const Select = styled.select`
  width: 200px;
  font-size: 1rem;
`



/* Modal */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`

export const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

export const ModalContainer = styled.div`
  position: relative;
  z-index: 0;
`

export const ModalWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`
export const ModalContent = styled.div`
  position: relative;
  flex-basis: 100%;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in;
  `

export const ModalHeader = styled.h3``

export const ModalSubHeader = styled.h4``

export const ModalText = styled.p`
  padding: 0px;
  margin: 3px;
`
export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.7);
  
`