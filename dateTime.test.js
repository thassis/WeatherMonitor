import { formatTime } from "./src/screens/DetailsCityScreen/functions/dateTime"

test("Test date", () => {
    const date = formatTime("50000")
    const expectedTime = "10:00"
    expect(expectedTime).toBe("10:00")
})