const { getLearner, getLearners }  = require(".");

describe("getLearner Tests", () => {

    test("getLearner should return a learner given learnerId exists", async() => {
        const learnerId = 'b108a08f-1663-4755-a545-bd07e5c5074e';
        const expectedResult = {id:"b108a08f-1663-4755-a545-bd07e5c5074e", name:"Joy Reynolds DVM"};
        const result = await getLearner(learnerId);
        expect(result).toMatchObject(expectedResult);
    })

    test("getLearner should throw an error given learnerId does not exists", async() => {
        const learnerId = 'some-random-learner-id-which-does-not exist';
        const expectedResult = { statusCode: 404, error: 'Not Found', message: 'Not Found' };
        try{
            await getLearner(learnerId);
        }catch(e){
            const result = e.response.data;
            expect(result).toMatchObject(expectedResult);
        }
    })
})

describe("getLearners Tests", () => {
    test("getLearners should return learners given learnerIds exist", async() => {
        const learnerIds = ['b108a08f-1663-4755-a545-bd07e5c5074e', 'f155fc98-bcbd-4da8-bc83-290f7400341e'];
        const expectedResult = [{id:"b108a08f-1663-4755-a545-bd07e5c5074e", name:"Joy Reynolds DVM"}, {id:"f155fc98-bcbd-4da8-bc83-290f7400341e", name:"Dewey Shields"}];
        const result = await getLearners(learnerIds);
        expect(result).toMatchObject(expectedResult);
    })

    test("getLearners should throw an error given learnerIds do not exist", async() => {
        const learnerIds = ['some-random-learner-id', 'some-random-learner-id-2'];
        const expectedResult = { statusCode: 404, error: 'Not Found', message: 'Not Found' };
        try{
            await getLearners(learnerIds);
        }catch(e){
            const result = e.response.data;
            expect(result).toMatchObject(expectedResult);
        }
    })
})