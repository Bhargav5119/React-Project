import styled from "styled-components"

export const Nav = styled.div`
    padding: 1rem 7%;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    @media (max-width:1200px) {
        padding: 1rem 2rem;
    }
    
    .logo{
        width: 150px;
        cursor: pointer;
        img{
            width: 100%;
        }
    }
    .toggle{
        display: none;
    }
    .links {
        display: flex;
        align-items: center;
        gap: 3rem;
        ul{
            list-style: none;
            display: flex;
            gap: 3rem;
            a{
                text-decoration: none;
                color: #000;
                cursor: pointer;
                font-size: 2rem;
                transition: all 0.5s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
        .active{
            color: red;
        }
    }
    .account_info{
            display: flex;
            gap: 2rem;
            align-items: center;
            font-size: 2rem;
            .account{
                display: flex;
                gap: 0.5rem;
                align-items: center;
                cursor: pointer;
            }
            .search{
                cursor: pointer;
            }
    }
    @media (max-width: 768px) {
        .logo{

        }
        .account_info{
            display: none;
        }
        .toggle{
            display: inline-block;
            font-size: 2rem;
            cursor: pointer;
        }
        .links ul{
            position: absolute;
            top: 100%;
            right: -100%;
            height: 100vh;
            flex-direction: column;
            background-color: #fff;
            padding: 2rem;
            width: 300px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            transition: all 0.5s ease-in-out;
            &.active{
                right: 0;
            }
        }
    }
`
