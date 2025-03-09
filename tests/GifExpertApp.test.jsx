import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    const newCategory = 'Programing';
    const arrayCategories = [ 'Javascript', 'React', 'Angular' ];

    test('Agregar nuevas categorias', () => {
        
        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        arrayCategories.forEach( (category) => {
            fireEvent.input( input, { target: { value: category }});
            fireEvent.submit( form );
        });

        const titleCategories = screen.getAllByRole('heading', { level: 3 });
        expect( titleCategories.length ).toBe( arrayCategories.length + 1);
    
    });

    test('No debe de agregar una categoria que ya existe', () => {
    
        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: newCategory }});
        fireEvent.submit( form );

        const categories = screen.getAllByRole('heading', { level: 3, name: newCategory });
        expect( categories.length ).toBe(1);

    });

});