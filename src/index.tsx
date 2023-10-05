import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { XButton } from './design-system/components';
import { ButtonProps } from '@chakra-ui/react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactNode;
}

export interface ButtonComponentProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactNode;
  props?: ButtonProps;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export const Example: FC<ButtonComponentProps> = ({ children, props }) => {
  return <XButton {...props}>{children || `the snozzberries taste like snozzberries`}</XButton>;
};
