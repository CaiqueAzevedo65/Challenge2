import './results.css'

function Results() {
    return (
        <>
            <div className="results-image-space">
                <div className='shadow'>
                    <h1 className='display-1 title text-light d-flex justify-content-center align-items-center'>Resultados</h1>
                </div>
            </div>

            <div className='citysearch row mt-5'>
                <div className='city d-flex align-items-center justify-content-center col-lg-4'>
                    <h1 className='title'>Espera Feliz, MG</h1>
                </div>
                <div className='city d-flex align-items-center justify-content-center col-lg-4'>
                    <h1 className='title'>Espera Feliz, MG</h1>
                </div>
                <div className='city align-items-center justify-content col-lg-4'>
                    <h1 className='title'>Espera Feliz, MG</h1>
                </div>
            </div>
        </>
    )
}

export default Results
