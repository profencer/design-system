import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'input';

const StyledInput = styled(DEFAULT_TAG, {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$gray600',
  borderRadius: '$2',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',
  height: '$5',
  fontSize: '$1',
  px: '$1',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue500, inset 0 0 0 100px $colors$blue200',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast',
  },

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700, inset 0 0 0 100px $colors$blue200',
    },
  },
  '&::placeholder': {
    color: '$gray800',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray700',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$gray600',
    },
  },
  '&:read-only': {
    backgroundColor: '$gray100',
    // color: '$gray900',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$gray600',
    },
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        fontSize: '$1',
        px: '$1',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        height: '$5',
        fontSize: '$2',
        px: '$1',
        '&:-webkit-autofill::first-line': {
          fontSize: '$2',
        },
      },
      '3': {
        height: '$6',
        fontSize: '$3',
        px: '$2',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$gray600',
        },
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red600',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$red700, 0px 0px 0px 1px $colors$red700',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green600',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$green700, 0px 0px 0px 1px $colors$green700',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
});

type InputCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type InputVariants = Omit<StitchesVariants<typeof StyledInput>, 'size'>;
type InputOwnProps = InputCSSProp & InputVariants & { size?: any };

type InputComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, InputOwnProps>;

export const Input = React.forwardRef((props, forwardedRef) => {
  return <StyledInput {...props} ref={forwardedRef} />;
}) as InputComponent;

Input.toString = () => `.${StyledInput.className}`;
