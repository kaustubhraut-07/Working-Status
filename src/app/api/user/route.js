import { NextResponse } from "next/server";
import { dbconnect } from "@/helper/db";

dbconnect();
export function GET(request){
    const users = [
        {
            id: 1,
            name: "Kaustubh"

        },
        {
            id: 2,
            name: "ankit"

        },
        {
            id: 3,
            name: "yogesh"

        },
    ];
    return NextResponse.json(users);

}