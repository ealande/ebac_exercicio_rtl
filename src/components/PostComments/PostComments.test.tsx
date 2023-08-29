import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        const { debug } = render(<PostComment/>);
        debug()
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários na publicação', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target:{
                value: 'comentario1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('comentario'), {
            target:{
                value: 'comentario2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('comentario1') && screen.getByText('comentario2')).toBeInTheDocument()
    })
}); 