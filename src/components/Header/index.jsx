import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTornado } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {

    return (
        <header className="header">
            <div className="row">
                <div className="col-lg-3 logospace d-flex justify-content-center align-items-center">
                    <div className='Logo ms-5'>
                        <FontAwesomeIcon className="tornado" icon={faTornado} style={{ color: "#a9bddf" }} />
                        <span className="logo text-light">Prevent</span>
                    </div>
                </div>
                <div className="searchspace col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="search ms-4">
                        <input type="text" id="searchinput" placeholder="Pesquisar" />
                        <label for="">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </label>
                    </div>
                </div>
                <div className="dropdown hover-dropdown col-lg-3 d-flex align-items-center">
                    <button className="btn dropdown-toggle-no-caret" type="button" id="menuDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon className="bars text-light" icon={faBars} />
                    </button>
                    <ul className="dropdown-menu custom-dropdown" aria-labelledby="menuDropdown">
                        <li>
                            <a className="dropdown-item" href="#">Histórico</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Formulário</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Configurações</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header