import { SobreStyle } from '../css/SobreStyle';
import fimtech from '../assets/fimtech.png'

const Sobre = () => {
    return (
        <SobreStyle>
            <section className='sobre'>
                <div>
                    <img src={fimtech} alt="fimtech" />
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Eum vitae neque quidem deserunt necessitatibus 
                        ad sapiente impedit nulla, fuga dolores molestias 
                        dolorum repudiandae consequatur, sint ab consequuntur praesentium suscipit provident!
                    </p>
                </div>
            </section>
        </SobreStyle>
    );
}

export default Sobre; 