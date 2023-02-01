import styled from "styled-components";
export const Container = styled.footer`
.upper-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 2rem;
  gap: 5rem;
  .col {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: var(--secondary-text);
    h2 {
      color: black;
      font-size: 2.5rem;
    }
    .desciption{
        font-size: 2rem;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        font-size: 2rem;
        text-align: left;
        cursor: pointer;
        transition: var(--default-transition);
        &:hover {
          color: var(--primary-color);
        }
      }
    }
    .newsletter {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input {
        padding: 1rem 2rem;
        border: none;
        font-size: 2rem;
        color: white;
        cursor: pointer;
        background-color: #f8f8f8;
      }
    }
  }
}
.lower-footer {
  padding: 2rem 0;
  text-align: center;
  font-size: 1.8rem;
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
}
@media (max-width: 1200px) {
  .upper-footer {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 280px) and (max-width: 768px) {
  margin: 2rem;
  .upper-footer {
    grid-template-columns: 1fr;
  }
}
`;
