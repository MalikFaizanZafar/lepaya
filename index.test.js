const { getLearner, getLearners, getTrainer, getCourse }  = require(".");

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


describe("getTrainer Tests", () => {
    test("getTrainer should return a trainer given trainerId exists", async() => {
        const trainerId = '65145028-c761-429d-a16b-fd41662dd793';
        const expectedResult = {id:"65145028-c761-429d-a16b-fd41662dd793", name:"Willis Schamberger"};
        const result = await getTrainer(trainerId);
        expect(result).toMatchObject(expectedResult);
    })

    test("getTrainer should throw an error given trainerId does not exists", async() => {
        const trainerId = 'some-random-trainer-id';
        const expectedResult = { statusCode: 404, error: 'Not Found', message: 'Not Found' };
        try{
            await getTrainer(trainerId);
        }catch(e){
            const result = e.response.data;
            expect(result).toMatchObject(expectedResult);
        }
    })
})


describe("getCourse Tests", () => {
    test("getCourse should return a course given courseId exists", async() => {
        const courseId = 'ef131a0c-3006-4a38-8cfd-085fa08f8361';
        const expectedResult = {
            id:"ef131a0c-3006-4a38-8cfd-085fa08f8361",
            title:"Business-focused bifurcated secured line",
            date:"2073-01-18T06:57:06.870Z",
            learners:[
               {
                  id:"b98509fc-a393-4e43-9bf3-32f506ec7fa0",
                  name:"Mrs. Johanna Lebsack"
               },
               {
                  id:"8ec62b73-d69d-43eb-b3c9-3b71aad259de",
                  name:"Patrick Mills"
               },
               {
                  id:"e9c7a7cd-33d5-4007-a6a4-11e9c208eb76",
                  name:"Kathleen Conroy"
               },
               {
                  id:"d7aaf22e-d82f-448e-bc09-a6072e788b20",
                  name:"Manuel Casper"
               },
               {
                  id:"3988158d-7309-46c1-bec1-8cb21b50f7b4",
                  name:"Rudy Walker"
               },
               {
                  id:"a259bc34-01c8-4452-89a1-66a36a01cc7b",
                  name:"Ernesto Wiza"
               }
            ],
            trainer:{
               id:"d2b16518-cb01-42b1-970a-a5337dffc155",
               name:"Miss Linda Conroy"
            }
         }
        const result = await getCourse(courseId);
        expect(result).toMatchObject(expectedResult);
    })

    test("getCourse should throw an error given courseId does not exists", async() => {
        const courseId = 'some-random-course-id';
        const expectedResult = { statusCode: 404, error: 'Not Found', message: 'Not Found' };
        try{
            await getCourse(courseId);
        }catch(e){
            const result = e.response.data;
            expect(result).toMatchObject(expectedResult);
        }
    })
})