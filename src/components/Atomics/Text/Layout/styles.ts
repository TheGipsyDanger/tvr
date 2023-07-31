import styled, {css} from 'styled-components/native';
import {Text as TextBase} from 'react-native';
import {ITextLayout} from '../data';
import {color, space, border, typography, variant} from 'styled-system';
import {theme, IFont, IFontSizes} from '~/styles/theme';

const Text = styled(TextBase)<ITextLayout>`
  ${space};
  ${color};
  ${typography};
  ${border};

  ${({textTransform}) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

  ${({textDecoration}) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}

  font-family: ${({font}: {font: keyof IFont}) => theme.fonts[font]};
  font-size: ${({fontSize}: {fontSize: keyof IFontSizes}) =>
    theme.fontSizes[fontSize]};
`;

export default {
  Text: styled(Text)(
    variant({
      variants: {
        header: {
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.fontSizes.big,
        },
        formError: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.small,
          color: theme.colors.red,
        },
        'h1:thin': {
          fontFamily: theme.fonts.thin,
          fontSize: theme.fontSizes.large,
        },
        'h1:extraLight': {
          fontFamily: theme.fonts.extraLight,
          fontSize: theme.fontSizes.large,
        },
        'h1:light': {
          fontFamily: theme.fonts.light,
          fontSize: theme.fontSizes.large,
        },
        h1: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.large,
        },
        'h1:medium': {
          fontFamily: theme.fonts.medium,
          fontSize: theme.fontSizes.large,
        },
        'h1:semiBold': {
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.fontSizes.large,
        },
        'h1:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.large,
        },
        'h1:extraBold': {
          fontFamily: theme.fonts.extraBold,
          fontSize: theme.fontSizes.large,
        },
        'h1:black': {
          fontFamily: theme.fonts.black,
          fontSize: theme.fontSizes.large,
        },
        'h2:thin': {
          fontFamily: theme.fonts.thin,
          fontSize: theme.fontSizes.big,
        },
        'h2:extraLight': {
          fontFamily: theme.fonts.extraLight,
          fontSize: theme.fontSizes.big,
        },
        'h2:light': {
          fontFamily: theme.fonts.light,
          fontSize: theme.fontSizes.big,
        },
        h2: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.big,
        },
        'h2:medium': {
          fontFamily: theme.fonts.medium,
          fontSize: theme.fontSizes.big,
        },
        'h2:semiBold': {
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.fontSizes.big,
        },
        'h2:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.big,
        },
        'h2:extraBold': {
          fontFamily: theme.fonts.extraBold,
          fontSize: theme.fontSizes.big,
        },
        'h2:black': {
          fontFamily: theme.fonts.black,
          fontSize: theme.fontSizes.big,
        },
        'h3:thin': {
          fontFamily: theme.fonts.thin,
          fontSize: theme.fontSizes.default,
        },
        'h3:extraLight': {
          fontFamily: theme.fonts.extraLight,
          fontSize: theme.fontSizes.default,
        },
        'h3:light': {
          fontFamily: theme.fonts.light,
          fontSize: theme.fontSizes.default,
        },
        h3: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.default,
        },
        'h3:medium': {
          fontFamily: theme.fonts.medium,
          fontSize: theme.fontSizes.default,
        },
        'h3:semiBold': {
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.fontSizes.default,
        },
        'h3:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.default,
        },
        'h3:extraBold': {
          fontFamily: theme.fonts.extraBold,
          fontSize: theme.fontSizes.default,
        },
        'h3:black': {
          fontFamily: theme.fonts.black,
          fontSize: theme.fontSizes.default,
        },
        'h4:thin': {
          fontFamily: theme.fonts.thin,
          fontSize: theme.fontSizes.small,
        },
        'h4:extraLight': {
          fontFamily: theme.fonts.extraLight,
          fontSize: theme.fontSizes.small,
        },
        'h4:light': {
          fontFamily: theme.fonts.light,
          fontSize: theme.fontSizes.small,
        },
        h4: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.small,
        },
        'h4:medium': {
          fontFamily: theme.fonts.medium,
          fontSize: theme.fontSizes.small,
        },
        'h4:semiBold': {
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.fontSizes.small,
        },
        'h4:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.small,
        },
        'h4:extraBold': {
          fontFamily: theme.fonts.extraBold,
          fontSize: theme.fontSizes.small,
        },
        'h4:black': {
          fontFamily: theme.fonts.black,
          fontSize: theme.fontSizes.small,
        },
        'h5:thin': {
          fontFamily: theme.fonts.thin,
          fontSize: theme.fontSizes.xsmall,
        },
        'h5:extraLight': {
          fontFamily: theme.fonts.extraLight,
          fontSize: theme.fontSizes.xsmall,
        },
        'h5:light': {
          fontFamily: theme.fonts.light,
          fontSize: theme.fontSizes.xsmall,
        },
        h5: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.xsmall,
        },
        'h5:medium': {
          fontFamily: theme.fonts.medium,
          fontSize: theme.fontSizes.xsmall,
        },
        'h5:semiBold': {
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.fontSizes.xsmall,
        },
        'h5:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.xsmall,
        },
        'h5:extraBold': {
          fontFamily: theme.fonts.extraBold,
          fontSize: theme.fontSizes.xsmall,
        },
        'h5:black': {
          fontFamily: theme.fonts.black,
          fontSize: theme.fontSizes.xsmall,
        },
        'h6:thin': {
          fontFamily: theme.fonts.thin,
          fontSize: theme.fontSizes.tiny,
        },
        'h6:extraLight': {
          fontFamily: theme.fonts.extraLight,
          fontSize: theme.fontSizes.tiny,
        },
        'h6:light': {
          fontFamily: theme.fonts.light,
          fontSize: theme.fontSizes.tiny,
        },
        h6: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.tiny,
        },
        'h6:medium': {
          fontFamily: theme.fonts.medium,
          fontSize: theme.fontSizes.tiny,
        },
        'h6:semiBold': {
          fontFamily: theme.fonts.semiBold,
          fontSize: theme.fontSizes.tiny,
        },
        'h6:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.tiny,
        },
        'h6:extraBold': {
          fontFamily: theme.fonts.extraBold,
          fontSize: theme.fontSizes.tiny,
        },
        'h6:black': {
          fontFamily: theme.fonts.black,
          fontSize: theme.fontSizes.tiny,
        },
      },
    })
  ),
};
