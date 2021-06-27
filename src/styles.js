import styled from 'styled-components'

/* Start MovieList Componenet */
export const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    width: 60%;
    div {
        width: 100%;
    }

`;
export const ListView = styled.div `
    margin: 15px
`;
export const ResultMovie = styled.div `
    border: 1px solid #000;
    border-radius: 10px;
    width: 100%;
    div:not(:last-child) {
        border-bottom: 1px solid red ;
        margin-bottom: 10px;
    }
`;
export const SearchMovie = styled.div `
    display: flex;
    flex-direction: row-reverse;
`;
/* End MovieList Componenet */