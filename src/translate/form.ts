export const form = {
  errors: {
    shared: {
      required: 'Este campo é obrigatório.',
    },
    addCard: {
      name: {
        format: 'Esse campo só aceita caracteres normais.',
      },
      cardNumber: {
        min: 'Tamanho mínimo de 16 caracteres',
      },
      validity: {
        min: 'Tamanho mínimo de 4 caracteres.',
        month: 'O mês deve ser menor ou igual 12.',
        year: 'O ano deve ser maior ou igual o ano atual.',
      },
      cvv: {
        min: 'Tamanho mínimo de 3 caracteres.',
      },
    },
  },
};
