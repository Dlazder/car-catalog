'use client'

import { Button } from "../Button";
import { Input } from "../Input";

export function CreateRecord() {
    
    return (
        <div>
            <Input placeholder="name"/>
            <Input placeholder="year"/>


            <Button>Создать</Button>
        </div>
    )
}