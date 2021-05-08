type Props = {
  name: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#icon-` + props.name}> </use>
    </svg>
  )
}

export default Icon
