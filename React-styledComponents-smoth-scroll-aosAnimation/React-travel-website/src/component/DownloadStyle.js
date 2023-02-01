import styled from "styled-components";

export const Section = styled.section`
    height: 30rem;
    width: 100%;
    margin: 5rem 0;
    line-height: normal;
    background: linear-gradient(to right, #a6f2f2,#ddf181);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;
    position: relative;
    overflow: hidden;
    .info{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h1{
            font-size: 5rem;
            width: 70%;
        }
        .downloads{
            display: flex;
            gap: 1rem;
            img{
                height: 5rem;
                cursor: pointer;
            }
        }
    }
    .screens{
        height: 25rem;
        position: absolute;
        right: 2rem;
        bottom: -2rem;
    }
    @media (max-width: 900px) {
        flex-direction: column;
        height: max-content;
        gap: 5rem;
        .info{
            padding-top: 5rem;
            align-items: center;
            h1{
                width: 100%;
                text-align: center;
            }
        }
        .screens{
            position: relative;
        }
    }
    @media (max-width:530px) {
         .info{
            h1{
                font-size: 3rem;
            }
            .downloads img{
                    height: 3rem;
            }
        }
    }
`