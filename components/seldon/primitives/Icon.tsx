/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { IconDefault } from "../icons/IconDefault"
import { CSSProperties, SVGAttributes } from "react"

export type IconProps = SVGAttributes<SVGSVGElement> & {} & {
  icon?: "__default__"
}

export function Icon({ style, icon, ...props }: IconProps) {
  const styles = style || defaultStyles

  const Icon = iconMap[icon || defaultProps.component.icon || "__default__"]
  return <Icon style={styles} {...{ ...defaultProps.component, ...props }} />
}

type DefaultProps = {
  component: IconProps
  children: IconProps
}
const defaultProps: DefaultProps = {
  component: {
    icon: "__default__",
  },
  children: {},
}
const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  fontSize: "1rem",
}
const iconMap = { __default__: IconDefault }
