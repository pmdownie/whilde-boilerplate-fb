import styled from 'styled-components'

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 6rem;
    padding: 0 3rem;

    .right {
        justify-self: end;
    }
`

export default StyledHeader
