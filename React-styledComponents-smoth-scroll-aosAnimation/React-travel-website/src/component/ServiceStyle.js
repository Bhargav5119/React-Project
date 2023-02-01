import styled from "styled-components";

export const Section = styled.section`
    padding-top: 7rem;
    margin-top: 2rem;

    .services{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(21rem,1fr));
        gap: 2rem;

        .service{
            text-align: center;
            padding: 1.5rem 2rem;
            background-color: var(--card-gray);
            border-radius: 1rem;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
            transition: all 0.5s ease-in-out;
            img{
                width: 120px;
                height: 120px;
                object-fit: cover;
            }
            h3{
                margin-top: 1rem;
                font-size: 2rem;
                color: var(--primary-text);
            }
            p{
                margin-top: 0.5rem;
                font-size: 1.2rem;
                color: var(--secondary-text);
            }
            &:hover{
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
            }
        }
    }
    @media (max-width:768px) {
        padding-top: 3rem;
    }
`