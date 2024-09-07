import { SobreStyle } from '../css/SobreStyle';
import fimtech from '../assets/fimtech.png';

const Sobre = () => {
    return (
        <SobreStyle>
            <section className='sobre'>
                <div>
                    <img src={fimtech} alt="fimtech" />
                    <p>
                        Musculação: Sua Jornada de Força com a Fimtech
                        Na Fimtech, acreditamos que a musculação é mais do que um treino — é uma jornada de autodescoberta e fortalecimento, tanto do corpo quanto da mente. Queremos ser seus parceiros nessa caminhada, oferecendo tudo o que você precisa para alcançar seus objetivos, sejam eles ganho de força, definição muscular, ou simplesmente sentir-se bem consigo mesmo. Nossa loja é o destino certo para quem busca qualidade e variedade em equipamentos de musculação. Desde halteres ajustáveis e kettlebells até estações de treino multifuncionais, temos uma ampla gama de produtos projetados para atender todas as suas necessidades, seja para um treino em casa ou na academia. Além disso, contamos com uma equipe de especialistas sempre pronta para ajudar você a escolher o equipamento ideal, de acordo com o seu perfil e suas metas. Na Fimtech, também sabemos que o esporte é para todos, independentemente do nível de experiência ou da modalidade praticada. Por isso, nossos produtos são pensados para garantir conforto, segurança e performance, do iniciante ao atleta avançado. Acreditamos que o esporte é uma ferramenta poderosa para transformar vidas, e queremos fazer parte da sua transformação. Venha conhecer nossa linha completa de equipamentos e acessórios para musculação, e descubra como a Fimtech pode ajudar você a atingir seu próximo nível.
                    </p>
                </div>
            </section>
        </SobreStyle>
    );
}

export default Sobre;
