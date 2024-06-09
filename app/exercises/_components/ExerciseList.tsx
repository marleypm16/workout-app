import React from 'react';
import ExerciseItem from "@/app/exercises/_components/ExerciseItem";
interface ExerciseProps {
    exercises : Exercise[]
}
const ExerciseList = ({exercises} : ExerciseProps) => {
    return (
        <div>
            <h1 className='p-5'>Exercises</h1>
            <div className='p-5 flex flex-col gap-4 justify-center'>
                {exercises.map((exercise) => (
                    <ExerciseItem exercise={exercise} key={exercise.id}/>
                ))}
            </div>

        </div>
    );
};

export default ExerciseList;