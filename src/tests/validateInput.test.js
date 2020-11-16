// validates inputs  
import { validateInput } from "../client/js/validateInput";

describe("Testing the input validation function", () => {
    test("Testing the validateInput() function", () => {
        window.alert = jest.fn();
        const In = 
        { 
            to: "CHENNAI",
            startDate: "20-11-2020",
            endDate: "21-11-2020"
        }
        expect(validateInput(In)).toBe(true);
    })
});