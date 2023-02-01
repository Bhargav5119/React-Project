import styled from "styled-components";

export const Section = styled.section`
    margin-top: 2rem;
    padding-top: 7rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;

    .image{
        flex: 1 1 40rem;
        img{
            margin: 0 auto;
            width: 90%;
            object-fit: cover;
        }

    }
    .content{
        padding: 3rem;
        flex: 1 1 40rem;
        align-self: flex-start;
        .title{
            h1{
                font-size: 3rem;
            }
        }
        .list{
            list-style: none;
            li{
                display: flex;
                gap: 4rem;
                align-items: center;
                margin: 3rem 0;
                .icon{
                    padding: 1rem;
                    border-radius: 1rem;
                    display: grid;
                    place-items: center;
                    font-size: 2rem;
                }
                .red{
                    background-color: #ff3010aa;
                    color: #fff;
                }
                .yellow{
                    background-color: #ffc01e55;
                    color: #ffc01e;
                }
                .green{
                    background-color: #65ce5455;
                    color: #65ce54;
                }
                .text{
                    font-size: 1.8rem;
                }
            }
        }
    }
    @media (max-width:768px) {
        padding-top: 3rem;
    }
` 