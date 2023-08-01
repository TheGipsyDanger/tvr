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
        'h1:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.xlarge,
        },
        'h1:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.xlarge,
        },
        'h1:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.xlarge,
        },
        'h1:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.xlarge,
        },
        'h2:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.large,
        },
        'h2:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.large,
        },
        'h2:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.large,
        },
        'h2:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.large,
        },
        'h3:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.big,
        },
        'h3:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.big,
        },
        'h3:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.big,
        },
        'h3:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.big,
        },
        'h4:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.default,
        },
        'h4:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.default,
        },
        'h4:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.default,
        },
        'h4:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.default,
        },
        'h5:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.small,
        },
        'h5:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.small,
        },
        'h5:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.small,
        },
        'h5:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.small,
        },
        'h6:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.xsmall,
        },
        'h6:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.xsmall,
        },
        'h6:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.xsmall,
        },
        'h6:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.xsmall,
        },
        regular: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.tiny,
        },
        regularCaption: {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.tiny,
        },
        bold: {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.tiny,
        },
        boldCaption: {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.tiny,
        },
      },
    })
  ),
};
