// Import the js file to test
import { validateInput } from "../client/js/validateInput";

// Client side test for input validation
describe("Testing the input validation function", () => {
    test("Testing the validateInput() function", () => {
        // Added mock alert to suppress jest error
        window.alert = jest.fn();
        const In = 
        { 
            to: "CHENNAI",
            startDate: "20-11-2020",
            endDate: "21-11-2020"
        }
        expect(validateInput(In)).toBe(false);
    })
});