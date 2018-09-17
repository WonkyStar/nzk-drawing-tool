import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: ${props => (props.isActive ? '60px' : '50px')};
  height: ${props => (props.isActive ? '60px' : '50px')};
  border-radius: 30px;
  cursor: pointer;
  background-color: ${props =>
    props.isActive ? 'rgba(250,250,250,1)' : 'rgba(250,250,250,0.4)'};

  // what is this doing?
  & > div {
    width: 30px !important;
    height: 30px !important;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
  }

  & > div > svg {
    width: 30px !important;
    height: 30px !important;
  }
`
