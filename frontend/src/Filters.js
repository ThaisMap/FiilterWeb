import React from 'react';

export default function Filters(){
    return(
        <form className='filtros'> 
            <input type='text' placeholder='Valor <'/>
            <input type='text' placeholder='Liquidez >'/>
            <input type='text' placeholder='Ultimo DY >'/>
            <input type='text' placeholder='DY 12 média >'/>
            <input type='text' placeholder='P/VPA <'/>
            <input type='text' placeholder='Qtd Ativos >'/>
        </form>
    );
}
