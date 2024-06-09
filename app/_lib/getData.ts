export const getAllExercises = async (): Promise<Exercise[]> => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY as string,
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result: Exercise[] = await response.json();
        return result as Exercise[]
    } catch (error) {
        return [];
    }
}
