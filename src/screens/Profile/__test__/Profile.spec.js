import { render, screen } from "@testing-library/react"
import { store } from "../../../components/utils/createMockStore";
import { MockProvider } from "../../../components/utils/MockProvider";
import { Profile } from "../Profile"

describe('Profile page', () => {
    it('checkbox has necessary label after render', () => {
        render(
            <MockProvider store={store}>
                <Profile />
            </MockProvider>
        );

        const label = screen.getByLabelText('Show user name');

        expect(label).toBeInTheDocument();
    });
});