/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Este es el mensaje que se vera por defecto en el label
     */
    label: string;
    /**
     * Este es el tamaño por defecto del label
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * colores  del label
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * Mayuscula y minuscula
     */
    allCarps?: boolean;
    /**
     * Fuente de color
     */
    fontColor?: string;
    /**
     * background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCarps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
