import { fireEvent, render, screen } from "@testing-library/react";
import { Chat } from "../Chat";

describe("Chat", () => {
    it('init remove when button clicked', () => {
        const mockDelete = jest.fn();
        render(<Chat deleteChat={mockDelete} />);

        const button = screen.getByRole('button');

        fireEvent(
            button,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
        )

        expect(mockDelete).toHaveBeenCalledTimes(1);
    })
})