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
  color: "primary" | "secondary" | "tertiary" ;
  /**
   * Mayuscula y minuscula
   */
  allCarps?: boolean;
  /**
   * Fuente de color
   */
  fontColor?: string;


}

export const MyLabel = ({
  label = "No Label",
  size  = "normal",
  color = "primary",
  allCarps = false,
  fontColor,
}: MyLabelProps) => {
  return <span style={{color:fontColor}} className= { `label ${size} text-${color} `}>
            {
              allCarps? label.toUpperCase() : label
            }
          </span>;
};
