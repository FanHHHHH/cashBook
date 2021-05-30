type Props = {
  name?: string
}

const Icon = (props: Props) => {
  return <svg className="icon">{props.name && <use xlinkHref={`#icon-` + props.name} />}</svg>
}

export default Icon
