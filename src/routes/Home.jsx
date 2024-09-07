import { HomeStyle } from '../css/HomeStyle';

const Home = () => {
    return (
        <HomeStyle>
            <section className="home">
                <div className="main">
                    <h1>Bem-vindo ao Mundo dos Esportes!</h1>
                    <p>Explore nossa seleção para todos os esportes e encontre o que você precisa.</p>
                </div>
                <div className="info">
                    <h2>Sobre Nós</h2>
                    <p>Na nossa loja, acreditamos que o esporte é para todos. Oferecemos uma ampla gama de equipamentos e acessórios para todos os tipos de esportes, com um atendimento amigável e especializado.</p>
                    <p>Nosso objetivo é ajudar você a alcançar suas metas esportivas e a se divertir ao máximo!</p>
                </div>
            </section>
        </HomeStyle>
    );
}

export default Home;
