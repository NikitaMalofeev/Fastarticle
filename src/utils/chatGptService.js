import axios from 'axios';

const GetResponse = (prompt) => {
    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 100,
    };

    // Assuming you have properly set up and configured your environment variable
    const apiKey = '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';

    if (!apiKey) {
        throw new Error(
            'API key is missing. Make sure to set the environment variable.'
        );
    }

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
    };

    return axios.post('https://api.openai.com/v1/chat/completions', data, {
        headers,
    });
};

export { GetResponse };
