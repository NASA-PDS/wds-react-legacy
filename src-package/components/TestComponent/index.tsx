export default function TestComponent(props:any) {
  const { name = 'World' } = props

  return (
    <div>Hello, {name}!</div>
  )
}