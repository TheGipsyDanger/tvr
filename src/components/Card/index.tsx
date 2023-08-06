import * as React from 'react';
import {Div} from '~/components/Atomics';
import {ICard} from '~/components/Card/Card.types';
import S from '~/components/Card/Card.styles';

export const Card = ({type, name, cardNumber, validity}: ICard.IView) => (
  <S.Container bg="green:light" testID={`Card`} radius="card">
    <Div mb={4}>
      <S.Label>{type}</S.Label>
    </Div>
    <Div>
      <S.Name>{name}</S.Name>
      <S.CardNumber>{`•••• •••• •••• ${cardNumber}`}</S.CardNumber>
      <S.Validate>{`Validade ${validity}`}</S.Validate>
    </Div>
  </S.Container>
);
