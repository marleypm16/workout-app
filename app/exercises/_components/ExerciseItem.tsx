import React from 'react';
import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/app/_components/ui/card";
import { Badge } from '@/app/_components/ui/badge';
import Link from "next/link";
interface ExerciseItemProps {
    exercise: Exercise
}
const ExerciseItem = ({exercise} : ExerciseItemProps) => {
    return (
        <Link href={`/exercises/${exercise.id}`}>
            <Card>
                <CardContent>
                    <Image unoptimized src={exercise.gifUrl} width={100} height={100} alt={exercise.name}/>
                    <div className='flex items-center gap-4'>
                        {exercise.secondaryMuscles.map((muscle,index) => (
                            <Badge key={index}>{muscle}</Badge>
                        ))}
                    </div>
                    <CardTitle className='mt-4'>{exercise.name}</CardTitle>
                </CardContent>
            </Card>
        </Link>

    );
};

export default ExerciseItem;