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
          fontSize: theme.fontSizes.h1,
        },
        'h1:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.h1,
        },
        'h1:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.h1,
        },
        'h1:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.h1,
        },
        'h2:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.h2,
        },
        'h2:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.h2,
        },
        'h2:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.h2,
        },
        'h2:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.h2,
        },
        'h3:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.h3,
        },
        'h3:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.h3,
        },
        'h3:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.h3,
        },
        'h3:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.h3,
        },
        'h4:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.h4,
        },
        'h4:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.h4,
        },
        'h4:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.h4,
        },
        'h4:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.h4,
        },
        'h5:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.h5,
        },
        'h5:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes.h5,
        },
        'h5:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.h5,
        },
        'h5:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes.h5,
        },
        'p:paragraph:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes['p:paragraph'],
        },
        'p:paragraph:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes['p:paragraph'],
        },
        'p:paragraph:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes['p:paragraph'],
        },
        'p:paragraph:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes['p:paragraph'],
        },
        'p:small:regular': {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes['p:small'],
        },
        'p:small:regularCaption': {
          fontFamily: theme.fonts.regularCaption,
          fontSize: theme.fontSizes['p:small'],
        },
        'p:small:bold': {
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes['p:small'],
        },
        'p:small:boldCaption': {
          fontFamily: theme.fonts.boldCaption,
          fontSize: theme.fontSizes['p:small'],
        },
      },
    })
  ),
};
