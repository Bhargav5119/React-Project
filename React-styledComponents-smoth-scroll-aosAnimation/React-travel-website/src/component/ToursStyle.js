import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    margin-top: 2rem;
    padding-top: 5rem;
    margin-bottom: 2rem;

    .ellipse{
        position: absolute;
        top: -15rem;
        left: 50%;
        transform: translateX(-50%);
    }
    h2{
        text-align: center;
        font-size: 3rem;
        margin-bottom: 3rem;
    }
    .tours{
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 14rem;

        .tour{
            position: relative;
            &:nth-child(2){
                transform: translateY(-10rem);
            }
            .image{
                >img{
                    width: 100%;
                    object-fit: cover;
                    height: 35rem;
                }
                .vectors{
                    .vector1{
                        position: absolute;
                        height: 9rem;
                        top: 0;
                        left: -10rem;
                    }
                    .vector2{
                        position: absolute;
                        height: 9rem;
                        top: 0;
                        right: -9rem;
                    }
                }
            }
            .info{
                position: absolute;
                bottom: -30px;
                right: 0;
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                gap: 1rem;
                /* width: 80%; */
                box-shadow: 0 0 5px rgba(0,0,0,0.2);
                button{
                    padding: 0.5rem 0.8rem;
                    background-color: var(--primary-color);
                    border: none;
                    font-size: 1.5rem;
                    color: #fff;
                    cursor: pointer;
                    outline: none;
                    border-radius: 0.3rem;
                    transition: all 0.5s;
                    &:hover{
                        opacity: 0.8;
                    }
                }
            .details>h4{
                font-size: 1.5rem;
            }
            .price-details{
                margin-top: 1rem;
                display: flex;
                gap: 1.5rem;
                .price{
                    color: var(--primary-color);
                    font-size: 1.5rem;
                    font-weight: bolder;
                }
                .review{
                    display: flex;
                    align-items: center;
                }
                .stars>svg{
                    color: #ffc01e;
                    margin-right: 0.5rem;
                }
                .review-text{                   
                    font-size: 1.5rem;
                }
            }
            }
        }        
    }
    @media (max-width: 768px) {
        padding-top: 3rem;
        .ellipse{
            display: none;
        }
        .tours{
            margin-top: 0;
            flex-wrap: wrap;
            /* flex-direction: column; */
            gap: 5rem;
            .tour{
                min-width: 250px;
                &:nth-child(2){
                    transform: translateY(0);
                }
                .vectors{
                    display: none;
                }
                .info{
                    width: 90%;
                    button{
                        display: none !important;
                    }
                }
            }
        }
    }
    @media (max-width: 500px) {
         .tours .tour 
         {
            .image {
                text-align: center;
                img{
                    max-inline-size: 100%;
                    
            }}
            .info{
                width: 80%;
                left: 10%;
                .price-details{
                    justify-content: space-evenly;
                    .review-text{
                        margin-left: 2rem;
                    }
                }
            }
            .details{
            flex: 1;
            h4{
                text-align: center;
            }
         }
         }

    }
`