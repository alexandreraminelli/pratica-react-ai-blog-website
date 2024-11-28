/* importação de componentes */
import ButtonWithIcon, { ButtonWithIconProps } from "../ButtonWithIcon/ButtonWithIcon"
/* componentes de ícones SVG */
import RedirectIcon from "../../icons/RedirectIcon" // ícone de redirecionamento

/**
 * Interface dos props do componente RedirectButtonProps.
 * Reutiliza a interface ButtonWithIconProps para manter a consistência.
 */
type RedirectButtonProps = Omit<ButtonWithIconProps, "Icon">

/**
 * Componente do botão de redirecionamento.
 */
export default function RedirectButton(props: RedirectButtonProps): JSX.Element {
  return (
    <ButtonWithIcon
      Icon={RedirectIcon} // ícone de redirecionamento
      {...props} // repassar os demais props do ícone
    />
  )
}
