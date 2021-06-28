/* Global Style */
import styled from 'styled-components'
/* React Icon */
import { AiOutlineSearch } from 'react-icons/ai'
import { BiImageAdd } from 'react-icons/bi'



/* Start MovieList Componenet */
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    div {
        width: 100%;
    }
`;
export const ListView = styled.div`
    margin: 15px;
    position: relative;
    span {
        position: absolute;
        top: 0.5%;
        left: 100px;
        font-size: 17px;
        border: 1px solid #000;
        border-radius: 50%;
        min-width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
    }
`;
export const SearchValue = styled.span `
    font-size: 12px !important;
    border-radius: 15px !important;
    left: 110px !important;
    padding: 0 5px

`
export const ResultMovie = styled.div`
    border: 1px solid #000;
    border-radius: 5px;
    width: 100%;
    div:not(:last-child){
        border-bottom: 1px solid #000;
    }

`;
export const SearchMovie = styled.div`
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    input {
        width: 45%;
        :focus {
            outline: none;
        }
    }
`;
export const SearchIcon = styled(AiOutlineSearch)`
    position: absolute;
    bottom: 21%;
    right: 1%;
    font-size: 1.3em;
`;
export const AddImageIcon = styled(BiImageAdd) `
    font-size: 35px;
    position: relative;
    left: 0.5%;
`;
/* End MovieList Componenet */

/* Start MovieItem Componenet */
export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    p {
        width: 70%;
        cursor: pointer;
    }
    img {
        width: 20%;
        margin-right: 15px;
    }
`;
export const ActionTools = styled.section`
    display: flex;
    justify-content: flex-end;
`
/* End MovieItem Componenet */