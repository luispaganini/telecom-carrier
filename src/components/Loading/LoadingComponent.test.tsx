import { render } from "@testing-library/react";
import LoadingComponent from "./LoadingComponent";

describe('LoadingComponent', () => {
    test('renders LoadingComponent', () => {
        const { getByText } = render(<LoadingComponent classname="flex justify-center" />);
        expect(getByText('Loading...')).toBeInTheDocument();
    });
});