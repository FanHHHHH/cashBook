import { SVGAttributes } from 'react'
import classnames from 'classnames'

interface Props extends SVGAttributes<HTMLOrSVGElement> {
  name?: string
}

const Icon = (props: Props) => {
  const { children, name, className, ...rest } = props
  return (
    <svg className={classnames('icon', className)} {...rest}>
      {name && <use xlinkHref={`#icon-` + props.name} />}
    </svg>
  )
}

export default Icon
