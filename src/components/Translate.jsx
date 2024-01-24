import { useState } from 'react';
import { GetResponse } from '../utils/chatGptService';

const Translate = () => {
    const [input, setInput] = useState('');
    const [translate, setTranslate] = useState('');

    const handleSend = async () => {
        try {
            const { data } = await GetResponse(input);
            const content = data.choices?.[0].message?.content;

            if (content) {
                setTranslate(content);
            }
        } catch (error) {
            console.error('Ошибка при обработке запроса:', error);
            // Добавьте логику обработки ошибок по вашему усмотрению
        }
    };

    return (
        <div className="p-4 bg-gray-200">
            <input
                type="text"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                className="border border-gray-400 p-2 rounded"
            />
            <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            >
                {/* {fetching ? 'Fetching Ai response' : 'Translate'} */}
            </button>
            <p className="bg-gray-300 p-4 mt-4 rounded">{translate}</p>
        </div>
    );
};

export { Translate };
