import * as React from 'react'
import styled, { css } from 'styled-components'

import { InjectedProps, withTheme } from '../../hocs/withTheme'

export interface Props {
  className?: string
  value: string
  name: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  error?: boolean
  width?: number | string
  onChange?: (name: string, value: string) => void
  onBlur?: (name: string, value: string) => void
}

interface StyledProps extends InjectedProps {
  width: string
}

interface InputEvent {
  currentTarget: {
    value: string
  }
}

const inputFactory: (
  inputType: 'text' | 'number' | 'password',
) => React.ComponentType<Props & InjectedProps> = inputType => {
  return class InputComponent extends React.PureComponent<Props & InjectedProps> {
    public render() {
      const {
        className = '',
        value,
        name,
        required = false,
        placeholder = '',
        disabled = false,
        error = false,
        width = 'auto',
        theme,
      } = this.props
      const widthStyle = typeof width === 'number' ? `${width}px` : width
      const classNames = `${className} ${error ? 'error' : ''}`

      return (
        <Base
          className={classNames}
          type={inputType}
          value={value}
          name={name}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          width={widthStyle}
          theme={theme}
        />
      )
    }

    private handleChange = (e: InputEvent) => {
      const { name, onChange } = this.props
      const value = e.currentTarget.value
      if (onChange) onChange(name, value)
    }

    private handleBlur = (e: InputEvent) => {
      const { name, onBlur } = this.props
      const value = e.currentTarget.value
      if (onBlur) onBlur(name, value)
    }
  }
}

export const TextInput = withTheme(inputFactory('text'))
export const NumberInput = withTheme(inputFactory('number'))
export const PasswordInput = withTheme(inputFactory('password'))

const Base = styled.input`
  ${({ theme, width }: StyledProps) => {
    const { size, frame, palette } = theme

    return css`
      display: inline-block;
      width: ${width};
      padding: ${size.pxToRem(size.space.XXS)};
      border-radius: ${frame.border.radius.m};
      border: ${frame.border.default};
      background-color: #fff;
      font-size: ${size.pxToRem(size.font.TALL)};
      color: ${palette.TEXT_BLACK};
      line-height: 1.6;
      outline: none;
      box-sizing: border-box;

      &::placeholder {
        color: ${palette.TEXT_GREY};
      }

      &:focus {
        border-color: ${palette.hoverColor(palette.MAIN)};
      }

      &.error {
        border-color: ${palette.DANGER};
      }

      &[disabled] {
        border-color: ${palette.BORDER};
        pointer-events: none;
      }
    `
  }}
`
