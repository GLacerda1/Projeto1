import styled from 'styled-components';

export const ProdutosStyle = styled.section`
  .produtos {
    height:67.7vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
    align-items: start;
    background-size: cover;
  }

  .card {
    border: 1px solid;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card .card-image {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  img{
    width:100px;
    height: 100px;
  }
`;
