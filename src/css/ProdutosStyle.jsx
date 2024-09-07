import styled from 'styled-components';

export const ProdutosStyle = styled.section`
  .produtos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 100px;
    justify-items: center;
    align-items: start;
  }

  .card {
    border: 1px solid;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 210px;
    box-sizing: border-box;
    margin-top:50px;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card .card-image {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
