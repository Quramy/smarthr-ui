import * as React from 'react'
import styled, { css } from 'styled-components'

import { InjectedProps, withTheme } from '../../hocs/withTheme'

import { Icon, Props as IconProps } from '../Icon'

export interface HeaderButtonProps {
  children?: React.ReactNode
  url?: string
  target?: string
  icon?: IconProps['name']
}

const HeaderButtonComponent: React.FC<HeaderButtonProps & InjectedProps> = ({
  theme,
  ...props
}) => (
  <Wrapper theme={theme} href={props.url} target={props.target && props.target}>
    {props.icon && (
      <HeaderButtonIcon theme={theme} role="presentation">
        <Icon name={props.icon}></Icon>
      </HeaderButtonIcon>
    )}
    {props.children && props.children}
  </Wrapper>
)

export const HeaderButton = withTheme(HeaderButtonComponent)

const Wrapper: any = styled.a`
  ${({ theme }: InjectedProps) => {
    return css`
      display: block;
      margin: 0;
      padding: 0 ${theme.size.pxToRem(10)};
      color: #fff;
      font-size: ${theme.size.pxToRem(theme.size.font.TALL)};
      text-decoration: none;
      line-height: ${theme.size.pxToRem(50)};
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    `
  }}
`

const HeaderButtonIcon: any = styled.figure`
  ${({ theme }: InjectedProps) => {
    return css`
      display: inline-block;
      padding: 0;
      margin: 0 ${theme.size.pxToRem(theme.size.space.XXS)} 0 0;
      vertical-align: middle;
    `
  }}
`