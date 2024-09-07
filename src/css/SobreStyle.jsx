import styled from 'styled-components';

export const SobreStyle = styled.div`
  .sobre {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;

    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
    }

    p {
      max-width: 800px;
      line-height: 1.6;
      margin-bottom:50px;
      font-size:18px;
    }
  }
`;
