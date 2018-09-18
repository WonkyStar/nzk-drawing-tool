import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: ${props => (props.isActive ? '70px' : '50px')};
  height: ${props => (props.isActive ? '70px' : '50px')};
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.5);

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
