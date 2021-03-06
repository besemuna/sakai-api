import MockAdapter from "axios-mock-adapter";
import SakaiApi from "../../src/index";
import { loadTestData } from "./utils";


describe("getSiteCalendar", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/calendar/site/.*.json"))
            .reply(200, loadTestData("getSiteCalendar.json"), {});

        const response = await api.getSiteCalendar("xxx");
        expect(response.status).toBe(200);
    });
});


describe("getMyCalendar", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/calendar/my.json"))
            .reply(200, loadTestData("getMyCalendar.json"), {});

        const response = await api.getMyCalendar();
        expect(response.status).toBe(200);
    });
});

describe("getEventCalendar", () => {
    it("respond with success", async () => {
        const api = new SakaiApi();
        const adapter = new MockAdapter(api.request);

        adapter.
            onGet(new RegExp("/direct/calendar/.*/.*\.json"))
            .reply(200, loadTestData("getEventCalendar.json"), {});

        const response = await api.getEventCalendar({ siteId: "xxx", eventId: "xxx" });
        expect(response.status).toBe(200);
    });
});