import React, {useEffect, useState} from 'react';
import { FiTrash } from "react-icons/fi";
import './styles.css';
import Filters from '../../Filters';
import api from '../../services/api';

export default function Funds(){
    const [funds, setFunds] = useState([])

    useEffect(() => {
        api.get('funds').then(response => {
            console.log("entao...")
            setFunds(response.data);
        })
    }, [])
    return(
    <div>
        <Filters/>
        <table className="purpleTable">
            <thead>
                <tr>
                    <th>Remover</th>
                    <th>Código</th>
                    <th>Setor</th>
                    <th>Preço</th>
                    <th>Liquidez</th>
                    <th>Ultimo div</th>
                    <th>DY</th>
                    <th>DY 12 média</th>
                    <th>P/VPA</th>
                    <th>Rentabilidade Total</th>
                    <th>Vacância física</th>
                    <th>Vacância financeira</th>
                    <th>Qtde Ativos</th>
                </tr>
            </thead>
            <tbody>
                {funds.map(fii => (
                  <tr>
                      <td><FiTrash/></td>
                    <td>{fii.codigo}</td>
                    <td>{fii.setor}</td>
                    <td>{fii.precoAtual}</td>
                    <td>{fii.liquidez}</td>
                    <td>{fii.dividendo}</td>
                    <td>{fii.dy}</td>
                    <td>{fii.dy12Media}</td>
                    <td>{fii.pvpa}</td>
                    <td>{fii.rentabilidadeTotal}</td>
                    <td>{fii.vacanciaFisica}</td>
                    <td>{fii.vacanciaFinanceira}</td>
                    <td>{fii.qtdeAtivos}</td>
                </tr>  
                ))}               
              
            </tbody>
        </table>
        </div>
    );
}