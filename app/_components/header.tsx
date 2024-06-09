import React from 'react';
import {MenuIcon, UserIcon} from "lucide-react";
import {Button} from "@/app/_components/ui/button";

const Header = () => {
    return (
        <header className='flex justify-between items-center p-5'>
            <Button>
                <MenuIcon/>
            </Button>
            <h1>WorkoutApp</h1>
            <Button>
                <UserIcon/>
            </Button>
        </header>
    );
};

export default Header;