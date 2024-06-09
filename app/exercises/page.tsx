import React from 'react';
import {getAllExercises} from '../_lib/getData';
import ExerciseList from "@/app/exercises/_components/ExerciseList";
import Header from "@/app/_components/header";

const ExercisesPage = async () => {
    const exercises = await getAllExercises();
    return (
        <div>
            <Header/>
            <ExerciseList exercises={exercises}/>
        </div>
    );
};

export default ExercisesPage;