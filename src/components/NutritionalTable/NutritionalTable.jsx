import './NutritionalTable.css';

const NutritionalTable = () => {
    return (
        <table className='table'>
            <thead>                
                <tr>
                    <td></td>
                    <td></td>
                    <td className='nutritional--category'>Proteínas</td>
                    <td className='nutritional--category'>Carbohidratos</td>
                    <td className='nutritional--category'>Grasas</td>
                    <td className='nutritional--category'>Calorías</td>
                </tr>
                <tr>
                    <td className='meal'>Pre-entreno (5:30 A.M)</td>
                </tr>
                <tr>
                    <td>Cantidad</td>
                <td className='description'>Descripción</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.0</td>
                    <td>Taza de café</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
            <thead></thead>
            <tbody></tbody>
            <thead></thead>
            <tbody></tbody>
        </table>
    );
}

export default NutritionalTable;
