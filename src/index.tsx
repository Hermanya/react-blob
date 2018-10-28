import * as React from 'react'
import styled, {keyframes, css} from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`
const spinParams = '22s linear infinite'

const Shape = styled.div`
  transition: border-radius 1s ease-out;
  transform-origin: center;
  overflow: hidden;
  ${(props:{size: string}) => props.size && css`
    width: ${props.size};
    height: ${props.size};
  `}
  ${(props:any) => css`
    border-radius: ${props.radius1};
    animation: ${keyframes`
      0% {
        border-radius: ${props.radius1};
      }
      100% {
        border-radius: ${props.radius2};
      }
    `} ${Math.random()*10 |0 + 10}s ease-in-out infinite both alternate,
  ${spin} ${spinParams};
  `}
`

const ShapeContent = styled.div`
  animation: ${spin} ${spinParams} reverse;
  transform-origin: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  transform: scale(1.25);
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const randomRadiuses = (x:number) =>  new Array(x).fill(1).map(() => radiuses[Math.random() * radiuses.length | 0]).join(' ')
const radiuses = ['70%','60%', '50%', '40%', '55%', '45%']
const makeRadius1 = () => randomRadiuses(4) + ' / ' + randomRadiuses(4)
const makeRadius2 = () => randomRadiuses(2)

export class Blob extends React.PureComponent<any> {
  render () {
    let {src, children, size, ...props} = this.props
    let radius1 =  makeRadius1()
    let radius2 = makeRadius2()
    return (
      <Shape size={size} radius1={radius1} radius2={radius2} {...props}>
        <ShapeContent>
          {src ? <Image src={src}></Image> : children}
        </ShapeContent>
      </Shape>
    )
  }
}
