import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe('Message', () => {
    it('renders passed text', () => {
        render(<Message text="text" author="author" />);
        
        const text = screen.getByText("text");
        expect(text).toBeDefined();
    });

    it('matches snapshot', () => {
        const view = render(<Message text="text" author="author" />);

        expect(view).toMatchSnapshot();
    });
});