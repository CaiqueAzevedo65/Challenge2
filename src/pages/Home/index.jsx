import "./main.css"
import Header from '../../components/Header/header'
import Footer from "../../components/Footer/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTornado } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faMountain } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <>
            <div className='Image'>
                <div className='shadow'></div>
            </div>
            <Header/>
            <div className='Welcome row'>
                <h1 className='pt-5 mt-5 pb-5 mb-3 display-1 text-primary'>Bem vindo ao nosso sistema</h1>
            </div>
            <div className='Presentation text-center row'>
                <div className='icons col-lg-4'>
                    <div className='icons-space1'>
                        <FontAwesomeIcon className='fire' icon={faFire} style={{ color: "#d25019", }} />
                    </div>
                </div>
                <div className='icons col-lg-4'>
                    <div className='icons-space2'>
                        <FontAwesomeIcon className='water' icon={faCloudRain} style={{ color: "#3387e1", }} />
                    </div>
                </div>
                <div className='icons col-lg-4'>
                    <div className='icons-space3'>
                        <FontAwesomeIcon className='earth' icon={faMountain} style={{ color: "#755600", }} />
                    </div>
                </div>
            </div>
            <div className='Ptext text-center row mb-5 mt-5'>
                <div className='ptext-space col-lg-4'>
                    <p>
                        Acompanhe focos de incêndio em tempo real, receba alertas sobre áreas de risco e visualize mapas atualizados com dados de queimadas em sua região.
                    </p>
                </div>
                <div className='ptext-space col-lg-4'>
                    <p>
                        Monitore o volume de chuvas, identifique regiões com risco de alagamento e receba notificações antecipadas para se preparar ou evacuar em segurança.
                    </p>
                </div>
                <div className='ptext-space col-lg-4'>
                    <p>
                        Fique informado sobre áreas com solo instável, índices de saturação do terreno e previsões que indicam risco de deslizamentos, com base em dados climáticos e geográficos.
                    </p>
                </div>
            </div>
            <div className='project row'>
                <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                    <div className='project-text'>
                        <div>
                            <span className='display-5'>Sobre o Projeto</span>
                            <p className='mt-4 mb-4'>
                                Descubra como nasceu o Prevent, um sistema pensado para monitorar riscos ambientais e proteger comunidades. Conheça os desenvolvedores por trás da ideia, as tecnologias utilizadas e o impacto que buscamos causar.
                            </p>
                            <button className='btn btn-primary'>Veja mais</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 d-flex align-items-center'>
                    <div className='image2'>
                    </div>
                </div>
            </div>
            <div className='pitch row'>
                <div className='col-lg-6'>
                    <p>

                    </p>
                </div>
                <div className='col-lg-6'>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home