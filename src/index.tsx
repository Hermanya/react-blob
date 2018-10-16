import * as React from 'react'
import styled, {keyframes, css} from 'styled-components'
// import * as PropTypes from 'prop-types'

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
const radiuses = ['70%','60%', '50%', '40%', '55%', '45%']
const makeRadius1 = () => (
  new Array(4).fill(1).map(() => radiuses[Math.random() * radiuses.length | 0]).join(' ')
  + ' / ' +
  new Array(4).fill(1).map(() => radiuses[Math.random() * radiuses.length | 0]).join(' ')
)
const makeRadius2 = () => (
  new Array(2).fill(1).map(() => radiuses[Math.random() * radiuses.length | 0]).join(' ')
)

export const Blob = ({src, children, size, ...props}:{src: string, size: string, children: any}) => {
  let radius1 =  makeRadius1() || '60% 40% 30% 70% / 60% 30% 70% 40%'
  let radius2 = makeRadius2() || '40% 60%'
  return (
    <Shape size={size} radius1={radius1} radius2={radius2} {...props}>
      <ShapeContent>
        {src ? <Image src={src}></Image> : children}
      </ShapeContent>
    </Shape>
  )
}

// Blob.propTypes = {
//   src: PropTypes.string,
//   size: PropTypes.string
// }

// Blob.defaultProps = {
//   src: undefined,
//   size: '100%'
// }
