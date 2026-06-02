/*****
 *
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 * 
 *****/
 
import { HTMLAttributes } from "react"
import { Frame, FrameProps } from "../frames/Frame"
import { combineClassNames } from "../utils/class-name"

export interface BarTopProps extends HTMLAttributes<HTMLElement> {
  className?: string
  frame?: FrameProps
  frame2?: FrameProps
  frame3?: FrameProps
}

/**
 * Top Bar
 *
 * Level: Part
 *
 * Intent: Provides controls for the top of an application.
 *
 * Tags: navigation, topbar, menus, UI, header, section, links, routing
 *
 * @example
 * ```tsx
 * <BarTop
 *   frame="{}"
 *   frame1="{}"
 *   frame2="{}"
 * />
 * ```
 */
export function BarTop({
  className = "",
  frame = sdn.frame,
  frame2 = sdn.frame2,
  frame3 = sdn.frame3,
  ...props
}: BarTopProps) {
  const frameClassName = combineClassNames("sdn-bar-top", className)
  const frameProps = {
    ...sdn.frame,
    ...frame,
    className: combineClassNames(sdn.frame?.className, frame?.className),
  }
  const frame2Props = {
    ...sdn.frame2,
    ...frame2,
    className: combineClassNames(sdn.frame2?.className, frame2?.className),
  }
  const frame3Props = {
    ...sdn.frame3,
    ...frame3,
    className: combineClassNames(sdn.frame3?.className, frame3?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Frame {...frameProps}></Frame>
      <Frame {...frame2Props}></Frame>
      <Frame {...frame3Props}></Frame>
    </Frame>
  )
}

const sdn: BarTopProps = {
  frame: {
    className: "sdn-frame-b-iujsh54",
  },
  frame2: {
    className: "sdn-frame--sfhim7vu",
  },
  frame3: {
    className: "sdn-frame-l-ykep-f-a-u",
  },
}
