import styled from 'styled-components'

export const Section = styled.section`
    position: relative;
    margin-top: 3rem;
    padding-top: 4rem;

    .img_container{
        height: 80vh;
        width: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content{
        .info{
            position: absolute;
            top: 5rem;
            left: 5rem;
            h1{
                margin-bottom: 2rem;
                font-size: 5rem;
            }
        }
        .planner{
            position: absolute;
            bottom: -3rem;
            right: 0;
            background-color: #fff;
            box-shadow: 0 0  10px rgba(0,0,0,0.5);
            padding: 2.8rem;
            border-radius: 1.5rem;

            form{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3rem;
                .row{
                    display: flex;
                    flex-direction: column;
                    text-align: start;
                    label{
                        font-size: 2rem;
                        color: var(--secondary-text);
                    }
                    input,select{
                        border: none;
                        width: 100%;
                        color: var(--primary-color);
                        margin-top: 1.8rem;
                        background-color: #fff;
                        outline: none;
                        border-bottom: 2px solid #f5ebe9;
                        padding-bottom:0.3rem ;
                        font-size: 1.8rem;
                    }
                    
                }
            }
        }
    }

    @media (max-width: 768px) {
        .img_container {
            height: 70vh;
        }
        .content{
            .planner{
                margin-top: 2rem;
                position: initial;
                justify-content: space-evenly;
                form{
                    flex-wrap: wrap;
                    .row{
                        min-width: 180px;
                        flex: 1;
                    }
                }
            }
            .info{
                top: 8rem;
            }
        }
    }
    @media (max-width: 500px) {
        .img_container {
            height: 40vh;
        }

        .content .info h1{
            font-size: 3rem;
            margin-bottom: 1rem;
        }
    }
`
