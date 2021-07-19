export async function handler(event) {
    const body = JSON.parse(event.body);

    const genre = body.genre;
    const pageState = body.pageState;

    const url = process.env.ASTRA_GRAPHQL_ENDPOINT;
    
    const query = `
    query {
        movies_by_genre (
            value: { genre: ${JSON.stringify(genre)}},
            orderBy: [year_DESC],
            options: { pageSize: 6, pageState: ${JSON.stringify(pageState)} }
            ) {
                values {
                    year,
                    title,
                    duration,
                    synopsis,
                    thumbnail
                }
                pageState
            }
        }
    `;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-cassandra-token": process.env.ASTRA_DB_APPLICATION_TOKEN
        },
        body: JSON.stringify({ query })
    });

    try {
        const res = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(res)
        };
     } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
}