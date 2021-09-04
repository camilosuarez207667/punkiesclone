// import * as React from "react"
import { FC } from 'react';

interface SvgProps {
    fill: string;
    height: string;
    width: string;
}

export const Facebook: FC<SvgProps> = ({ fill, height, width }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 167.657 167.657"
            {...fill}
        >
            <path
                d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                fill={fill}
                height={height}
                width={width}
            />
        </svg>
    )
}


export default Facebook