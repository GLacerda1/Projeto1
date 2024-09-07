import styled from "styled-components";

export const HomeStyle =styled.section`

.home {
        text-align: center;
        padding: 20px;
        font-family: 'Arial', sans-serif;
        color: var(--color-padrao5);
    }

    .main {
        color: var(--color-padrao4);
        padding: 80px 20px;
        border-radius: 10px;
        margin-bottom: 40px;
        position: relative;
    }

    .main h1 {
        font-size: 3rem;
        margin: 0;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }

    .main p {
        font-size: 1.25rem;
        margin: 20px 0;
        font-weight: 300;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    }

    .info {
        padding: 40px 20px;
        border-radius: 10px;
        max-width: 800px;
        margin: 0 auto;
        color: var(--color-padrao2);
    }

    .info h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: var(--color-padrao4);
    }

    .info p {
        font-size: 1rem;
        color: var(--color-padrao5);
        margin-bottom: 15px;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .hero {
            padding: 60px 20px;
        }
        
        .info {
            padding: 30px 10px;
        }
    }

    @media (max-width: 480px) {
        .main h1 {
            font-size: 2.5rem;
        }

        .main p {
            font-size: 1rem;
        }
        
        .main h2 {
            font-size: 1.5rem;
        }

        .main p {
            font-size: 0.9rem;
        }
    }
`;
