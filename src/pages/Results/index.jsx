import './results.css';
import MapComponent from '../../components/Map';
import GraficoChuva from '../../components/Graphic';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registre os componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const cityData = {
    "Espera Feliz": {
        flag: '/public/images/Espera_Feliz_MG.svg.png',
        description: `Localizada na Zona da Mata mineira, na divisa com o Espírito Santo, Espera Feliz possui relevo montanhoso e clima tropical de altitude, com verões chuvosos e invernos amenos. A cidade é cercada por belas paisagens da Mata Atlântica e se destaca na produção de café. Devido ao terreno acidentado e às chuvas intensas, os desastres mais comuns são deslizamentos e enchentes, exigindo atenção constante à prevenção ambiental.`,
        neighborhoods: [
            { name: 'Beira Rio', risk: 'Enchentes', tips: ['Evite construir a menos de 30m das margens do rio.', 'Mantenha calhas e bueiros sempre limpos.', 'Tenha um plano de evacuação familiar.', 'Fique atento à elevação do nível do rio.'] },
            { name: 'Morro do Valtair', risk: 'Deslizamentos', tips: ['Observe trincas, árvores inclinadas e estalos no solo.', 'Evite escavações e cortes em encostas.', 'Não jogue lixo nas ladeiras e córregos.', 'Solicite vistoria da Defesa Civil ao menor sinal de risco.'] },
        ],
        tragedies: {
            labels: ['Enchentes', 'Deslizamentos', 'Outros'],
            data: [40, 30, 10],
        },
    },
    "São Paulo": {
        flag: '/public/images/Sao_Paulo_Flag.png',
        description: `São Paulo é a maior cidade do Brasil, com clima subtropical e chuvas concentradas no verão. A cidade enfrenta desafios como enchentes em áreas urbanas e deslizamentos em regiões periféricas. A infraestrutura urbana e a densidade populacional tornam a prevenção essencial.`,
        neighborhoods: [
            { name: 'Vila Mariana', risk: 'Enchentes', tips: ['Evite áreas baixas durante chuvas intensas.', 'Mantenha bueiros limpos.', 'Tenha um plano de evacuação.', 'Evite estacionar em áreas de risco.'] },
        ],
        tragedies: {
            labels: ['Enchentes', 'Deslizamentos', 'Outros'],
            data: [50, 20, 15],
        },
    },
    "Rio de Janeiro": {
        flag: '/public/images/Rio_de_Janeiro_Flag.png',
        description: `O Rio de Janeiro é conhecido por seu relevo montanhoso e clima tropical. A cidade enfrenta enchentes em áreas baixas e deslizamentos em encostas. A prevenção é crucial para minimizar os impactos dos desastres naturais.`,
        neighborhoods: [
            { name: 'Copacabana', risk: 'Enchentes', tips: ['Evite áreas alagadas.', 'Mantenha calhas limpas.', 'Tenha um plano de evacuação.', 'Evite estacionar em áreas de risco.'] },
        ],
        tragedies: {
            labels: ['Enchentes', 'Deslizamentos', 'Outros'],
            data: [60, 25, 5],
        },
    },
};

function Results() {
    const { city } = useParams();
    const cityInfo = cityData[city] || cityData["Espera Feliz"]; // Default to Espera Feliz if city not found

    // Dados do gráfico
    const chartData = {
        labels: cityInfo.tragedies.labels,
        datasets: [
            {
                data: cityInfo.tragedies.data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <>
            <div className="container-fluid px-4">
                {/* Header */}
                <div className="results-image-space mb-5">
                    <div className="header-results navbar d-flex justify-content-between align-items-center">
                        <div className="Logo ps-3">
                            <FontAwesomeIcon className="tornado" icon={faTornado} style={{ color: "#a9bddf" }} />
                            <span className="logo text-light ms-2">Prevent</span>
                        </div>
                        <ul className="ul1 d-flex">
                            <a className="link text-light me-3" href="/">Home</a>
                        </ul>
                    </div>
                    <div className="shadoww text-center py-4">
                        <h1 className="title text-light">{city}</h1>
                    </div>
                </div>

                {/* City Information Section */}
                <div className="section-container mb-5">
                    <div className="citysearch row align-items-center">
                        <div className="flag-space col-lg-4 text-center">
                            <div className="flag mx-auto" style={{ backgroundImage: `url(${cityInfo.flag})` }}></div>
                            <h5 className="mt-4">{city}</h5>
                        </div>
                        <div className="city-text col-lg-8">
                            <p className="city-presentation">{cityInfo.description}</p>
                        </div>
                    </div>
                </div>

                {/* Tragedy Chart Section */}
                <div className="section-container mb-5">
                    <h2 className="text-center mb-4">Gráfico de Tragédias</h2>
                    <div className="d-flex justify-content-center">
                        <div className="chart-container">
                            <Doughnut data={chartData} />
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="section-container mb-5">
                    <div className="text-center mb-4">
                        <h5>MAPA INTERATIVO</h5>
                    </div>
                    <div className="arearisk text-center mb-4">
                        <h1>Áreas de Risco</h1>
                    </div>
                    <div className="maps d-flex justify-content-center">
                        <div className="map-space shadow">
                            <MapComponent />
                        </div>
                    </div>
                </div>

                {/* Neighborhoods Section */}
                <div className="section-container mb-5">
                    <h2 className="text-center mb-4">Bairros com Maior Risco</h2>
                    <div className="row g-4">
                        {cityInfo.neighborhoods.map((neighborhood, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="card shadow-sm h-100">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{neighborhood.name}</h4>
                                        <h6 className="text-center text-danger">Risco: {neighborhood.risk}</h6>
                                        <ul className="pt-3">
                                            {neighborhood.tips.map((tip, i) => (
                                                <li key={i}>{tip}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Results;