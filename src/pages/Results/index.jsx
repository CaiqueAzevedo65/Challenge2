import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import './results.css'
import MapComponent from '../../components/Map';
import GraficoChuva from '../../components/Graphic';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTornado } from '@fortawesome/free-solid-svg-icons'

function Results() {
    return (
        <>
            <div className="results-image-space">
                <div>
                    <div className='header-results navbar'>
                        <div className='Logo ps-5'>
                            <FontAwesomeIcon className="tornado" icon={faTornado} style={{ color: "#a9bddf" }} />
                            <span className="logo text-light">Prevent</span>
                        </div>
                        <ul className='ul1'>
                            <a className='link text-light me-3 pt-' href="">Home</a>
                            <a className='link text-light me-3 pt-' href="">Histórico</a>
                            <a className='link text-light me-3 pt-' href="">Configurações</a>
                        </ul>
                    </div>
                    <div className='shadoww align-items-center d-flex justify-content-center'>
                        <h1 className=' title text-light d-flex'>Resultados</h1>
                    </div>
                </div>
            </div>

            <div className='citysearch row mt-5'>
                <div className='flag-space col-lg-4 d-flex flex-column justify-content-end align-items-center'>
                    <div className='flag'></div>
                    <h5 className='mt-4 mb-5'>Espera Feliz - MG</h5>
                </div>
                <div className='city-text col-lg-8 d-flex justify-content-start align-items-center'>
                    <div className='city-text-space'>
                        <p className='city-presentation'>
                            Localizada na Zona da Mata mineira, na divisa com o Espírito Santo, Espera Feliz possui relevo montanhoso e clima tropical de altitude, com verões chuvosos e invernos amenos. A cidade é cercada por belas paisagens da Mata Atlântica e se destaca na produção de café. Devido ao terreno acidentado e às chuvas intensas, os desastres mais comuns são deslizamentos e enchentes, exigindo atenção constante à prevenção ambiental.
                        </p>
                    </div>
                </div>
            </div>
            <div className='maps-space'>
                <div className='mapint d-flex justify-content-center pt-5 pb-3'>
                    <h5>MAPA INTERATIVO</h5>
                </div>
                <div className='arearisk d-flex justify-content-center pt-5'>
                    <h1>Áreas de Risco</h1>
                </div>
                <div className='d-flex justify-content-center pt-3 pb-5'>
                    <h5>Veja abaixo as regiões com maiores chances de enchentes e deslizamentos de terra.</h5>
                </div>
                <div className='maps d-flex justify-content-center align-items-center'>
                    <div className='map-space shadow'>
                        <MapComponent />
                    </div>
                </div>
            </div>
            <div className='graphic-space'>
                <div className='mapint d-flex justify-content-center pt-5 pb-3'>
                    <h5>GRÁFICO</h5>
                </div>
                <div className='arearisk d-flex justify-content-center pt-5'>
                    <h1>Chuva Mensal em Espera Feliz</h1>
                </div>
                <div className='d-flex justify-content-center pt-3 pb-5'>
                    <h5>Visualize os índices de precipitação ao longo do ano.</h5>
                </div>
                <div className='graphs d-flex justify-content-center align-items-center'>
                    <div className='graph-space'>
                        <GraficoChuva />
                    </div>
                </div>
            </div>
            <div className='recomendations'>
                <div>
                    <h1 className='d-flex justify-content-center pt-5'>Prevenção de Desastres Naturais - Espera Feliz</h1>
                </div>

                <h2 className='d-flex justify-content-center pt-5'>Bairros com Maior Risco</h2>
                <div className='nav d-flex justify-content-center pt-5'>
                    <ul>
                        <a className='neighb text-decoration-none ps-5'><strong>Beira Rio</strong> – Enchentes.</a>
                        <a className='neighb text-decoration-none ps-5'><strong>Morro do Valtair</strong> – Deslizamentos.</a>
                        <a className='neighb text-decoration-none ps-5'><strong>João Clara</strong> – Enchentes.</a>
                        <a className='neighb text-decoration-none ps-5'><strong>Centro</strong> – Enchentes.</a>
                    </ul>
                </div>
                <div className='row pt-5'>
                    <div class="bairro col-lg-3">
                        <h4 className='d-flex justify-content-center'>Beira Rio</h4>
                        <ul className='pt-3'>
                            <li>Evite construir a menos de 30m das margens do rio.</li>
                            <li>Mantenha calhas e bueiros sempre limpos.</li>
                            <li>Tenha um plano de evacuação familiar.</li>
                            <li>Fique atento à elevação do nível do rio.</li>
                        </ul>
                    </div>

                    <div class="bairro col-lg-3">
                        <h4 className='d-flex justify-content-center'>Morro do Valtair</h4>
                        <ul className='pt-3'>
                            <li>Observe trincas, árvores inclinadas e estalos no solo.</li>
                            <li>Evite escavações e cortes em encostas.</li>
                            <li>Não jogue lixo nas ladeiras e córregos.</li>
                            <li>Solicite vistoria da Defesa Civil ao menor sinal de risco.</li>
                        </ul>
                    </div>

                    <div class="bairro col-lg-3">
                        <h4 className='d-flex justify-content-center'>João Clara</h4>
                        <ul className='pt-3'>
                            <li>Mantenha boa drenagem ao redor da casa.</li>
                            <li>Reforce muros de contenção.</li>
                            <li>Evite descarte de lixo em áreas de escoamento.</li>
                            <li>Busque abrigo seguro em chuvas intensas.</li>
                        </ul>
                    </div>

                    <div class="bairro col-lg-3">
                        <h4 className='d-flex justify-content-center'>Centro</h4>
                        <ul className='pt-3'>
                            <li>Evite áreas conhecidas por alagamentos.</li>
                            <li>Não estacione em locais de risco durante tempestades.</li>
                            <li>Saiba rotas seguras para evacuação.</li>
                            <li>Participe de campanhas de prevenção da Defesa Civil.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Results
