import styled from "styled-components";

export const Section = styled.section`
    margin-top: 2rem;
    padding-top: 7rem;
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    align-items: center;



    .info{
        flex: 1 1 32rem;
        h2{
            font-size: 3rem;
            line-height: 3rem;
            margin-bottom: 3rem;
            span{
                color: var(--primary-color);
            }
        }
        p{
            color: var(--secondary-text);
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }
        @media (max-width:768px) {
        flex: 0 0 100%;
    }
    }
    .destinations{
        flex: 3 3 31rem;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(18rem,1fr));
        gap: 2rem;

        .destination{
            position: relative;
            .image{
                height: 25rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .name{
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, #ffffff14, #000000ae);
                display: flex;
                flex-direction: column-reverse;
                h3{
                    margin-left: 1rem;
                    font-size: 2rem;
                    color: #fff;
                    margin-bottom: 1rem;
                }
            }
        }
    }
    @media (max-width:768px) {
        padding-top: 3rem;
    }
`