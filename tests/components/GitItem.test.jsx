import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GitItem />' , () => {

    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'

    test('debe de mostrar el componente correctamente', () => {
        
        const {container} = render( <GifItem title={ title } url={ url } />)
        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe de mostrar el titulo en el componente', () => {
        
    })

})