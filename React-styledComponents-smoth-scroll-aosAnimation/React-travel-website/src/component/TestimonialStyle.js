import styled from "styled-components";

export const Section = styled.section`
    margin-top: 3rem;
    padding-top: 7rem;

    .main_title{
        font-size: 2.5rem;
        text-align: center;
    }
    .testimonials{
        display: flex;
        gap: 4rem;
        align-items: center;
        .testimonial-image-two,.testimonial-image-one{
            flex: 1;
            img{
                width: 100%;
            }
        }
        .testimonial{
            flex: 1.5;
            margin-top:4rem;
            padding: 4rem 3rem;
            height: max-content;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            box-shadow: 0 0 20px rgba(0,0,0,0.2);
            border-top: 0.5rem solid var(--primary-color);
            .title{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                .image{
                    img{
                        height: 4rem;
                    }
                }
                .info{
                    h3{font-size:2.3rem;}
                    span{
                        color: var(--primary-color);
                        font-size: 1.8rem;
                    }
                }
            }
            .description{
                font-size: 1.8rem;
                text-align: center;
                line-height: 2.5rem;
            }
        }
    }
    @media (max-width:768px) {
        padding-top: 3rem;
        .testimonials{
            flex-direction: column;
            .testimonial-image-one,.testimonial-image-two {
                text-align: center;
                img{
                width: 80%;
            } }
            .testimonial{
                margin-top: 0;
            }
        }
    }
`