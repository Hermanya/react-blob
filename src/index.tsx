import * as React from "react";
import styled, { keyframes, css } from "styled-components";

type BlobProps = {
  src?: string;
  size?: string | number;
  /**
   * Default is "15s"
   */
  animationDuration?: string;
  /**
   * Default is "linear"
   */
  animationTimingFunction?: "ease" | "linear" | "ease-in-out";
  /**
   * Default is undefined, but you could set it to something like "2s"
   */
  animationDelay?: string;
  /**
   * Default is "infinite"
   */
  animationIterationCount?: "infinite" | number;
} & React.HTMLAttributes<HTMLElement>;

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

type ShapeProps = {
  size?: string | number;
  radius1: string;
  radius2: string;
  spinParams: string;
};

const Shape = styled.div<ShapeProps>`
  transition: border-radius 1s ease-out;
  transform-origin: center;
  overflow: hidden;
  ${props =>
    props.size &&
    css`
      width: ${props.size};
      height: ${props.size};
    `}
  ${props => css`
    border-radius: ${props.radius1};
    animation: ${keyframes`
      0% {
        border-radius: ${props.radius1};
      }
      100% {
        border-radius: ${props.radius2};
      }
    `} ${(Math.random() * 10) | (0 + 10)}s ease-in-out infinite both alternate,
      ${spin} ${props.spinParams};
  `}
`;

const ShapeContent = styled.div<{ spinParams: string }>`
  animation: ${spin} ${props => props.spinParams} reverse;
  transform-origin: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  transform: scale(1.25);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const randomRadiuses = (x: number) =>
  new Array(x)
    .fill(1)
    .map(() => radiuses[(Math.random() * radiuses.length) | 0])
    .join(" ");
const radiuses = ["70%", "60%", "50%", "40%", "55%", "45%"];
const makeRadius1 = () => randomRadiuses(4) + " / " + randomRadiuses(4);
const makeRadius2 = () => randomRadiuses(2);

export const Blob: React.FC<BlobProps> = ({
  src,
  children,
  size,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationIterationCount,
  ...props
}) => {
  let radius1 = makeRadius1();
  let radius2 = makeRadius2();
  const spinParams = `${animationDuration} ${animationTimingFunction} ${animationDelay} ${animationIterationCount}`;

  return (
    <Shape
      size={size}
      radius1={radius1}
      radius2={radius2}
      spinParams={spinParams}
      {...props}
    >
      <ShapeContent spinParams={spinParams}>
        {src ? <Image src={src}></Image> : children}
      </ShapeContent>
    </Shape>
  );
};

Blob.defaultProps = {
  animationDuration: "15s",
  animationTimingFunction: "linear",
  animationDelay: "",
  animationIterationCount: "infinite"
};
