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
        <Filters className="filters"/>
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
                    <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                        .format(fii.precoAtual)}</td>
                    <td>{Intl.NumberFormat('pt-BR', { style: 'decimal', useGrouping: 'true'})
                                        .format(fii.liquidez)}</td>
                    <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                        .format(fii.dividendo)}</td>
                    <td>{Intl.NumberFormat('pt-BR', { style: 'percent',minimumFractionDigits: '2'})
                                        .format(fii.dy/100)}</td>
                    <td>{Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: '2'})
                                        .format(fii.dy12Media/100)}</td>
                    <td>{fii.pvpa}</td>
                    <td>{fii.rentabilidadeTotal}</td>
                    <td>{Intl.NumberFormat('pt-BR', { style: 'percent',minimumFractionDigits: '2'})
                                        .format(fii.vacanciaFisica/100)}</td>
                    <td>{Intl.NumberFormat('pt-BR', { style: 'percent',minimumFractionDigits: '2'})
                                        .format(fii.vacanciaFinanceira/100)}</td>
                    <td>{fii.qtdeAtivos}</td>
                </tr>  
                ))}               
              
            </tbody>
        </table>
        </div>
    );
}