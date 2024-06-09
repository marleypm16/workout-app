import React from 'react';
import {getExerciseById} from "@/app/_lib/getExerciseById";
import Header from '@/app/_components/header';
interface ExercisePageProps {
    params : {
        id : string
    }
}
const ExercisePage = async ({params} : ExercisePageProps) => {
    const exercise = await getExerciseById(params.id)
    return (
        <div>
            <Header/>
            <h1>{exercise.name}</h1>
        </div>
    );
};

export default ExercisePage;