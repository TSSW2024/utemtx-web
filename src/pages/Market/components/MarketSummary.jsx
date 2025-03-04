import React, { useEffect } from 'react';
import { getChangeColor } from '@utils/helpers';

const MarketSummary = ({ cryptoData, handleListClick }) => {
    useEffect(() => {
        console.log('Crypto data updated:', cryptoData);
    }, [cryptoData]);

    const handleItemClick = (name) => {
        handleListClick(name);
    };

    const renderTable = (category, title) => {
        if (!cryptoData[category] || cryptoData[category].length === 0) {
            return (
                <div className="bg-light dark:bg-secondary rounded-lg text-base flex flex-col gap-4 w-full px-4 py-2">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <div className="flex items-center justify-center h-24">
                        <p className="text-center text-red-500">
                            No se ha podido comunicar con el servidor. Si crees que este es un problema, comunícate con el equipo de soporte.
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-light dark:bg-secondary rounded-lg text-base flex flex-col gap-4 w-full px-4 py-2">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="flex flex-col gap-2">
                    {cryptoData[category].slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="font-bold flex bg-white dark:bg-secondary hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-lg shadow-lg border-b border-gray-300 dark:border-gray-700 flex-row items-center justify-between"
                            onClick={() => handleItemClick(item.name)} // Agrega función onClick
                        >
                            <div className="w-4/12 p-2 flex items-center gap-4 mr-8">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-8 w-8 rounded-full shadow-lg"
                                    onError={(e) => {
                                        e.target.src = '/utemtrades.svg';
                                    }}
                                />
                                {item.name}
                            </div>
                            <span className="text-sm">{item.price}</span>
                            <div className={`w-4/12 p-2 text-center ${getChangeColor(item.change_24h)}`}>
                                {item.change_24h}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className=" text-base flex flex-col gap-4 px-4 py-2">
            {renderTable('Populares', 'Populares')}
            {renderTable('Ganadores', 'Ganadores')}
            {renderTable('Perdedores', 'Perdedores')}
        </div>
    );
};

export default MarketSummary;
